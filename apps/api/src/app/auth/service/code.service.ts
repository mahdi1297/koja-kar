import { Code } from '@dev/domain';
import CodeContext from './../infrastructure/code.context';
import { ICodeService } from './interfaces/code.service.interface';

export class CodeService implements ICodeService {
  private _context;

  constructor() {
    this._context = CodeContext;
  }

  async create(data: Code) {
    return await this._context.create(data);
  }

  async validate(code: string, userId: string): Promise<Code> {
    // return await this._context.find({ $and: [{ code }, { userId }] });
    return await this._context.findOne({ value: code, userId: userId });
  }

  async deActiveCode(_id: string) {
    return await this._context.findOneAndUpdate({ _id }, { isValid: false });
  }
}
