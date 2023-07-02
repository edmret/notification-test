import { Injectable } from '@nestjs/common';
import { LookupType } from 'src/modules/interfaces';
import {
  INotificationProvider,
  NotificationTuple,
} from 'src/modules/interfaces/notification.interface';
import { EmailProviderService } from 'src/modules/providers/email-provider/email-provider.service';
import { PushNotificationProviderService } from 'src/modules/providers/push-notification-provider/push-notification-provider.service';
import { SmsproviderService } from 'src/modules/providers/smsprovider/smsprovider.service';

@Injectable()
export class NotificationService {
  private readonly providersMap: Map<string, NotificationTuple>;
  private readonly lookup: LookupType[];

  constructor(
    private readonly smsProvider: SmsproviderService,
    private readonly emailProvider: EmailProviderService,
    private readonly pushNotivicationProvider: PushNotificationProviderService,
  ) {
    this.providersMap = new Map<string, NotificationTuple>([
      ['sms', ['SMS', smsProvider]],
      ['email', ['E-Mail', emailProvider]],
      ['pushNotification', ['Push Notification', pushNotivicationProvider]],
    ]);

    this.lookup = Array.from(this.providersMap.entries()).map(
      ([value, [label]]) => ({
        value,
        label,
      }),
    );
  }

  /**
   * returns the notificationllokup
   */
  async getLookupNotifications(): Promise<LookupType[]> {
    return this.lookup;
  }

  /**
   * get the provider by the key
   * @param providerKey the key of the provider that we want to get
   */
  getProvicer(providerKey: string): INotificationProvider {
    const tuple = this.providersMap.get(providerKey);
    if (!tuple) {
      throw new Error(`Provider ${providerKey} not found`);
    }
    return tuple[1];
  }
}
