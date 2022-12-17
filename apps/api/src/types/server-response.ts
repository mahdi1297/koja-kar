/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';

export interface ServerResponse {
  res: Response;
  data?: any;
  message?: string; 
}
