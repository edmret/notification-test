import { Injectable } from '@nestjs/common';
import { LogType } from 'notification-core/src/types/event.types';
import { LogRepository } from 'src/modules/repositories/log.repository';

@Injectable()
export class LogService {
  constructor(private readonly logRepository: LogRepository) {}

  async create(eventType: LogType, data: any): Promise<void> {
    await this.logRepository.create({
      eventType,
      data,
    });
  }
}
