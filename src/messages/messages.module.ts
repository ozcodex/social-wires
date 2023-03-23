import { Module } from '@nestjs/common';
import { MessagesService } from './services/messages.service';
import { MessagesController } from './messages.controller';
import { JwtStrategy } from 'src/auth/guards/jwt.strategy';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from 'src/typeorm/message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers: [MessagesController],
  providers: [MessagesService, JwtStrategy, JwtService]
})
export class MessagesModule {}
