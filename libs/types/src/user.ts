import { UserPreferedJob } from './user-prefered-job';

export interface User {
  username: string;
  password: string;
  profile_image: string;
  phone: number;
  resume: any;
  applyed_jobs: [];
  isConfirmedEmail: boolean;
  isConfirmedPhone: boolean;
  likedJobs: any[];
  preferedJob: UserPreferedJob;
  u_id: string;
}
