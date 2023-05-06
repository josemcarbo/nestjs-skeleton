import { Body, Controller, Post } from '@nestjs/common';
import { UsersRegisterDto } from './users.dto';
import { UsersService } from './users.service';
import { IUser } from './users.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  signup(@Body() user: UsersRegisterDto): Promise<IUser> {
    return this.usersService.signUp(user);
  }
}
