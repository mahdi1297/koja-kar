import { AppRouter, AppRouterType } from './../../../app-router';
import { JobController } from '../controller/job.controller';

export class JobRouter {
  _router: AppRouterType;
  _controller: JobController;

  constructor() {
    this._router = AppRouter();
    this._controller = new JobController();
  }

  get routes_v1() {
    this._router
      .get('/', this._controller.list)
      .get('/:id', this._controller.getDetail)
      .post('/', this._controller.create)
      .put('/company-info', this._controller.updateCompanyInfo)
      .put('/', this._controller.update)
      .delete('/', this._controller.remove)
      .put('/refactor', this._controller.refactor);

    return this._router;
  }
}
