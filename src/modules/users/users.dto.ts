import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class UsersRegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}

export class UsersRegisterRequestDto {
  @ApiProperty({
    format: 'email',
  })
  email: string;

  @ApiProperty({
    minLength: 8,
    maxLength: 128,
    format: 'password',
  })
  password: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;
}

export class UsersRegisterResponseDto {
  @ApiProperty({
    format: 'uuid',
  })
  id: string;

  @ApiProperty({
    format: 'email',
  })
  email: string;

  @ApiProperty({
    minLength: 8,
    maxLength: 128,
    format: 'password',
  })
  password: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  roles: string[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
