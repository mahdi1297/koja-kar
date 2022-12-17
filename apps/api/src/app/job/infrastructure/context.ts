import Context from './../../../config/context';
import mongoose from 'mongoose';
import { Job } from '@dev/domain';
import { Salery } from '@dev/types';

const { Schema } = mongoose;

const dbContextConnection = Context.mongooseConnection;

const JobSchema = new Schema(
  {
    title: {
      type: String,
    },
    companyInfo: {
      companyName: {
        type: String,
      },
      companyId: {
        type: String,
      },
      logo: {
        type: String,
      },
      companyWebsite: {
        type: String,
      },
      companySize: {
        type: String,
      },
      companyDescription: {
        type: String,
      },
    },
    category: {
      type: String,
    },
    jobType: {
      type: String,
    },
    contractType: {
      type: String,
    },
    experience: {
      type: String,
    },
    location: {
      type: String,
    },
    gender: {
      type: String,
    },
    militaryServiceStatus: {
      type: String,
    },
    degree: {
      type: String,
    },
    abilities: {
      type: [String],
    },
    content: {
      type: String,
    },
    isFinishedTime: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    salery: {
      type: String,
      enum: [Salery],
      default: Salery.AGREEMENTAL,
    },
    remoteAvailabel: {
      type: Boolean,
      default: false,
    },
    SupplementaryInsurance: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const schema = dbContextConnection.model<Job>('jobs', JobSchema);

export default schema;
