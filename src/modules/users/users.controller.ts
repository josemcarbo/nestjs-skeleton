import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersRegisterDto, UsersRegisterResponseDto } from './users.dto';
import { UsersService } from './users.service';
import { ERole, IUser } from './users.interface';
import { Roles } from '../auth/decorators/roles.decorator';
import { Public } from '../auth/decorators/public.decorator';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBody({ type: UsersRegisterDto })
  @ApiResponse({ status: 201, type: UsersRegisterResponseDto })
  @ApiOperation({ description: 'Register new user' })
  @Public()
  @Post('/signup')
  signup(@Body() user: UsersRegisterDto): Promise<IUser> {
    return this.usersService.signUp(user);
  }

  @ApiBearerAuth()
  @ApiResponse({ status: 200, type: [UsersRegisterResponseDto] })
  @ApiOperation({ description: 'Get list of user' })
  @Roles(ERole.ADMIN)
  @Get('/')
  find(): Promise<IUser[]> {
    return this.usersService.find();
  }
}
