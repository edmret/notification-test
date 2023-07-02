/**
 * the type that will be returned as lookup
 */
export interface LookupType {
  /**
   * display value of the lookup
   */
  label: string;
  /**
   * key of the lookup
   */
  value: string;
}

/**
 * resolver type for the lookup
 */
export type LookupResolverType = () => Promise<LookupType[]>;

/**
 * type of the available lookups
 */
export type AvailableLookups = 'notification' | 'category';
