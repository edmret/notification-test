/**
 * @jest-environment node
 */
import { Test, TestingModule } from '@nestjs/testing';
import { SmsproviderService } from './smsprovider.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/modules/schema/user.schema';
import { LogSchema } from 'src/modules/schema/log.schema';
import { CategorySchema } from 'src/modules/schema/category.schema';
import { databaseConfig } from 'src/config/database.config';
import { LookupService } from 'src/modules/services/lookup/lookup.service';
import { EmailProviderService } from '../email-provider/email-provider.service';
import { PushNotificationProviderService } from '../push-notification-provider/push-notification-provider.service';
import { NotificationService } from 'src/modules/services/notification/notification.service';
import { UsersRepository } from 'src/modules/repositories/users.repository';
import { UserService } from 'src/modules/services/user/user.service';
import { CategoriesRepository } from 'src/modules/repositories/categories.repository';
import { CategoryService } from 'src/modules/services/category/category.service';
import { LogRepository } from 'src/modules/repositories/log.repository';
import { LogService } from 'src/modules/services/log/log.service';

describe('SmsproviderService', () => {
  let service: SmsproviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(), // Load environment variables from .env file
        MongooseModule.forFeature([
          {
            name: 'User',
            schema: UserSchema,
          },
          {
            name: 'Category',
            schema: CategorySchema,
          },
          {
            name: 'Log',
            schema: LogSchema,
          },
        ]),
        MongooseModule.forRootAsync(databaseConfig),
      ],
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

    service = module.get<SmsproviderService>(SmsproviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
