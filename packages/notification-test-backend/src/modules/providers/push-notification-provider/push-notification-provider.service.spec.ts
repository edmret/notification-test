import { Test, TestingModule } from '@nestjs/testing';
import { PushNotificationProviderService } from './push-notification-provider.service';

describe('PushNotificationProviderService', () => {
  let service: PushNotificationProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PushNotificationProviderService],
    }).compile();

    service = module.get<PushNotificationProviderService>(PushNotificationProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
