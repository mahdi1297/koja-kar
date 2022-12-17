import { Company, User } from '@dev/domain';

export interface IUserService {
  create(data: Company): Promise<Company>;
  existsPhone(phone: number): Promise<boolean>;
  getByPhone(phone: number): Promise<Company>;
  getById(_id: string): Promise<User>;
  getByToken(token: string): Promise<User>;
}
