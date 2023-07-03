/**
 * @jest-environment node
 */
import { Test, TestingModule } from '@nestjs/testing';
import { LogService } from './log.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/modules/schema/user.schema';
import { LogSchema } from 'src/modules/schema/log.schema';
import { databaseConfig } from 'src/config/database.config';
import { PushNotificationProviderService } from 'src/modules/providers/push-notification-provider/push-notification-provider.service';
import { EmailProviderService } from 'src/modules/providers/email-provider/email-provider.service';
import { UsersRepository } from 'src/modules/repositories/users.repository';
import { UserService } from '../user/user.service';
import { LogRepository } from 'src/modules/repositories/log.repository';

describe('LogService', () => {
  let service: LogService;

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
        PushNotificationProviderService,
        EmailProviderService,
        PushNotificationProviderService,
        UsersRepository,
        UserService,
        LogRepository,
        LogService,
      ],
    }).compile();

    service = module.get<LogService>(LogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
