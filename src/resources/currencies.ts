// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Currencies extends APIResource {
  /**
   * Creates a new Currency for the specified Organization.
   *
   * Used to create a Currency that your Organization will start to use.
   */
  create(
    orgId: string,
    body: CurrencyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Currency> {
    return this._client.post(`/organizations/${orgId}/picklists/currency`, { body, ...options });
  }

  /**
   * Retrieve the specified Currency with the given UUID. Used to obtain the details
   * of a specified existing Currency in your Organization.
   */
  retrieve(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Currency> {
    return this._client.get(`/organizations/${orgId}/picklists/currency/${id}`, options);
  }

  /**
   * Update a Currency with the given UUID.
   *
   * Used to update the attributes of the specified Currency for the specified
   * Organization.
   */
  update(
    orgId: string,
    id: string,
    body: CurrencyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Currency> {
    return this._client.put(`/organizations/${orgId}/picklists/currency/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of Currencies.
   *
   * Retrieves a list of Currencies for the specified Organization. This endpoint
   * supports pagination and includes various query parameters to filter the
   * Currencies based on Currency ID, and short codes.
   */
  list(orgId: string, query?: CurrencyListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(orgId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    orgId: string,
    query: CurrencyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list(orgId, {}, query);
    }
    return this._client.get(`/organizations/${orgId}/picklists/currency`, { query, ...options });
  }

  /**
   * Delete the Currency with the given UUID.
   *
   * Used to remove an existing Currency from your Organization that is no longer
   * required.
   */
  delete(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Currency> {
    return this._client.delete(`/organizations/${orgId}/picklists/currency/${id}`, options);
  }
}

export interface Currency {
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
   * TRUE / FALSE flag indicating whether the data entity is archived. An entity can
   * be archived if it is obsolete.
   */
  archived?: boolean;

  /**
   * The short code of the data entity.
   */
  code?: string;

  /**
   * The unique identifier (UUID) of the user who created this Currency.
   */
  createdBy?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the Currency was created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the Currency was last modified.
   */
  dtLastModified?: string;

  /**
   * The unique identifier (UUID) of the user who last modified this Currency.
   */
  lastModifiedBy?: string;

  /**
   * This indicates the maximum number of decimal places to use for this Currency.
   */
  maxDecimalPlaces?: number;

  /**
   * The name of the data entity.
   */
  name?: string;

  roundingMode?: 'UP' | 'DOWN' | 'CEILING' | 'FLOOR' | 'HALF_UP' | 'HALF_DOWN' | 'HALF_EVEN' | 'UNNECESSARY';
}

export type CurrencyListResponse = unknown;

export interface CurrencyCreateParams {
  /**
   * The name of the entity.
   */
  name: string;

  /**
   * A Boolean TRUE / FALSE flag indicating whether the entity is archived. An entity
   * can be archived if it is obsolete.
   *
   * - TRUE - the entity is in the archived state.
   * - FALSE - the entity is not in the archived state.
   */
  archived?: boolean;

  /**
   * The short code for the entity.
   */
  code?: string;

  /**
   * Indicates the maximum number of decimal places to use for this Currency.
   */
  maxDecimalPlaces?: number;

  roundingMode?: 'UP' | 'DOWN' | 'CEILING' | 'FLOOR' | 'HALF_UP' | 'HALF_DOWN' | 'HALF_EVEN' | 'UNNECESSARY';

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

export interface CurrencyUpdateParams {
  /**
   * The name of the entity.
   */
  name: string;

  /**
   * A Boolean TRUE / FALSE flag indicating whether the entity is archived. An entity
   * can be archived if it is obsolete.
   *
   * - TRUE - the entity is in the archived state.
   * - FALSE - the entity is not in the archived state.
   */
  archived?: boolean;

  /**
   * The short code for the entity.
   */
  code?: string;

  /**
   * Indicates the maximum number of decimal places to use for this Currency.
   */
  maxDecimalPlaces?: number;

  roundingMode?: 'UP' | 'DOWN' | 'CEILING' | 'FLOOR' | 'HALF_UP' | 'HALF_DOWN' | 'HALF_EVEN' | 'UNNECESSARY';

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

export interface CurrencyListParams {
  /**
   * Filter by archived flag. A True / False flag indicating whether to return
   * Currencies that are archived _(obsolete)_.
   *
   * - TRUE - return archived Currencies.
   * - FALSE - archived Currencies are not returned.
   */
  archived?: boolean;

  /**
   * An optional parameter to retrieve specific Currencies based on their short
   * codes.
   */
  codes?: Array<string>;

  /**
   * An optional parameter to filter the list based on specific Currency unique
   * identifiers (UUIDs).
   */
  ids?: Array<string>;

  /**
   * The `nextToken` for multi-page retrievals. It is used to fetch the next page of
   * Currencies in a paginated list.
   */
  nextToken?: string;

  /**
   * Specifies the maximum number of Currencies to retrieve per page.
   */
  pageSize?: number;
}

export declare namespace Currencies {
  export {
    type Currency as Currency,
    type CurrencyListResponse as CurrencyListResponse,
    type CurrencyCreateParams as CurrencyCreateParams,
    type CurrencyUpdateParams as CurrencyUpdateParams,
    type CurrencyListParams as CurrencyListParams,
  };
}
