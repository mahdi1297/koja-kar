/* eslint-disable @typescript-eslint/no-explicit-any */
// import Company from '@dev/domain';

import ComponySchema from './../infrastructure/context';
import { Company } from '@dev/domain';
import { ICompany } from './company.service.interface';

export class CompanyService implements ICompany {
  private _context;

  constructor() {
    this._context = ComponySchema;
  }
  async existsId(_id: string): Promise<boolean> {
    return await this._context.exists({ _id });
  }

  async getList(): Promise<Company[]> {
    return await this._context.find().lean();
  }

  async existsName(name: string): Promise<boolean> {
    return await this._context.exists({ name });
  }

  async create(data: Company): Promise<Company> {
    return await this._context.create(data);
  }

  async getByName(name: string): Promise<Company> {
    return await this._context.findOne({ name });
  }

  async getById(_id: string): Promise<Company> {
    return await this._context.findOne({ _id });
  }

  async update(_id: string, data: any): Promise<Partial<Company>> {
    const result = await this._context
      .findOneAndUpdate(
        { _id },
        {
          name: data.name,
          'companyInfo.coverImage': data.coverImage,
          'companyInfo.ceo': data.ceo,
          'companyInfo.logo': data.logo,
          'companyInfo.currentActiveJobs': data.currentActiveJobs,
          'companyInfo.companyType': data.companyType,
          'companyInfo.totalJobs': data.totalJobs,
          'companyInfo.companySize': data.companySize,
          'companyInfo.website': data.website,
          'companyInfo.email': data.email,
          'companyInfo.location': data.location,
          'companyInfo.description': data.description,
        },
        { new: true }
      )
      .lean();

    return result;
  }

  async remove(_id: string): Promise<string> {
    return await this._context.updateOne({ _id }, { isRemoved: true });
  }
  async refactor(_id: string): Promise<string> {
    return await this._context.updateOne({ _id }, { isRemoved: false });
  }
}
