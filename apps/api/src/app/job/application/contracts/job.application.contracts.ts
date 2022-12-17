/* eslint-disable @typescript-eslint/no-explicit-any */
import { Job } from '@dev/domain';

export interface ApplicationContracts {
  create(data: Job): Promise<Job | any>;
  getDetail(id: string): Promise<Job | any>;
  update(_id: string, data: Job): Promise<Job | any>;
  updateCompanyInfo(_id: string, data: Job): Promise<Job | any>;
  remove(_id: string): Promise<Job | any>;
  refactor(_id: string): Promise<Job | any>;
}
