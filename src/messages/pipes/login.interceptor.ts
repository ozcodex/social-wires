import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtDto } from 'src/auth/dto/jwt.dto';

@Injectable()
export class LoginInterceptor implements NestInterceptor {
  constructor(private readonly jwtService: JwtService) {}
  async intercept(context: ExecutionContext, next: CallHandler) {
    console.log("Intercepting...")
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'].split(' ')[1];
    const decoded = this.jwtService.decode(token) as JwtDto;

    console.log(decoded)

    if (token) {
      request.body['user'] = decoded.user_id;
    }

    return next.handle();
  }
}