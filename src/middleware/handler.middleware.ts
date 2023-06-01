import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { BaseError, LogLevel, Logger } from '../helpers';

export const handler = (callback: (req: Request, res: Response, next: NextFunction) => Promise<any>): any => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const logger = new Logger();
    logger.log(LogLevel.DEBUG, 'Input: ', {
      pathParameters: req.params,
      queryParameters: req.query,
      body: req.body,
    });
    try {
      if (req.body) {
        req.body = typeof req.body == 'object' ? req.body : JSON.parse(req.body);
      }
      const result = await callback({ ...req } as Request, res, next);
      logger.log(LogLevel.DEBUG, 'Output: ', result);
      return res.json(result);
    } catch (error: any) {
      logger.log(LogLevel.ERROR, 'Error: ', error);
      if (error instanceof BaseError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error!' });
    }
  };
};

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).send(err.message);
};
