import { Injectable } from '@nestjs/common';
import { EncryptService } from '../shared/encrypt/encrypt.service';
import { IUser } from './users.interface';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly encryptService: EncryptService,
    private readonly usersRepository: UsersRepository,
  ) {}

  async signUp(user: IUser): Promise<IUser> {
    user.password = await this.encryptService.encrypt(user.password);
    return this.usersRepository.signup(user);
  }

  async findOne(email: string): Promise<IUser> {
    return this.usersRepository.findOne(email);
  }

  async find(): Promise<IUser[]> {
    return this.usersRepository.find();
  }
}
