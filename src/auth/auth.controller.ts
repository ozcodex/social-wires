import { Controller, Post, Body } from '@nestjs/common';
import { SignupBody } from './interfaces/signup.interface';

@Controller('auth')
export class AuthController {
  @Post('singup')
  async signup(@Body() body: SignupBody) {
    // Lógica de inicio de sesión aquí
    console.log(body)
  }
}
