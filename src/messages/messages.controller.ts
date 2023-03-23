import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseGuards } from '@nestjs/common';
import { MessagesService } from './services/messages.service';
import { CreateMessageDto, UpdateMessageDto, FindMessageDto } from './dto/message.dto';
import { LoginInterceptor } from './pipes/login.interceptor';
import { AuthGuard } from '@nestjs/passport';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  @UseInterceptors(LoginInterceptor)
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(createMessageDto);
  }

  @Get("me")
  @UseInterceptors(LoginInterceptor)
  findAll(@Body() findMessageDto: FindMessageDto) {
    return this.messagesService.findAll(findMessageDto.user);
  }

  @Get('me/:id')
  findOne(@Param('id') id: string) {
    return this.messagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
    return this.messagesService.update(+id, updateMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagesService.remove(+id);
  }
}
