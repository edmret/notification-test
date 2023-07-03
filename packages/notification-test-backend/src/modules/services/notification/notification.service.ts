import { Injectable } from '@nestjs/common';
import {
  LogMessageDto,
  LookupType,
  MessageDto,
} from 'notification-core/src/types';
import { LookupServiceInterface } from 'src/modules/interfaces';
import { INotificationProvider } from 'src/modules/interfaces/notification.interface';
import { EmailProviderService } from 'src/modules/providers/email-provider/email-provider.service';
import { PushNotificationProviderService } from 'src/modules/providers/push-notification-provider/push-notification-provider.service';
import { SmsproviderService } from 'src/modules/providers/smsprovider/smsprovider.service';
import { LogService } from '../log/log.service';

@Injectable()
export class NotificationService implements LookupServiceInterface {
  private readonly providersMap: Map<string, INotificationProvider>;
  private readonly lookup: LookupType[];

  constructor(
    private readonly smsProvider: SmsproviderService,
    private readonly emailProvider: EmailProviderService,
    private readonly pushNotivicationProvider: PushNotificationProviderService,
    private readonly logService: LogService,
  ) {
    this.providersMap = new Map<string, INotificationProvider>([
      ['SMS', smsProvider],
      ['E-Mail', emailProvider],
      ['Push Notification', pushNotivicationProvider],
    ]);

    this.lookup = Array.from(this.providersMap.entries()).map(([value]) => ({
      value,
      label: value,
    }));
  }

  /**
   * returns the notificationllokup
   */
  async getLookup(): Promise<LookupType[]> {
    return this.lookup;
  }

  sendNotifications(message: MessageDto): void {
    // log the message sent before using the infividual providers
    this.logService.create<LogMessageDto>('MessageSent', message);
    // just do async delivery
    const provides = Array.from(this.providersMap.values());
    provides.forEach((provider) => provider.sendNotification(message));
  }
}
