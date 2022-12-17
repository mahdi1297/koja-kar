/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@dev/domain';
import AuthContext from '../infrastructure/auth.context';
import { IUserService } from './interfaces/auth.service.interface';

export class AuthService implements IUserService {
  private _context;

  constructor() {
    this._context = AuthContext;
  }

  async getByToken(token: string): Promise<User> {
    return await this._context.findOne({ token });
  }

  async getById(_id: string): Promise<User> {
    return await this._context.findOne({ _id }, ['token']);
  }

  async create(data: any) {
    return await this._context.create(data);
  }

  async existsPhone(phone: number) {
    return await this._context.exists({ phone });
  }

  async getByPhone(phone: number) {
    return await this._context.findOne({ phone });
  }
}
