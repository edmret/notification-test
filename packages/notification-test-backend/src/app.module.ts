import { Module } from '@nestjs/common';
import { LookupsController } from './modules/controllers/lookups/lookups.controller';
import { LookupService } from './modules/services/lookup/lookup.service';
import { SmsproviderService } from './modules/providers/smsprovider/smsprovider.service';
import { EmailProviderService } from './modules/providers/email-provider/email-provider.service';
import { PushNotificationProviderService } from './modules/providers/push-notification-provider/push-notification-provider.service';
import { NotificationService } from './modules/services/notification/notification.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfig } from './config/database.config';
import { UsersRepository } from './modules/repositories/users.repository';
import { CategoriesRepository } from './modules/repositories/categories.repository';
import { CategoryService } from './modules/services/category/category.service';
import { UserSchema } from './modules/schema/user.schema';
import { MessageController } from './modules/controllers/message/message.controller';
import { LogRepository } from './modules/repositories/log.repository';
import { UserService } from './modules/services/user/user.service';
import { LogSchema } from './modules/schema/log.schema';
import { LogService } from './modules/services/log/log.service';
import { LogController } from './modules/controllers/log/log.controller';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables from .env file
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
      {
        name: 'Category',
        schema: UserSchema,
      },
      {
        name: 'Log',
        schema: LogSchema,
      },
    ]),
    MongooseModule.forRootAsync(databaseConfig),
  ],
  controllers: [LookupsController, MessageController, LogController],
  providers: [
    LookupService,
    SmsproviderService,
    EmailProviderService,
    PushNotificationProviderService,
    NotificationService,
    UsersRepository,
    UserService,
    CategoriesRepository,
    CategoryService,
    LogRepository,
    LogService,
  ],
})
export class AppModule {}
