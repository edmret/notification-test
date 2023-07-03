/**
 * @jest-environment node
 */
import { Test, TestingModule } from '@nestjs/testing';
import { NotificationService } from './notification.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/modules/schema/user.schema';
import { LogSchema } from 'src/modules/schema/log.schema';
import { databaseConfig } from 'src/config/database.config';
import { SmsproviderService } from 'src/modules/providers/smsprovider/smsprovider.service';
import { EmailProviderService } from 'src/modules/providers/email-provider/email-provider.service';
import { PushNotificationProviderService } from 'src/modules/providers/push-notification-provider/push-notification-provider.service';
import { UsersRepository } from 'src/modules/repositories/users.repository';
import { UserService } from '../user/user.service';
import { LogRepository } from 'src/modules/repositories/log.repository';
import { LogService } from '../log/log.service';

describe('NotificationService', () => {
  let service: NotificationService;

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
            name: 'Log',
            schema: LogSchema,
          },
        ]),
        MongooseModule.forRootAsync(databaseConfig),
      ],
      providers: [
        SmsproviderService,
        EmailProviderService,
        PushNotificationProviderService,
        NotificationService,
        UsersRepository,
        UserService,
        LogRepository,
        LogService,
      ],
    }).compile();

    service = module.get<NotificationService>(NotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
