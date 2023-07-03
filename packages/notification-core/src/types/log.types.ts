import { MessageDto } from "./Messages.type";

export interface LogMessageDto extends MessageDto {
}

export interface UserDataLogDto {
  userName: string;
  userId: string;
  message: MessageDto;
}

export interface EmailLogDto extends UserDataLogDto {
  email: string;
}

export interface SmsLogDto extends UserDataLogDto {
  phoneNumber: string;
}

export interface PushLogDto extends UserDataLogDto {
}

export type LogDtoType = EmailLogDto | SmsLogDto | PushLogDto | LogMessageDto;
