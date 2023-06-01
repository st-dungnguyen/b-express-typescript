import { Request } from 'express';
import { User } from '../../entities';
import { UserServices } from '../user.services';

export class UserShowServices extends UserServices {
  constructor() {
    super();
  }

  async call(req: Request): Promise<User> {
    const id = +req.params.id;
    return await this.findById(id);
  }
}
