import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  fullname: string;
}

export class LoginDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
}
