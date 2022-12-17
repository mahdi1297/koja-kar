import {
  Gender,
  JobContract,
  MilitaryServiceStatus,
  Salery,
  WorkExperience,
} from '@dev/types';

export class Job {
  _id?: string;
  title: string;
  companyInfo: {
    companyName: string;
    companyId: string;
    logo: string;
    companyWebsite: string;
    companySize: number;
    companyDescription: string;
  };
  category: string;
  jobType: string;
  experience: WorkExperience;
  location: string;
  gender: Gender;
  contractType: JobContract;
  militaryServiceStatus: MilitaryServiceStatus;
  degree: string;
  abilities: string;
  content: string;
  isFinishedTime: boolean;
  isBanned: boolean;
  isActive: boolean;
  salery: Salery;
  remoteAvailabel: boolean;
  // بیمه تکمیلی
  SupplementaryInsurance: boolean;
}
