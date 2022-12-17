import mongoose from 'mongoose';
import { environment } from '../environments/environment';

class Context {
  static mongooseInstance;
  static mongooseConnection: mongoose.Connection;

  constructor() {
    Context.connect();
  }

  static connect(): mongoose.Connection {
    if (this.mongooseInstance) return this.mongooseInstance;

    this.mongooseConnection = mongoose.connection;
    this.mongooseConnection.once('open', () => {
      console.log('connected to db successfully');
    });
    this.mongooseInstance = mongoose.connect(
      environment.MONGOOSE_CONNECTION_KEY
    );
    return this.mongooseInstance;
  }
}

Context.connect();
export default Context;
