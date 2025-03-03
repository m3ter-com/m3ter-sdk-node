// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * An array of currency conversion rates from Bill currency to Organization
 * currency. For example, if Account is billed in GBP and Organization is set to
 * USD, Bill line items are calculated in GBP and then converted to USD using the
 * defined rate.
 */
export interface CurrencyConversion {
  /**
   * Currency to convert from. For example: GBP.
   */
  from: string;

  /**
   * Currency to convert to. For example: USD.
   */
  to: string;

  /**
   * Conversion rate between currencies.
   */
  multiplier?: number;
}

export interface PricingBand {
  /**
   * Fixed price charged for the Pricing band.
   */
  fixedPrice: number;

  /**
   * Lower limit for the Pricing band.
   */
  lowerLimit: number;

  /**
   * Unit price charged for the Pricing band.
   */
  unitPrice: number;

  /**
   * The ID for the Pricing band.
   */
  id?: string;

  /**
   * **OBSOLETE - this is deprecated and no longer used.**
   */
  creditTypeId?: string;
}

export interface SetString {
  empty?: boolean;
}
