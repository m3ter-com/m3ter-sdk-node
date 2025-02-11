// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class CounterPricings extends APIResource {
  /**
   * Create a new CounterPricing.
   *
   * **Note:** Either `planId` or `planTemplateId` request parameters are required
   * for this call to be valid. If you omit both, then you will receive a validation
   * error.
   */
  create(
    orgId: string,
    body: CounterPricingCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CounterPricing> {
    return this._client.post(`/organizations/${orgId}/counterpricings`, { body, ...options });
  }

  /**
   * Retrieve a CounterPricing for the given UUID.
   */
  retrieve(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<CounterPricing> {
    return this._client.get(`/organizations/${orgId}/counterpricings/${id}`, options);
  }

  /**
   * Update CounterPricing for the given UUID.
   *
   * **Note:** Either `planId` or `planTemplateId` request parameters are required
   * for this call to be valid. If you omit both, then you will receive a validation
   * error.
   */
  update(
    orgId: string,
    id: string,
    body: CounterPricingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CounterPricing> {
    return this._client.put(`/organizations/${orgId}/counterpricings/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of CounterPricing entities filtered by date, Plan ID, Plan
   * Template ID, or CounterPricing ID.
   */
  list(
    orgId: string,
    query?: CounterPricingListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown>;
  list(orgId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    orgId: string,
    query: CounterPricingListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list(orgId, {}, query);
    }
    return this._client.get(`/organizations/${orgId}/counterpricings`, { query, ...options });
  }

  /**
   * Delete a CounterPricing for the given UUID.
   */
  delete(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<CounterPricing> {
    return this._client.delete(`/organizations/${orgId}/counterpricings/${id}`, options);
  }
}

export interface CounterPricing {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The version number:
   *
   * - **Create:** On initial Create to insert a new entity, the version is set at 1
   *   in the response.
   * - **Update:** On successful Update, the version is incremented by 1 in the
   *   response.
   */
  version: number;

  /**
   * Unique short code for the Pricing.
   */
  code?: string;

  /**
   * UUID of the Counter used to create the pricing.
   */
  counterId?: string;

  /**
   * The ID of the user who created this item.
   */
  createdBy?: string;

  /**
   * Controls whether or not charge rates under a set of pricing bands configured for
   * a Pricing are applied according to each separate band or at the highest band
   * reached.
   *
   * The default value is **TRUE**.
   *
   * - When TRUE, at billing charge rates are applied according to each separate
   *   band.
   *
   * - When FALSE, at billing charge rates are applied according to highest band
   *   reached.
   */
  cumulative?: boolean;

  /**
   * Displayed on Bill line items.
   */
  description?: string;

  /**
   * The DateTime when this item was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when this item was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * The end date _(in ISO-8601 format)_ for when the Pricing ceases to be active for
   * the Plan or Plan Template.
   *
   * If not specified, the Pricing remains active indefinitely.
   */
  endDate?: string;

  /**
   * The ID of the user who last modified this item.
   */
  lastModifiedBy?: string;

  /**
   * UUID of the Plan the Pricing is created for.
   */
  planId?: string;

  /**
   * UUID of the Plan Template the Pricing was created for.
   */
  planTemplateId?: string;

  pricingBands?: Array<CounterPricing.PricingBand>;

  /**
   * The default value is **TRUE**.
   *
   * - When TRUE, counter adjustment credits are prorated and are billed according to
   *   the number of days in billing period.
   *
   * - When FALSE, counter adjustment credits are not prorated and are billed for the
   *   entire billing period.
   */
  proRateAdjustmentCredit?: boolean;

  /**
   * The default value is **TRUE**.
   *
   * - When TRUE, counter adjustment debits are prorated and are billed according to
   *   the number of days in billing period.
   *
   * - When FALSE, counter adjustment debits are not prorated and are billed for the
   *   entire billing period.
   */
  proRateAdjustmentDebit?: boolean;

  /**
   * The default value is **TRUE**.
   *
   * - When TRUE, counter running total charges are prorated and are billed according
   *   to the number of days in billing period.
   *
   * - When FALSE, counter running total charges are not prorated and are billed for
   *   the entire billing period.
   */
  proRateRunningTotal?: boolean;

  /**
   * The default value is **TRUE**.
   *
   * - When TRUE, running totals are billed at the start of each billing period.
   *
   * - When FALSE, running totals are billed at the end of each billing period.
   */
  runningTotalBillInAdvance?: boolean;

  /**
   * The start date _(in ISO-8601 format)_ for when the Pricing starts to be active
   * for the Plan of Plan Template.
   */
  startDate?: string;
}

export namespace CounterPricing {
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
}

export type CounterPricingListResponse = unknown;

export interface CounterPricingCreateParams {
  /**
   * UUID of the Counter used to create the pricing.
   */
  counterId: string;

  pricingBands: Array<CounterPricingCreateParams.PricingBand>;

  /**
   * The start date _(in ISO-8601 format)_ for when the Pricing starts to be active
   * for the Plan of Plan Template._(Required)_
   */
  startDate: string;

  /**
   * Unique short code for the Pricing.
   */
  code?: string;

  /**
   * Controls whether or not charge rates under a set of pricing bands configured for
   * a Pricing are applied according to each separate band or at the highest band
   * reached.
   *
   * _(Optional)_. The default value is **FALSE**.
   *
   * - When TRUE, at billing charge rates are applied according to each separate
   *   band.
   *
   * - When FALSE, at billing charge rates are applied according to highest band
   *   reached.
   *
   * **NOTE:** Use the `cumulative` parameter to create the type of Pricing you
   * require. For example, for Tiered Pricing set to **TRUE**; for Volume Pricing,
   * set to **FALSE**.
   */
  cumulative?: boolean;

  /**
   * Displayed on Bill line items.
   */
  description?: string;

  /**
   * The end date _(in ISO-8601 format)_ for when the Pricing ceases to be active for
   * the Plan or Plan Template.
   *
   * _(Optional)_ If not specified, the Pricing remains active indefinitely.
   */
  endDate?: string;

  /**
   * UUID of the Plan the Pricing is created for.
   */
  planId?: string;

  /**
   * UUID of the Plan Template the Pricing is created for.
   */
  planTemplateId?: string;

  /**
   * The default value is **TRUE**.
   *
   * - When TRUE, counter adjustment credits are prorated and are billed according to
   *   the number of days in billing period.
   *
   * - When FALSE, counter adjustment credits are not prorated and are billed for the
   *   entire billing period.
   *
   * _(Optional)_.
   */
  proRateAdjustmentCredit?: boolean;

  /**
   * The default value is **TRUE**.
   *
   * - When TRUE, counter adjustment debits are prorated and are billed according to
   *   the number of days in billing period.
   *
   * - When FALSE, counter adjustment debits are not prorated and are billed for the
   *   entire billing period.
   *
   * _(Optional)_.
   */
  proRateAdjustmentDebit?: boolean;

  /**
   * The default value is **TRUE**.
   *
   * - When TRUE, counter running total charges are prorated and are billed according
   *   to the number of days in billing period.
   *
   * - When FALSE, counter running total charges are not prorated and are billed for
   *   the entire billing period.
   *
   * _(Optional)_.
   */
  proRateRunningTotal?: boolean;

  /**
   * The default value is **TRUE**.
   *
   * - When TRUE, running totals are billed at the start of each billing period.
   *
   * - When FALSE, running totals are billed at the end of each billing period.
   *
   * _(Optional)_.
   */
  runningTotalBillInAdvance?: boolean;

  /**
   * The version number of the entity:
   *
   * - **Create entity:** Not valid for initial insertion of new entity - _do not use
   *   for Create_. On initial Create, version is set at 1 and listed in the
   *   response.
   * - **Update Entity:** On Update, version is required and must match the existing
   *   version because a check is performed to ensure sequential versioning is
   *   preserved. Version is incremented by 1 and listed in the response.
   */
  version?: number;
}

export namespace CounterPricingCreateParams {
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
}

export interface CounterPricingUpdateParams {
  /**
   * UUID of the Counter used to create the pricing.
   */
  counterId: string;

  pricingBands: Array<CounterPricingUpdateParams.PricingBand>;

  /**
   * The start date _(in ISO-8601 format)_ for when the Pricing starts to be active
   * for the Plan of Plan Template._(Required)_
   */
  startDate: string;

  /**
   * Unique short code for the Pricing.
   */
  code?: string;

  /**
   * Controls whether or not charge rates under a set of pricing bands configured for
   * a Pricing are applied according to each separate band or at the highest band
   * reached.
   *
   * _(Optional)_. The default value is **FALSE**.
   *
   * - When TRUE, at billing charge rates are applied according to each separate
   *   band.
   *
   * - When FALSE, at billing charge rates are applied according to highest band
   *   reached.
   *
   * **NOTE:** Use the `cumulative` parameter to create the type of Pricing you
   * require. For example, for Tiered Pricing set to **TRUE**; for Volume Pricing,
   * set to **FALSE**.
   */
  cumulative?: boolean;

  /**
   * Displayed on Bill line items.
   */
  description?: string;

  /**
   * The end date _(in ISO-8601 format)_ for when the Pricing ceases to be active for
   * the Plan or Plan Template.
   *
   * _(Optional)_ If not specified, the Pricing remains active indefinitely.
   */
  endDate?: string;

  /**
   * UUID of the Plan the Pricing is created for.
   */
  planId?: string;

  /**
   * UUID of the Plan Template the Pricing is created for.
   */
  planTemplateId?: string;

  /**
   * The default value is **TRUE**.
   *
   * - When TRUE, counter adjustment credits are prorated and are billed according to
   *   the number of days in billing period.
   *
   * - When FALSE, counter adjustment credits are not prorated and are billed for the
   *   entire billing period.
   *
   * _(Optional)_.
   */
  proRateAdjustmentCredit?: boolean;

  /**
   * The default value is **TRUE**.
   *
   * - When TRUE, counter adjustment debits are prorated and are billed according to
   *   the number of days in billing period.
   *
   * - When FALSE, counter adjustment debits are not prorated and are billed for the
   *   entire billing period.
   *
   * _(Optional)_.
   */
  proRateAdjustmentDebit?: boolean;

  /**
   * The default value is **TRUE**.
   *
   * - When TRUE, counter running total charges are prorated and are billed according
   *   to the number of days in billing period.
   *
   * - When FALSE, counter running total charges are not prorated and are billed for
   *   the entire billing period.
   *
   * _(Optional)_.
   */
  proRateRunningTotal?: boolean;

  /**
   * The default value is **TRUE**.
   *
   * - When TRUE, running totals are billed at the start of each billing period.
   *
   * - When FALSE, running totals are billed at the end of each billing period.
   *
   * _(Optional)_.
   */
  runningTotalBillInAdvance?: boolean;

  /**
   * The version number of the entity:
   *
   * - **Create entity:** Not valid for initial insertion of new entity - _do not use
   *   for Create_. On initial Create, version is set at 1 and listed in the
   *   response.
   * - **Update Entity:** On Update, version is required and must match the existing
   *   version because a check is performed to ensure sequential versioning is
   *   preserved. Version is incremented by 1 and listed in the response.
   */
  version?: number;
}

export namespace CounterPricingUpdateParams {
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
}

export interface CounterPricingListParams {
  /**
   * Date on which to retrieve active CounterPricings.
   */
  date?: string;

  /**
   * List of CounterPricing IDs to retrieve.
   */
  ids?: Array<string>;

  /**
   * `nextToken` for multi page retrievals.
   */
  nextToken?: string;

  /**
   * Number of CounterPricings to retrieve per page.
   */
  pageSize?: number;

  /**
   * UUID of the Plan to retrieve CounterPricings for.
   */
  planId?: string;

  /**
   * UUID of the Plan Template to retrieve CounterPricings for.
   */
  planTemplateId?: string;
}

export declare namespace CounterPricings {
  export {
    type CounterPricing as CounterPricing,
    type CounterPricingListResponse as CounterPricingListResponse,
    type CounterPricingCreateParams as CounterPricingCreateParams,
    type CounterPricingUpdateParams as CounterPricingUpdateParams,
    type CounterPricingListParams as CounterPricingListParams,
  };
}
