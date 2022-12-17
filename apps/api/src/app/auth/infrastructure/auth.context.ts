import { User } from '@dev/domain';
import Context from '../../../config/context';
import mongoose from 'mongoose';
import { UserRole, UserType } from '@dev/types';

const { Schema } = mongoose;

const dbContextConnection = Context.mongooseConnection;

const AuthSchema = new Schema({
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  isEmailConfirmed: {
    type: Boolean,
    default: false,
  },
  resume: {
    type: Object,
  },
  jobSends: {
    type: Object,
  },
  isBanned: {
    type: Boolean,
    default: false,
  },
  userType: {
    type: String,
    default: UserType.USER,
  },
  role: {
    type: String,
    default: UserRole.USER,
  },
  token: {
    type: String,
  },
  profileImage: {
    type: String,
    default:
      'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
  },
});

const schema = dbContextConnection.model<User>('users', AuthSchema);

export default schema;
