export class CreateUserDto {
  username: string;
  email: string;
  password: string;
  fullname: string;
}

export class UserDto {
  id: string;
  username: string;
  email: string;
  fullname: string;
}