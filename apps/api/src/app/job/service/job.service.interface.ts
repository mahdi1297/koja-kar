import { Job } from '@dev/domain';

export interface JobSericeInterface {
  list(): Promise<Job[]>;
  create(data: Job): Promise<Job>;
  existsById(_id: string): Promise<boolean>;
  getById(_id: string): Promise<Job>;
  update(_id: string, data: Job): Promise<Job>;
  updateCompanyInfo(_id: string, data: any): Promise<Job>;
  remove(_id: string): Promise<boolean>;
  refactor(_id: string): Promise<boolean>;
}
