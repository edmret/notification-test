/**
 * the notification model of the containiung information of a notification
 */
export interface INotification {
  mesasge: string;
}

/**
 * the notification provider interface
 */
export interface INotificationProvider {
  /**
   * function that sends the notification
   * @param notification the notification to be sent
   */
  sendNotification(notification: INotification): Promise<void>;
}

/**
 * the notification tuple type
 */
export type NotificationTuple = [string, INotificationProvider];
