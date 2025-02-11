// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class CounterAdjustments extends APIResource {
  /**
   * Create a new CounterAdjustment for an Account using a Counter.
   *
   * **Notes:**
   *
   * - Use the new absolute value for the Counter for the selected date - if it was
   *   15 and has increased to 20, enter 20; if it was 15 and has decreased to 10,
   *   enter 10. _Do not enter_ the plus or minus value relative to the previous
   *   Counter value on the Account.
   * - CounterAdjustments on Accounts are supported down to a _specific day_ of
   *   granularity - you cannot create more than one CounterAdjustment for any given
   *   day using the same Counter and you'll receive an error if you try to do this.
   */
  create(
    orgId: string,
    body: CounterAdjustmentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CounterAdjustment> {
    return this._client.post(`/organizations/${orgId}/counteradjustments`, { body, ...options });
  }

  /**
   * Retrieve a CounterAdjustment for the given UUID.
   */
  retrieve(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<CounterAdjustment> {
    return this._client.get(`/organizations/${orgId}/counteradjustments/${id}`, options);
  }

  /**
   * Update a CounterAdjustment for an Account.
   */
  update(
    orgId: string,
    id: string,
    body: CounterAdjustmentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CounterAdjustment> {
    return this._client.put(`/organizations/${orgId}/counteradjustments/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of CounterAdjustments created for Accounts in your Organization.
   * You can filter the list returned by date, Account ID, or Counter ID.
   *
   * **CONSTRAINTS:**
   *
   * - The `counterId` query parameter is always required when calling this endpoint,
   *   used either as a single query parameter or in combination with any of the
   *   other query parameters.
   * - If you want to use the `date`, `dateStart`, or `dateEnd` query parameters, you
   *   must also use the `accountId` query parameter.
   */
  list(
    orgId: string,
    query?: CounterAdjustmentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown>;
  list(orgId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    orgId: string,
    query: CounterAdjustmentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list(orgId, {}, query);
    }
    return this._client.get(`/organizations/${orgId}/counteradjustments`, { query, ...options });
  }

  /**
   * Delete a CounterAdjustment for the given UUID.
   */
  delete(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<CounterAdjustment> {
    return this._client.delete(`/organizations/${orgId}/counteradjustments/${id}`, options);
  }
}

export interface CounterAdjustment {
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
   * The Account ID the CounterAdjustment was created for.
   */
  accountId?: string;

  /**
   * The ID of the Counter that was used to make the CounterAdjustment on the
   * Account.
   */
  counterId?: string;

  /**
   * The ID of the user who created this item.
   */
  createdBy?: string;

  /**
   * The date the CounterAdjustment was created for the Account _(in ISO-8601 date
   * format)_.
   */
  date?: string;

  /**
   * The DateTime when this item was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when this item was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * The ID of the user who last modified this item.
   */
  lastModifiedBy?: string;

  /**
   * Purchase Order Number for the Counter Adjustment. _(Optional)_
   */
  purchaseOrderNumber?: string;

  /**
   * Integer Value of the Counter that was used to make the CounterAdjustment.
   */
  value?: number;
}

export type CounterAdjustmentListResponse = unknown;

export interface CounterAdjustmentCreateParams {
  /**
   * The Account ID the CounterAdjustment is created for.
   */
  accountId: string;

  /**
   * The ID of the Counter used for the CounterAdjustment on the Account.
   */
  counterId: string;

  /**
   * The date the CounterAdjustment is created for the Account _(in ISO-8601 date
   * format)_.
   *
   * **Note:** CounterAdjustments on Accounts are supported down to a _specific day_
   * of granularity - you cannot create more than one CounterAdjustment for any given
   * day using the same Counter and you'll receive an error if you try to do this.
   */
  date: string;

  /**
   * Integer Value of the Counter used for the CounterAdjustment.
   *
   * **Note:** Use the new absolute value for the Counter for the selected date - if
   * it was 15 and has increased to 20, enter 20; if it was 15 and has decreased to
   * 10, enter 10. _Do not enter_ the plus or minus value relative to the previous
   * Counter value on the Account.
   */
  value: number;

  /**
   * Purchase Order Number for the Counter Adjustment. _(Optional)_
   */
  purchaseOrderNumber?: string;

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

export interface CounterAdjustmentUpdateParams {
  /**
   * The Account ID the CounterAdjustment is created for.
   */
  accountId: string;

  /**
   * The ID of the Counter used for the CounterAdjustment on the Account.
   */
  counterId: string;

  /**
   * The date the CounterAdjustment is created for the Account _(in ISO-8601 date
   * format)_.
   *
   * **Note:** CounterAdjustments on Accounts are supported down to a _specific day_
   * of granularity - you cannot create more than one CounterAdjustment for any given
   * day using the same Counter and you'll receive an error if you try to do this.
   */
  date: string;

  /**
   * Integer Value of the Counter used for the CounterAdjustment.
   *
   * **Note:** Use the new absolute value for the Counter for the selected date - if
   * it was 15 and has increased to 20, enter 20; if it was 15 and has decreased to
   * 10, enter 10. _Do not enter_ the plus or minus value relative to the previous
   * Counter value on the Account.
   */
  value: number;

  /**
   * Purchase Order Number for the Counter Adjustment. _(Optional)_
   */
  purchaseOrderNumber?: string;

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

export interface CounterAdjustmentListParams {
  /**
   * List CounterAdjustment items for the Account UUID.
   */
  accountId?: string;

  /**
   * List CounterAdjustment items for the Counter UUID.
   */
  counterId?: string;

  /**
   * List CounterAdjustment items for the given date.
   */
  date?: string;

  dateEnd?: string | null;

  dateStart?: string | null;

  /**
   * Only include CounterAdjustments with end dates earlier than this date.
   */
  endDateEnd?: string;

  /**
   * Only include CounterAdjustments with end dates equal to or later than this date.
   */
  endDateStart?: string;

  /**
   * nextToken for multi page retrievals.
   */
  nextToken?: string;

  /**
   * Number of CounterAdjustments to retrieve per page
   */
  pageSize?: number;
}

export declare namespace CounterAdjustments {
  export {
    type CounterAdjustment as CounterAdjustment,
    type CounterAdjustmentListResponse as CounterAdjustmentListResponse,
    type CounterAdjustmentCreateParams as CounterAdjustmentCreateParams,
    type CounterAdjustmentUpdateParams as CounterAdjustmentUpdateParams,
    type CounterAdjustmentListParams as CounterAdjustmentListParams,
  };
}
