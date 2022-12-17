import { Router } from 'express';

export type AppRouterType = Router;

export function AppRouter(): AppRouterType {
  const router = Router();

  return router;
}
