import { AppRouter, AppRouterType } from '../../../app-router';
import { CodeController } from '../controller/code.controller';

export class CodeRouter {
  _router: AppRouterType;
  _controller: CodeController;

  constructor() {
    this._router = AppRouter();
    this._controller = new CodeController();
  }

  get routes_v1() {
    this._router.post('/send', this._controller.sendCode);

    return this._router;
  }
}
