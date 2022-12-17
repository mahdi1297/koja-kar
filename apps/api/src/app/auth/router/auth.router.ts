import { AppRouter, AppRouterType } from '../../../app-router';
import { AuthController } from '../controller/auth.controller';

export class AuthRouter {
  _router: AppRouterType;
  _controller: AuthController;

  constructor() {
    this._router = AppRouter();
    this._controller = new AuthController();
  }

  get routes_v1() {
    this._router
      .post('/register', this._controller.register)
      .post('/', this._controller.getUser);

    return this._router;
  }
}
