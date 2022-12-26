/* eslint-disable @typescript-eslint/no-explicit-any */
import { Company } from '@dev/domain';
import { errorGenerator } from './../../../../helper/error-generator';
import { ResponseStatusCode } from './../../../../types';
import { CompanyService } from '../../service/company.service';
import { CompnayContracts } from '../contracts/company.contracts';
import { passworHasher } from 'apps/api/src/helper';

export class CompanyApplication implements CompnayContracts {
  private _service: CompanyService;

  constructor() {
    this._service = new CompanyService();
  }

  async list(): Promise<Company[] | any> {
    const result = await this._service.getList();

    if (!result) {
      const errorBody = errorGenerator({
        error: true,
        status: ResponseStatusCode.BAD_REQUEST,
        errorMessage: 'Something wrong happend',
      });
      return errorBody;
    }

    return result;
  }

  async register(email: string, pass: string): Promise<any> {
    const existsCompany = await this._service.getByEmail(email);

    if (existsCompany) {
      const errorBody = errorGenerator({
        error: true,
        status: ResponseStatusCode.BAD_REQUEST,
        errorMessage: 'Company exists',
      });
      return errorBody;
    }

    const password = await passworHasher(pass);

    const result = await this._service.create(email, password);

    if (!result) {
      const errorBody = errorGenerator({
        error: true,
        status: ResponseStatusCode.BAD_REQUEST,
        errorMessage: 'Something wrong happend',
      });
      return errorBody;
    }

    return result;
  }

  async update(
    _id: string,
    data: Partial<Company | any>
  ): Promise<Company | any> {
    const companyExists = await this._service.existsId(_id);

    if (!companyExists) {
      const errorBody = errorGenerator({
        error: true,
        status: ResponseStatusCode.BAD_REQUEST,
        errorMessage: 'Company does not exist',
      });
      return errorBody;
    }

    const { updateBody } = data;

    const result = await this._service.update(_id, updateBody);

    if (!result) {
      const errorBody = errorGenerator({
        error: true,
        status: ResponseStatusCode.BAD_REQUEST,
        errorMessage: 'Something wrong happend',
      });
      return errorBody;
    }

    return result;
  }

  async remove(_id: string): Promise<any> {
    const result = await this._service.remove(_id);
    if (!result) {
      const errorBody = errorGenerator({
        error: true,
        status: ResponseStatusCode.BAD_REQUEST,
        errorMessage: 'Something wrong happend',
      });
      return errorBody;
    }

    return result;
  }

  async refactor(_id: string): Promise<any> {
    const result = await this._service.refactor(_id);

    if (!result) {
      const errorBody = errorGenerator({
        error: true,
        status: ResponseStatusCode.BAD_REQUEST,
        errorMessage: 'Something wrong happend',
      });
      return errorBody;
    }

    return result;
  }
}
