/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@dev/domain';
import { AuthService } from '../../service/auth.service';
import { AuthApplicationContracts } from '../contracts/auth.application-contracts';
import { ResponseStatusCode } from './../../../../types';
import { errorGenerator, signToken } from './../../../../helper';
import { CodeService } from '../../service/code.service';

export class AuthApplication implements AuthApplicationContracts {
  private _authService: AuthService;
  private _codeService: CodeService;

  constructor() {
    this._authService = new AuthService();
    this._codeService = new CodeService();
  }

  async getUser(token: string): Promise<any> {
    try {
      const result = await this._authService.getByToken(token);

      if (!result || result === undefined) {
        const errorBody = errorGenerator({
          error: true,
          status: ResponseStatusCode.NOT_FOUND,
          errorMessage: 'user dosnt exists',
        });
        return errorBody;
      }

      return result;
    } catch (err) {
      const errorBody = errorGenerator({
        error: true,
        status: ResponseStatusCode.NOT_FOUND,
        errorMessage: 'user dosnt exists',
      });
      return errorBody;
    }
  }

  async register(phone: any): Promise<User | any> {
    // Check if user exists
    const existsUser = await this._authService.existsPhone(parseInt(phone));

    // User exists, the login
    if (existsUser) {
      const result = await this._authService.getByPhone(parseInt(phone));

      if (!result) {
        const errorBody = errorGenerator({
          error: true,
          status: ResponseStatusCode.NOT_FOUND,
          errorMessage: 'user dosnt exists',
        });
        return errorBody;
      }

      await this.codeGenerator(result._id);
      return result._id;
    } else {
      // User dosent exists, so register

      const token = signToken('phone');

      const userData = {
        phone,
        token,
      };

      // Generate user data in database
      const result = await this._authService.create(userData);

      if (!result) {
        const errorBody = errorGenerator({
          error: true,
          status: ResponseStatusCode.NOT_FOUND,
          errorMessage: 'User not found',
        });
        return errorBody;
      }

      await this.codeGenerator(result._id);
      return result._id;
    }
  }

  async codeGenerator(id: string) {
    const codePassGenerator = () => {
      return 100000 + Math.floor(Math.random() * 900000);
    };

    const randomCode = codePassGenerator();

    const codeObject = {
      userId: id,
      value: randomCode,
    };

    const generateCode = await this._codeService.create(codeObject);

    return generateCode;
  }
}
