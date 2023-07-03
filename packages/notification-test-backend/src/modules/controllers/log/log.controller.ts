import { Controller, Get } from '@nestjs/common';
import { LogDto } from 'notification-core/src/types/log.types';
import { LogService } from 'src/modules/services/log/log.service';

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Get()
  async getLogs(): Promise<LogDto[]> {
    return await this.logService.getLogs();
  }
}
