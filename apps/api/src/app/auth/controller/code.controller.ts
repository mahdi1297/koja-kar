import { ResponseMessage } from './../../../types';
import { Request, Response } from 'express';
import { CodeApplication } from '../application/usecases/code.application';

const _app = new CodeApplication();

export class CodeController {
  async sendCode(req: Request, res: Response) {
    const { code, userId } = req.body;
    const result = await _app.sendCode(code, userId);

    if (result?.error) {
      return res.status(result.status).json({
        error: result.errorMessage,
        message: result.errorMessage,
        data: null,
        status: result.status,
      });
    }

    return res.status(200).json({
      message: ResponseMessage.OK,
      error: null,
      data: result,
      status: 200,
    });
  }
}
