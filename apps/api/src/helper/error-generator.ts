/* eslint-disable @typescript-eslint/no-explicit-any */
import { ResponseMessage } from '../types/resonse-message';
import { ResponseStatusCode } from '../types/response-status-code';

interface ErrorGenerator {
  error: boolean;
  status: ResponseStatusCode;
  errorMessage: ResponseMessage | string;
  errorObject?: any;
}

// Response error generator for http response
export function errorGenerator({
  error,
  status,
  errorMessage,
  errorObject = null,
}: ErrorGenerator) {
  const err = {
    error,
    status,
    errorMessage,
    errorObject,
  };

  return err;
}
