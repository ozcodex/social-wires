import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from 'src/typeorm/message.entity';
import { CreateMessageDto, UpdateMessageDto } from '../dto/message.dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message) private readonly messageRepository: Repository<Message>
  ) { }

  create(createMessageDto: CreateMessageDto) {
    const newMessage = this.messageRepository.create(createMessageDto);
    return this.messageRepository.save(newMessage);
  }

  findAll() {
    return `This action returns all messages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}

