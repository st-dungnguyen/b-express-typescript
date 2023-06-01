import { NextFunction, Request, Response } from 'express';
import { handler } from '../middleware/handler.middleware';
import { UserSerializer } from '../serializers';
import { UserCreateServices, UserIndexServices, UserShowServices } from '../services';
import { UserResponse } from '../shared/types';

const userSerializer = new UserSerializer();

export const userController = {
  index: handler(async (req: Request, res: Response, next: NextFunction): Promise<UserResponse[]> => {
    const users = await new UserIndexServices().call(req);
    return userSerializer.index(users);
  }),
  show: handler(async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const user = await new UserShowServices().call(req);
    return userSerializer.show(user);
  }),
  create: handler(async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const user = await new UserCreateServices().call(req);
    return userSerializer.show(user);
  }),
};
