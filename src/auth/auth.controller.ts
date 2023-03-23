import { Controller, Post, Body, UseInterceptors, ClassSerializerInterceptor, NotAcceptableException, UseGuards } from '@nestjs/common';
import { CreateUserDto, LoginDto } from './dto/user.dto';
import { AuthService } from './services/auth.service'
import { AuthGuard } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('signup')
  async signup(@Body() body: CreateUserDto) {
    console.log(body)
    return this.authService.createUser(body);
  }

  @UseGuards(AuthGuard('local'))
  @Post('signin')
  async signin(@Body() body: LoginDto) {
    const jwt = await this.authService.login(body)
    return {
      ...jwt,
      'message': 'Successfully logged in',
      'status': true
    }
  }
}
