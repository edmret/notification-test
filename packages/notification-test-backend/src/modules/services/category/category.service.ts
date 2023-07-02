import { Injectable } from '@nestjs/common';
import { LookupType } from 'src/modules/interfaces';
import { CategoriesRepository } from 'src/modules/repositories/categories.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async getLookup(): Promise<LookupType[]> {
    const categories = await this.categoriesRepository.findAll();
    return categories.map(({ name }) => ({
      label: name,
      value: name,
    }));
  }
}
