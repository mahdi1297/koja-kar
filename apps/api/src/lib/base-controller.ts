/* eslint-disable @typescript-eslint/no-explicit-any */
import { ResponseStatusCode } from '../types/response-status-code';
import { ServerResponse } from '../types/server-response';

export class BaseController {
  _logger(data: any) {
    console.warn('-----------');
    console.log(data);
    console.warn('-----------');
  }

  Ok({ res, data }: ServerResponse) {
    return res.status(ResponseStatusCode.OK).json({
      error: null,
      message: null,
      data,
      status: ResponseStatusCode.OK,
    });
  }

  BadRequest({ res, message }: ServerResponse) {
    return res.status(ResponseStatusCode.BAD_REQUEST).json({
      error: message,
      message,
      data: null,
      status: ResponseStatusCode.BAD_REQUEST,
    });
  }

  NotFound({ res, message }: ServerResponse) {
    return res.status(ResponseStatusCode.NOT_FOUND).json({
      error: message,
      message,
      data: null,
      status: ResponseStatusCode.NOT_FOUND,
    });
  }
}
