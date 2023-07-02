import { Injectable } from '@nestjs/common';
import { LookupType, MessageDto } from 'notification-core/src/types';
import { LookupServiceInterface } from 'src/modules/interfaces';
import { INotificationProvider } from 'src/modules/interfaces/notification.interface';
import { EmailProviderService } from 'src/modules/providers/email-provider/email-provider.service';
import { PushNotificationProviderService } from 'src/modules/providers/push-notification-provider/push-notification-provider.service';
import { SmsproviderService } from 'src/modules/providers/smsprovider/smsprovider.service';

@Injectable()
export class NotificationService implements LookupServiceInterface {
  private readonly providersMap: Map<string, INotificationProvider>;
  private readonly lookup: LookupType[];

  constructor(
    private readonly smsProvider: SmsproviderService,
    private readonly emailProvider: EmailProviderService,
    private readonly pushNotivicationProvider: PushNotificationProviderService,
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
    // just do async delivery
    const provides = Array.from(this.providersMap.values());
    provides.forEach((provider) =>
      provider.sendNotification(message.content, message.category),
    );
  }
}
