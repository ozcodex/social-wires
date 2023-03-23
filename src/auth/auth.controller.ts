import { Controller, Post, Body } from '@nestjs/common';
import { SignupBody } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  @Post('signup')
  async signup(@Body() body: SignupBody) {
    // Lógica de inicio de sesión aquí
    console.log(body)
  }
}
