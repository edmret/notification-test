import { Injectable } from '@nestjs/common';
import { NotificationService } from '../notification/notification.service';
import {
  AvailableLookups,
  LookupResolverType,
  LookupType,
} from 'src/modules/interfaces';
import { CategoryService } from '../category/category.service';

@Injectable()
export class LookupService {
  private readonly lookupMap: Map<AvailableLookups, LookupResolverType>;
  constructor(
    private readonly notificationService: NotificationService,
    private readonly categoryService: CategoryService,
  ) {
    // ser the llokups map to resolve lookups
    this.lookupMap = new Map<AvailableLookups, LookupResolverType>([
      ['notification', () => this.notificationService.getLookupNotifications()],
      ['category', () => this.categoryService.getLookup()],
    ]);
  }
  /**
   * return the requested lookups
   * @param lookups the array of lookups to get
   */
  async getLookups(lookups: string[]): Promise<Record<string, LookupType[]>> {
    // check if the lookups are valid
    const notIncludedLookup = lookups.filter(
      (lookup) =>
        !Array.from(this.lookupMap.keys()).includes(lookup as AvailableLookups),
    );
    // if there are lookups that are not valid throw an error
    if (notIncludedLookup.length) {
      throw new Error(`Lookups ${notIncludedLookup.join(',')} not found`);
    }
    // resolve the lookups
    const finalRecord: Record<string, LookupType[]> = {};

    for (const lookupId of lookups) {
      const lookupResolver = this.lookupMap.get(lookupId as AvailableLookups);
      finalRecord[lookupId] = await lookupResolver();
    }

    return finalRecord;
  }
}
