import { CompanyType } from './company-type';

export class Company {
  name: string;
  companyInfo: {
    companySize: number;
    coverImage: string;
    logo: string;
    ceo: string;
    companyType: CompanyType[];
    website: string;
    email: string;
    location: string;
    description: string;
  };
  isRemoved: boolean;
  isBanned: boolean;
  isDataCompleted: boolean;
}
