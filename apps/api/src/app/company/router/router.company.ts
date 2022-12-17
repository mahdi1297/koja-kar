import { AppRouter, AppRouterType } from '../../../app-router';
import { CompanyController } from '../controller/company.controller';

export class CompanyRouter {
  _router: AppRouterType;
  _controller: CompanyController;

  constructor() {
    this._router = AppRouter();
    this._controller = new CompanyController();
  }

  get routes_v1() {
    this._router
      .get('/list', this._controller.list)
      .post('/', this._controller.create)
      .put('/', this._controller.update)
      .delete('/', this._controller.remove)
      .post('/:_id/refactor', this._controller.refactor);

    return this._router;
  }
}
