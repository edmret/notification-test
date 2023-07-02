import { Injectable } from '@nestjs/common';
import {
  INotification,
  INotificationProvider,
} from 'src/modules/interfaces/notification.interface';

@Injectable()
export class PushNotificationProviderService implements INotificationProvider {
  sendNotification(notification: INotification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
