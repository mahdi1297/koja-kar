import * as express from 'express';
import { AuthRouter } from './app/auth/router/auth.router';
import { CodeRouter } from './app/auth/router/code.router';
import { CompanyRouter } from './app/company/router/router.company';
import { JobRouter } from './app/job/router/job.router';

const app = express();

export class Bootstrap {
  get baseRoutes() {
    app
      .use('/api/v1/auth/', new AuthRouter().routes_v1)
      .use('/api/v1/company/', new CompanyRouter().routes_v1)
      .use('/api/v1/job/', new JobRouter().routes_v1)
      .use('/api/v1/code/', new CodeRouter().routes_v1);

    return app;
  }
}
