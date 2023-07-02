import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LookupsController } from './modules/controllers/lookups/lookups.controller';
import { LookupService } from './modules/services/lookup/lookup.service';
import { SmsproviderService } from './modules/providers/smsprovider/smsprovider.service';
import { EmailProviderService } from './modules/providers/email-provider/email-provider.service';
import { PushNotificationProviderService } from './modules/providers/push-notification-provider/push-notification-provider.service';
import { NotificationService } from './modules/services/notification/notification.service';

@Module({
  imports: [],
  controllers: [AppController, LookupsController],
  providers: [
    AppService,
    LookupService,
    SmsproviderService,
    EmailProviderService,
    PushNotificationProviderService,
    NotificationService,
  ],
})
export class AppModule {}
