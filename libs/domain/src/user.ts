/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserRole } from '@dev/types';

export interface User {
  _id?: string;
  username: string;
  phone: string;
  isEmailConfirmed: boolean;
  resume: any[];
  jobSends: any[];
  isBanned: boolean;
  profileImage: string;
  userType: string;
  role: UserRole;
  token: string;
}
