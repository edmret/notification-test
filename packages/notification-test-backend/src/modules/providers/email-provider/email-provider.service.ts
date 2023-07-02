import { Injectable } from '@nestjs/common';
import { LogType } from 'notification-core/src/types/event.types';
import { INotificationProvider } from 'src/modules/interfaces/notification.interface';
import { UsersRepository } from 'src/modules/repositories/users.repository';
// import { LogService } from 'src/modules/services/log/log.service';

@Injectable()
export class EmailProviderService implements INotificationProvider {
  constructor(
    private readonly userRepository: UsersRepository, // private readonly logService: LogService,
  ) {}

  async sendNotification(message: string, category: string): Promise<void> {
    // await this.logService.create(LogType.MessageSent, message);
    const usersToDeliver =
      await this.userRepository.FindUsersByChannelAndSubscription(
        'E-Mail',
        category,
      );

    // We can do the messages aync, this should be push to a queue to the channel and the channel should be subscribed but we are not having users subscribed to them
    usersToDeliver.forEach(async (user) => {
      // await this.logService.create(LogType.MessageReceived, {
      //   message,
      //   user,
      // });
      console.log('EmailProviderService.sendNotification', user);
    });
  }
}
