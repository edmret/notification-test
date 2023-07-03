/**
 * @jest-environment node
 */
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/modules/schema/user.schema';
import { databaseConfig } from 'src/config/database.config';
import { UsersRepository } from 'src/modules/repositories/users.repository';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(), // Load environment variables from .env file
        MongooseModule.forFeature([
          {
            name: 'User',
            schema: UserSchema,
          },
        ]),
        MongooseModule.forRootAsync(databaseConfig),
      ],
      providers: [UsersRepository, UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
