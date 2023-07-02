import { Body, Controller, Post } from '@nestjs/common';
import { MessageDto } from 'notification-core/src/types/Messages.type';
import { NotificationService } from 'src/modules/services/notification/notification.service';

@Controller('message')
export class MessageController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  async sendMessage(@Body() message: MessageDto): Promise<any> {
    this.notificationService.sendNotifications(message);
    return message;
  }
}
