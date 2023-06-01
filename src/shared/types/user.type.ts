import { User } from '../../entities';

export type UserRequestParams = Pick<User, 'firstName' | 'lastName'>;

export class UserResponse implements Omit<User, 'deletedAt'> {
  firstName: string;
  lastName: string;
  id: number;
  createdAt: string;
  updatedAt: string;

  constructor(data: User) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  static construct(data: User) {
    return new UserResponse(data);
  }
}
