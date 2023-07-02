import { LookupType } from 'notification-core/src/types/lookup.types';

/**
 * resolver type for the lookup
 */
export type LookupResolverType = () => Promise<LookupType[]>;

/**
 * type of the available lookups
 */
export type AvailableLookups = 'notification' | 'category';

export interface LookupServiceInterface {
  getLookup: LookupResolverType;
}
