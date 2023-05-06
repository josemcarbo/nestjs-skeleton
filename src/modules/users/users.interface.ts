import { ObjectId } from 'mongoose';

export interface IUser {
  id?: ObjectId;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt?: Date;
  updatedAt?: Date;
}
