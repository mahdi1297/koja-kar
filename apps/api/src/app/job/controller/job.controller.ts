import { ResponseMessage } from './../../../types';
import { Request, Response } from 'express';
import { JobApplication } from '../application/usecases/job.application';

const _app = new JobApplication();

export class JobController {
  async list(req: Request, res: Response) {
    const result = await _app.list();

    if (result.error) {
      return res.status(result.status).json({
        error: result.errorMessage,
        message: result.errorMessage,
        data: null,
        status: result.status,
        errorObject: result.errorObject,
      });
    }

    return res.status(200).json({
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
        errorObject: result.errorObject,
      });
    }

    return res.status(200).json({
      data: result,
      message: ResponseMessage.OK,
    });
  }

  async getDetail(req: Request, res: Response) {
    const { id } = req.params;

    const result = await _app.getDetail(id);

    if (result.error) {
      return res.status(result.status).json({
        error: result.errorMessage,
        message: result.errorMessage,
        data: null,
        status: result.status,
        errorObject: result.errorObject,
      });
    }

    return res.status(200).json({
      data: result,
      message: ResponseMessage.OK,
    });
  }

  async updateCompanyInfo(req: Request, res: Response) {
    const { _id, ...data } = req.body;

    const result = await _app.updateCompanyInfo(_id, data);

    if (result.error) {
      return res.status(result.status).json({
        error: result.errorMessage,
        message: result.errorMessage,
        data: null,
        status: result.status,
        errorObject: result.errorObject,
      });
    }

    return res.status(200).json({
      data: result,
      message: ResponseMessage.OK,
    });
  }

  //
  async update(req: Request, res: Response) {
    const { _id, ...data } = req.body;

    const result = await _app.update(_id, data);

    if (result.error) {
      return res.status(result.status).json({
        error: result.errorMessage,
        message: result.errorMessage,
        data: null,
        status: result.status,
        errorObject: result.errorObject,
      });
    }

    return res.status(200).json({
      data: result,
      message: ResponseMessage.OK,
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
        errorObject: result.errorObject,
      });
    }

    return res.status(200).json({
      data: result,
      message: ResponseMessage.OK,
    });
  }

  async refactor(req: Request, res: Response) {
    const { _id } = req.body;
    const result = await _app.refactor(_id);

    if (result.error) {
      return res.status(result.status).json({
        error: result.errorMessage,
        message: result.errorMessage,
        data: null,
        status: result.status,
        errorObject: result.errorObject,
      });
    }

    return res.status(200).json({
      data: result,
      message: ResponseMessage.OK,
    });
  }
}
