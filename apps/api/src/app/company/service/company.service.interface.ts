import { Company } from '@dev/domain';

export interface ICompany {
  getList(): Promise<Company[]>;
  create(data: Company): Promise<Company>;
  getByName(name: string): Promise<Company>;
  getById(_id: string): Promise<Company>;
  existsName(name: string): Promise<boolean>;
  existsId(_id: string): Promise<boolean>;
  update(_id: string, data: Partial<Company>): Promise<Partial<Company>>;
  remove(_id: string): Promise<string>;
  refactor(_id: string): Promise<string>;
}
