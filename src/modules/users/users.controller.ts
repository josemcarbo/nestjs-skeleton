import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersRegisterDto } from './users.dto';
import { UsersService } from './users.service';
import { ERole, IUser } from './users.interface';
import { Roles } from '../auth/decorators/roles.decorator';
import { Public } from '../auth/decorators/public.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post('/signup')
  signup(@Body() user: UsersRegisterDto): Promise<IUser> {
    return this.usersService.signUp(user);
  }

  @Roles(ERole.ADMIN)
  @Get('/')
  find(): Promise<IUser[]> {
    return this.usersService.find();
  }
}
