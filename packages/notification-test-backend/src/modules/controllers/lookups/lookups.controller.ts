import { Controller, Get, Query } from '@nestjs/common';
import { LookupType } from 'notification-core/src/types/lookup.types';
import { LookupService } from 'src/modules/services/lookup/lookup.service';

@Controller('lookups')
export class LookupsController {
  constructor(private readonly lookupService: LookupService) {}

  @Get()
  async getLookups(
    @Query() query: { lookups: string[] },
  ): Promise<Record<string, LookupType[]>> {
    return await this.lookupService.getLookups(query.lookups);
  }
}
