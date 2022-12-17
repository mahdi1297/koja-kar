import { Code } from '@dev/domain';
import { convertMilliSecToMin, errorGenerator } from '../../../../helper';
import { ResponseStatusCode } from '../../../../types';
import { AuthService } from '../../service/auth.service';
import { CodeService } from '../../service/code.service';
import { CodeApplicationContracts } from '../contracts/code.application-contracts';

export class CodeApplication implements CodeApplicationContracts {
  private _codeService;
  private _authService;

  constructor() {
    this._codeService = new CodeService();
    this._authService = new AuthService();
  }

  async sendCode(code: string, userId: string): Promise<Code | any> {
    try {
      const result = await this._codeService.validate(code, userId);

      if (!result) {
        const errorBody = errorGenerator({
          error: true,
          status: ResponseStatusCode.NOT_FOUND,
          errorMessage: 'No code',
        });
        return errorBody;
      }

      const codeCreationTime = result.createdAt;

      const dateSample: any = new Date(codeCreationTime);
      const currentTime: any = new Date();

      const diffTime = Math.abs(dateSample - currentTime);

      const minuteTime = convertMilliSecToMin(diffTime);

      if (parseInt(minuteTime) > 2) {
        await this._codeService.deActiveCode(result._id);

        const errorBody = errorGenerator({
          error: true,
          status: ResponseStatusCode.NOT_FOUND,
          errorMessage: 'No valid code',
        });
        return errorBody;
      }

      const userData = await this._authService.getById(userId);

      if (!userData) {
        const errorBody = errorGenerator({
          error: true,
          status: ResponseStatusCode.NOT_FOUND,
          errorMessage: 'No user found, please login again',
        });
        return errorBody;
      }

      return userData;
    } catch (err) {
      const errorBody = errorGenerator({
        error: true,
        status: ResponseStatusCode.NOT_FOUND,
        errorMessage: 'No code',
      });
      return errorBody;
    }
  }

  async removeCode(_id: string) {
    throw new Error('Method not implemented.');
  }
}
