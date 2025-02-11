// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class TransactionTypes extends APIResource {
  /**
   * Create a new TransactionType for the specified Organization. Details of the new
   * TransactionType should be included in the request body.
   */
  create(
    orgId: string,
    body: TransactionTypeCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionType> {
    return this._client.post(`/organizations/${orgId}/picklists/transactiontypes`, { body, ...options });
  }

  /**
   * Retrieves the TransactionType with the given UUID from the specified
   * Organization.
   */
  retrieve(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<TransactionType> {
    return this._client.get(`/organizations/${orgId}/picklists/transactiontypes/${id}`, options);
  }

  /**
   * Updates the TransactionType with the specified UUID for the specified
   * Organization. Update details for the TransactionType should be included in the
   * request body.
   */
  update(
    orgId: string,
    id: string,
    body: TransactionTypeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionType> {
    return this._client.put(`/organizations/${orgId}/picklists/transactiontypes/${id}`, { body, ...options });
  }

  /**
   * Retrieves a list of TransactionType entities for the specified Organization. The
   * list can be paginated for easier management, and supports filtering by various
   * parameters.
   */
  list(
    orgId: string,
    query?: TransactionTypeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown>;
  list(orgId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    orgId: string,
    query: TransactionTypeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list(orgId, {}, query);
    }
    return this._client.get(`/organizations/${orgId}/picklists/transactiontypes`, { query, ...options });
  }

  /**
   * Deletes the TransactionType with the given UUID from the specified Organization.
   */
  delete(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<TransactionType> {
    return this._client.delete(`/organizations/${orgId}/picklists/transactiontypes/${id}`, options);
  }
}

export interface TransactionType {
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
   * The unique identifier (UUID) of the user who created this TransactionType.
   */
  createdBy?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the TransactionType was created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the TransactionType was last
   * modified.
   */
  dtLastModified?: string;

  /**
   * The unique identifier (UUID) of the user who last modified this TransactionType.
   */
  lastModifiedBy?: string;

  /**
   * The name of the data entity.
   */
  name?: string;
}

export type TransactionTypeListResponse = unknown;

export interface TransactionTypeCreateParams {
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

export interface TransactionTypeUpdateParams {
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

export interface TransactionTypeListParams {
  /**
   * Filter with this Boolean flag whether to include TransactionTypes that are
   * archived.
   *
   * - TRUE - include archived TransactionTypes in the list.
   * - FALSE - exclude archived TransactionTypes.
   */
  archived?: boolean;

  /**
   * A list of TransactionType short codes to retrieve.
   */
  codes?: Array<string>;

  /**
   * A list of TransactionType unique identifiers (UUIDs) to retrieve.
   */
  ids?: Array<string>;

  /**
   * The `nextToken` for multi-page retrievals. It is used to fetch the next page of
   * TransactionTypes in a paginated list.
   */
  nextToken?: string;

  /**
   * Specifies the maximum number of TransactionTypes to retrieve per page.
   */
  pageSize?: number;
}

export declare namespace TransactionTypes {
  export {
    type TransactionType as TransactionType,
    type TransactionTypeListResponse as TransactionTypeListResponse,
    type TransactionTypeCreateParams as TransactionTypeCreateParams,
    type TransactionTypeUpdateParams as TransactionTypeUpdateParams,
    type TransactionTypeListParams as TransactionTypeListParams,
  };
}
