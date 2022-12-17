import { Company } from '@dev/domain';
import Context from './../../../config/context';
import mongoose from 'mongoose';

const { Schema } = mongoose;

const dbContextConnection = Context.mongooseConnection;

const CompanySchema = new Schema(
  {
    name: {
      type: String,
      index: true,
    },
    companyInfo: {
      companySize: {
        type: Number,
        default: 5,
      },
      coverImage: {
        type: String,
        default: 'Something default',
      },
      logo: {
        type: String,
        default: 'Seomthing logo',
      },
      ceo: {
        type: String,
      },
      companyType: {
        type: [String],
      },
      currentActiveJobs: {
        type: Number,
        default: 0,
      },
      totalJobs: {
        type: Number,
        default: 0,
      },
      website: {
        type: String,
      },
      email: {
        type: String,
      },
      location: {
        type: String,
      },
      description: {
        type: String,
      },
    },
    isRemoved: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    isDataCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const schema = dbContextConnection.model<Company>('companies', CompanySchema);

export default schema;
