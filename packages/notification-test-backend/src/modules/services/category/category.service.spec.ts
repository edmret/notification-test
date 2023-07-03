/**
 * @jest-environment node
 */
import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from './category.service';
import { CategoriesRepository } from 'src/modules/repositories/categories.repository';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from 'src/modules/schema/category.schema';
import { databaseConfig } from 'src/config/database.config';

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(), // Load environment variables from .env file
        MongooseModule.forFeature([
          {
            name: 'Category',
            schema: CategorySchema,
          },
        ]),
        MongooseModule.forRootAsync(databaseConfig),
      ],
      providers: [CategoriesRepository, CategoryService],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
