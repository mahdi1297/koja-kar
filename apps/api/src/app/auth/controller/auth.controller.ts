import { Request, Response } from 'express';
import { BaseController } from '../../../lib/base-controller';
import { AuthApplication } from '../application/usecases/auth.application';
import { ResponseMessage } from '../../../types/resonse-message';

const _app = new AuthApplication();

export class AuthController extends BaseController {
  constructor() {
    super();
  }

  async register(req: Request, res: Response) {
    const { phone } = req.body;

    const result = await _app.register(phone);

    if (result.error) {
      return res.status(result.status).json({
        error: result.errorMessage,
        message: result.errorMessage,
        data: null,
        status: result.status,
      });
    }

    return res.status(200).json({
      data: result,
      message: ResponseMessage.OK,
      status: 200,
      error: null,
    });
  }

  async getUser(req: Request, res: Response) {
    const { token } = req.body;

    const result = await _app.getUser(token);

    if (result.error) {
      return res.status(result.status).json({
        error: result.errorMessage,
        message: result.errorMessage,
        data: null,
        status: result.status,
      });
    }

    return res.status(200).json({
      data: result,
      message: ResponseMessage.OK,
      status: 200,
      error: null,
    });
  }
}
