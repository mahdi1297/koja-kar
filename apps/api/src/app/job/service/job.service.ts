import { Job } from '@dev/domain';
import { JobSericeInterface } from './job.service.interface';
import JobContext from './../infrastructure/context';

export class JobService implements JobSericeInterface {
  private _context;

  constructor() {
    this._context = JobContext;
  }

  async getById(_id: string): Promise<Job> {
    return await this._context.findOne({ _id });
  }

  async existsById(_id: string): Promise<boolean> {
    return await this._context.exists({ _id });
  }

  async list(): Promise<Job[]> {
    return await this._context.find({});
  }

  async create(data: Job): Promise<Job> {
    return await this._context.create(data);
  }

  async updateCompanyInfo(_id: string, data: any): Promise<Job> {
    return await this._context.findOneAndUpdate(
      { _id },
      {
        'companyInfo.companyName': data.companyName,
        'comapnyInfo.companyId': data.companyId,
        'companyInfo.logo': data.logo,
        'companyInfo.companyWebsite': data.companyWebsite,
        'companyInfo.companySize': data.companySize,
        'companyInfo.companyDescription': data.companyDescription,
      },
      { new: true }
    );
  }

  async update(_id: string, data: Partial<Job>): Promise<Job> {
    //
    return await this._context.findOneAndUpdate(
      { _id },
      {
        title: data.title,
        category: data.category,
        jobType: data.jobType,
        experience: data.experience,
        location: data.location,
        gender: data.gender,
        militaryServiceStatus: data.militaryServiceStatus,
        degree: data.degree,
        abilities: data.abilities,
        content: data.content,
        contractType: data.contractType,
      },
      { new: true }
    );
  }

  async remove(_id: string): Promise<boolean> {
    return await this._context.updateOne({ _id }, { isBanned: true });
  }

  async refactor(_id: string): Promise<boolean> {
    return await this._context.updateOne({ _id }, { isBanned: false });
  }
}
