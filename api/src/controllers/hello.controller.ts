import { Request, Response } from 'express';

export const helloController = {
  getHello: (_req: Request, res: Response) => {
    res.json({
      message: 'Hello from Express API!',
      timestamp: new Date().toISOString()
    });
  }
};
