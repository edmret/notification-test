import { MessageDto } from 'notification-core/src/types/Messages.type';

/**
 * the notification model of the containiung information of a notification
 */
export interface INotification {
  mesasge: string;
  data: any;
}

/**
 * the notification provider interface
 */
export interface INotificationProvider {
  /**
   * function that sends the notification
   * @param message the notification message to be sent
   */
  sendNotification(message: MessageDto): Promise<void>;
}
