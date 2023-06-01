import { Request } from 'express';
import { User } from '../../entities';
import { UserServices } from '../user.services';

export class UserIndexServices extends UserServices {
  constructor() {
    super();
  }

  async call(req: Request): Promise<User[]> {
    return await this.userRepository.find();
  }
}
