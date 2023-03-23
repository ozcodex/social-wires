import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './guards/local.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    secret: configService.get('JWT_SECRET'),
    signOptions: {
    expiresIn: configService.get('JWT_EXPIRATION'),
    },
  }),
  inject: [ConfigService],
    }),],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy]
  
})
export class AuthModule {}
