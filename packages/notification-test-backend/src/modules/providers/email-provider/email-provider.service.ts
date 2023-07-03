import { Injectable } from '@nestjs/common';
import { MessageDto } from 'notification-core/src/types/Messages.type';
import { EmailLogDto } from 'notification-core/src/types/log.types';
import { INotificationProvider } from 'src/modules/interfaces/notification.interface';
import { UsersRepository } from 'src/modules/repositories/users.repository';
import { LogService } from 'src/modules/services/log/log.service';

@Injectable()
export class EmailProviderService implements INotificationProvider {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly logService: LogService,
  ) {}

  async sendNotification(message: MessageDto): Promise<void> {
    // This code is exactly the same as the other providers beacause is a mock, but We should have different implementations for each provider in the future
    // TODO: Implement the email provider specific connector
    const usersToDeliver =
      await this.userRepository.FindUsersByChannelAndSubscription(
        'E-Mail',
        message.category,
      );

    // We can do the messages aync, this should be push to a queue to the channel and the channel should be subscribed but we are not having users subscribed to them
    usersToDeliver.forEach(async (user) => {
      const userBaseData = {
        userId: (user as any)._id,
        userName: user.name,
      };

      await this.logService.create<EmailLogDto>('MessageEmailReceived', {
        ...userBaseData,
        message,
        email: user.email,
      });
    });
  }
}
