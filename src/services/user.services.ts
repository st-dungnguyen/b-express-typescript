import httpStatus from 'http-status';
import { Repository } from 'typeorm';
import { mysql } from '../../config/database.config';
import { User } from '../entities/user.entity';
import { BaseError } from '../helpers';

export class UserServices {
  userRepository: Repository<User>;

  constructor() {
    this.userRepository = mysql.getRepository(User);
  }

  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new BaseError(httpStatus.NOT_FOUND, `${User.name} not found`);
    }
    return user;
  }
}
