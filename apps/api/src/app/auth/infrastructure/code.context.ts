import { Code } from '@dev/domain';
import Context from '../../../config/context';
import mongoose from 'mongoose';

const dbContextConnection = Context.mongooseConnection;

const { Schema } = mongoose;

const CodeSchema = new Schema(
  {
    userId: {
      type: String,
    },
    value: {
      type: Number,
      unique: true,
      index: true,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const schema = dbContextConnection.model<Code>('code', CodeSchema);
export default schema;
