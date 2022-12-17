/* eslint-disable @typescript-eslint/no-explicit-any */
import { Company } from '@dev/domain';

export interface CompnayContracts {
  list(): Promise<Company[] | any>;
  create(data: Company): Promise<Company | any>;
  update(_id: string, data: Partial<Company>): Promise<Company | any>;
  remove(_id: string): Promise<any>;
  refactor(_id: string): Promise<any>;
}
