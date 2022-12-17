/* eslint-disable @typescript-eslint/no-explicit-any */
import { Company } from '@dev/domain';
import { errorGenerator } from './../../../../helper/error-generator';
import { ResponseStatusCode } from './../../../../types';
import { CompanyService } from '../../service/company.service';
import { CompnayContracts } from '../contracts/company.contracts';

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

  async create(data: Company): Promise<any> {
    const { name } = data;

    const existsCompany = await this._service.existsName(name);

    if (existsCompany) {
      const errorBody = errorGenerator({
        error: true,
        status: ResponseStatusCode.BAD_REQUEST,
        errorMessage: 'Company exists',
      });
      return errorBody;
    }

    const result = await this._service.create(data);
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
