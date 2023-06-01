import { Request } from 'express';
import httpStatus from 'http-status';
import { EntityManager } from 'typeorm';
import { mysql } from '../../../config/database.config';
import { User } from '../../entities';
import { BaseError } from '../../helpers';
import { UserRequestParams } from '../../shared/types';
import { UserServices } from '../user.services';

export class UserCreateServices extends UserServices {
  constructor() {
    super();
  }

  async call(req: Request): Promise<User> {
    try {
      const input: UserRequestParams = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      };
      const user = this.userRepository.create(input);
      let result: User = new User();
      await mysql.transaction(async (transaction: EntityManager) => {
        result = await transaction.save(user);
      });
      return result;
    } catch (err: any) {
      throw new BaseError(httpStatus.INTERNAL_SERVER_ERROR, err.message);
    }
  }
}
