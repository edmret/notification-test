/**
 * @jest-environment node
 */
import { Test, TestingModule } from '@nestjs/testing';
import { EmailProviderService } from './email-provider.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/modules/schema/user.schema';
import { LogSchema } from 'src/modules/schema/log.schema';
import { databaseConfig } from 'src/config/database.config';
import { UsersRepository } from 'src/modules/repositories/users.repository';
import { UserService } from 'src/modules/services/user/user.service';
import { LogRepository } from 'src/modules/repositories/log.repository';
import { LogService } from 'src/modules/services/log/log.service';

describe('EmailProviderService', () => {
  let service: EmailProviderService;

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
        EmailProviderService,
        UsersRepository,
        UserService,
        LogRepository,
        LogService,
      ],
    }).compile();

    service = module.get<EmailProviderService>(EmailProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
