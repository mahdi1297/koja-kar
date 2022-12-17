/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@dev/domain';
// import { UserType } from '@dev/types';

export interface AuthApplicationContracts {
  register(phone: number): Promise<User | any>;
  getUser(token: string): Promise<User | any>;
}
