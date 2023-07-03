/**
 * @jest-environment node
 */
import { Test, TestingModule } from '@nestjs/testing';
import { MessageController } from './message.controller';
import { LookupService } from 'src/modules/services/lookup/lookup.service';
import { SmsproviderService } from 'src/modules/providers/smsprovider/smsprovider.service';
import { EmailProviderService } from 'src/modules/providers/email-provider/email-provider.service';
import { PushNotificationProviderService } from 'src/modules/providers/push-notification-provider/push-notification-provider.service';
import { NotificationService } from 'src/modules/services/notification/notification.service';
import { UsersRepository } from 'src/modules/repositories/users.repository';
import { UserService } from 'src/modules/services/user/user.service';
import { CategoriesRepository } from 'src/modules/repositories/categories.repository';
import { CategoryService } from 'src/modules/services/category/category.service';
import { LogRepository } from 'src/modules/repositories/log.repository';
import { LogService } from 'src/modules/services/log/log.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LogSchema } from 'src/modules/schema/log.schema';
import { databaseConfig } from 'src/config/database.config';
import { UserSchema } from 'src/modules/schema/user.schema';
import { CategorySchema } from 'src/modules/schema/category.schema';

describe('MessageController', () => {
  let controller: MessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(), // Load environment variables from .env file
        MongooseModule.forFeature([
          {
            name: 'Log',
            schema: LogSchema,
          },
          {
            name: 'User',
            schema: UserSchema,
          },
          {
            name: 'Category',
            schema: CategorySchema,
          }
        ]),
        MongooseModule.forRootAsync(databaseConfig),
      ],
      controllers: [MessageController],
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
    }).compile();

    controller = module.get<MessageController>(MessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
