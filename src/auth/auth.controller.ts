import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto, UserDto } from './dto/user.dto';
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: CreateUserDto) : Promise<UserDto>{
    console.log(body)
    return this.authService.createUser(body);
  }
}
