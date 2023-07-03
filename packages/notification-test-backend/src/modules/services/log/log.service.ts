import { Injectable } from '@nestjs/common';
import { LogType } from 'notification-core/src/types/event.types';
import { LogDtoType } from 'notification-core/src/types/log.types';
import { LogRepository } from 'src/modules/repositories/log.repository';

@Injectable()
export class LogService {
  constructor(private readonly logRepository: LogRepository) {}

  async create<T extends LogDtoType>(
    eventType: LogType,
    data: T,
  ): Promise<void> {
    await this.logRepository.create({
      eventType,
      data,
    });
  }
}
