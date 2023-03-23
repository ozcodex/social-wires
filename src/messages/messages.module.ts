import { Module } from '@nestjs/common';
import { MessagesService } from './services/messages.service';
import { MessagesController } from './messages.controller';
import { JwtStrategy } from 'src/auth/guards/jwt.strategy';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, JwtStrategy, JwtService]
})
export class MessagesModule {}
