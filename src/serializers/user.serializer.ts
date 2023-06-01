import { User } from '../entities';
import { UserResponse } from '../shared/types';

export class UserSerializer {
  index(users: User[]): UserResponse[] {
    return users.map((user: User) => {
      return UserResponse.construct(user);
    })
  }

  show(user: User): UserResponse {
    return UserResponse.construct(user);
  }
}