import { Test, TestingModule } from '@nestjs/testing';
import { SmsproviderService } from './smsprovider.service';

describe('SmsproviderService', () => {
  let service: SmsproviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmsproviderService],
    }).compile();

    service = module.get<SmsproviderService>(SmsproviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
