import { BaseController } from './../../../lib/base-controller';
import { ResponseMessage } from './../../../types/resonse-message';
import { Request, Response } from 'express';
import { CompanyApplication } from '../application/usecases/company.application';

const _app = new CompanyApplication();

export class CompanyController extends BaseController {
  constructor() {
    super();
  }

  async list(req: Request, res: Response) {
    const result = await _app.list();
    if (result.error) {
      return res.status(result.status).json({
        error: result.errorMessage,
        message: result.errorMessage,
        data: null,
        status: result.status,
      });
    }
    super.Ok({
      res,
      data: result,
      message: ResponseMessage.OK,
    });
  }

  async create(req: Request, res: Response) {
    const data = req.body;

    const result = await _app.create(data);

    if (result.error) {
      return res.status(result.status).json({
        error: result.errorMessage,
        message: result.errorMessage,
        data: null,
        status: result.status,
      });
    }

    super.Ok({
      res,
      data: result,
      message: ResponseMessage.OK,
    });
  }

  async update(req: Request, res: Response) {
    const data = req.body;

    const { _id } = data;

    const result = await _app.update(_id, data);

    if (result.error) {
      return res.status(result.status).json({
        error: result.errorMessage,
        message: result.errorMessage,
        data: null,
        status: result.status,
      });
    }

    res.status(200).json({
      data: result,
      message: 200,
      status: 200,
    });
  }

  async remove(req: Request, res: Response) {
    const { _id } = req.body;

    const result = await _app.remove(_id);

    if (result.error) {
      return res.status(result.status).json({
        error: result.errorMessage,
        message: result.errorMessage,
        data: null,
        status: result.status,
      });
    }

    super.Ok({
      res,
      data: result,
      message: ResponseMessage.OK,
    });
  }

  async refactor(req: Request, res: Response) {
    const { _id } = req.params;

    const result = await _app.refactor(_id);

    if (result.error) {
      return res.status(result.status).json({
        error: result.errorMessage,
        message: result.errorMessage,
        data: null,
        status: result.status,
      });
    }

    super.Ok({
      res,
      data: result,
      message: ResponseMessage.OK,
    });
  }
}
