import { Injectable } from '@nestjs/common';
import {
  INotification,
  INotificationProvider,
} from 'src/modules/interfaces/notification.interface';

@Injectable()
export class SmsproviderService implements INotificationProvider {
  async sendNotification(message: string, category: string): Promise<void> {
    console.log(message, '-------------------sms');
  }
}
