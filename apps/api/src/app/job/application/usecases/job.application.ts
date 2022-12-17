/* eslint-disable @typescript-eslint/no-explicit-any */
import { Job } from '@dev/domain';
import { errorGenerator } from '../../../../helper';
import { JobService } from '../../service/job.service';
import { ApplicationContracts } from '../contracts/job.application.contracts';

export class JobApplication implements ApplicationContracts {
  private _service: JobService;

  constructor() {
    this._service = new JobService();
  }

  async getDetail(id: string): Promise<any> {
    try {
      const result = await this._service.getById(id);

      if (!result) {
        const errorBody = errorGenerator({
          error: true,
          status: 404,
          errorMessage: 'Job not found',
        });

        return errorBody;
      }

      return result;
    } catch (err) {
      const errorBody = errorGenerator({
        error: true,
        status: 400,
        errorObject: err,
        errorMessage: 'Something wrong happened while fetching job data',
      });

      return errorBody;
    }
  }

  async list(): Promise<Job[] | any> {
    try {
      const result = await this._service.list();

      if (!result) {
        const errorBody = errorGenerator({
          error: true,
          status: 400,
          errorMessage: 'Something wrong happened while fetching jobs list',
        });

        return errorBody;
      }

      return result;
    } catch (err) {
      const errorBody = errorGenerator({
        error: true,
        status: 400,
        errorObject: err,
        errorMessage: 'Something wrong happened while fetching job list',
      });

      return errorBody;
    }
  }

  async create(data: Job): Promise<Job | any> {
    try {
      const result = await this._service.create(data);

      if (!result) {
        const errorBody = errorGenerator({
          error: true,
          status: 400,
          errorMessage: 'Something wrong happened while creating job',
        });

        return errorBody;
      }

      return result;
    } catch (err) {
      const errorBody = errorGenerator({
        error: true,
        status: 400,
        errorObject: err,
        errorMessage: 'Something wrong happened while creating new job',
      });

      return errorBody;
    }
  }

  async update(_id: string, data: Job): Promise<Job | any> {
    try {
      // Check if job exists
      const existsJob = await this._service.existsById(_id);

      if (!existsJob) {
        const errorBody = errorGenerator({
          error: true,
          status: 404,
          errorMessage:
            'No job with input information is registered in database',
        });

        return errorBody;
      }

      // Updating job
      const result = await this._service.update(_id, data);
      console.log(result);

      if (!result) {
        const errorBody = errorGenerator({
          error: true,
          status: 400,
          errorMessage: 'Something wrong happened while updating job',
        });

        return errorBody;
      }

      return result;
    } catch (err) {
      const errorBody = errorGenerator({
        error: true,
        status: 400,
        errorObject: err,
        errorMessage: 'Something wrong happened while updating job',
      });

      return errorBody;
    }
  }

  async updateCompanyInfo(_id: string, data: Job): Promise<any> {
    try {
      const existsById = await this._service.existsById(_id);

      if (!existsById) {
        const errorBody = errorGenerator({
          error: true,
          status: 404,
          errorMessage: 'Item was not found',
        });
        return errorBody;
      }
      const result = await this._service.updateCompanyInfo(_id, data);

      if (!result) {
        const errorBody = errorGenerator({
          error: true,
          status: 400,
          errorMessage: 'Something wrong happened while updating job',
        });

        return errorBody;
      }

      return result;
    } catch (err) {
      const errorBody = errorGenerator({
        error: true,
        status: 400,
        errorObject: err,
        errorMessage: 'Something wrong happened while updating job',
      });

      return errorBody;
    }
  }

  async remove(_id: string): Promise<any> {
    try {
      const result: any = await this._service.remove(_id);

      if (result.modifiedCount === 0 || result.matchedCount === 0) {
        const errorBody = errorGenerator({
          error: true,
          status: 400,
          errorMessage: 'آیتمی با این مشخصات در دیتابیس موجود نیست',
        });

        return errorBody;
      }

      if (!result) {
        const errorBody = errorGenerator({
          error: true,
          status: 400,
          errorMessage: 'Something wrong happened while removing job',
        });

        return errorBody;
      }
      return result;
    } catch (err) {
      const errorBody = errorGenerator({
        error: true,
        status: 400,
        errorObject: err,
        errorMessage: 'Something wrong happened while removing job',
      });

      return errorBody;
    }
  }

  async refactor(_id: string): Promise<any> {
    try {
      const result: any = await this._service.refactor(_id);

      if (result.modifiedCount === 0 || result.matchedCount === 0) {
        const errorBody = errorGenerator({
          error: true,
          status: 400,
          errorMessage: 'آیتمی با این مشخصات در دیتابیس موجود نیست',
        });

        return errorBody;
      }

      if (!result) {
        const errorBody = errorGenerator({
          error: true,
          status: 400,
          errorMessage: 'Something wrong happened while refactoring job',
        });

        return errorBody;
      }

      return result;
    } catch (err) {
      const errorBody = errorGenerator({
        error: true,
        errorObject: err,
        status: 400,
        errorMessage: 'Something wrong happened while refactoring job',
      });

      return errorBody;
    }
  }
}
