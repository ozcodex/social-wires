import { Optional } from "@nestjs/common";
import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty } from "class-validator";

export class CreateMessageDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  content: string;
  @Optional()
  user: string;
}

export class UpdateMessageDto extends PartialType(CreateMessageDto) {}