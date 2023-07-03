/**
 * @jest-environment node
 */
import { Test, TestingModule } from '@nestjs/testing';
import { LogController } from './log.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/modules/schema/user.schema';
import { LogSchema } from 'src/modules/schema/log.schema';
import { PushNotificationProviderService } from 'src/modules/providers/push-notification-provider/push-notification-provider.service';
import { EmailProviderService } from 'src/modules/providers/email-provider/email-provider.service';
import { UsersRepository } from 'src/modules/repositories/users.repository';
import { UserService } from 'src/modules/services/user/user.service';
import { LogRepository } from 'src/modules/repositories/log.repository';
import { LogService } from 'src/modules/services/log/log.service';
import { databaseConfig } from 'src/config/database.config';

describe('LogController', () => {
  let controller: LogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogController],
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

    controller = module.get<LogController>(LogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
