// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class CreditReasons extends APIResource {
  /**
   * Create a new Credit Reason for your Organization. When you've created a Credit
   * Reason, it becomes available as a credit type for adding Credit line items to
   * Bills. See [Credits](https://www.m3ter.com/docs/api#tag/Credits).
   */
  create(
    orgId: string,
    body: CreditReasonCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditReason> {
    return this._client.post(`/organizations/${orgId}/picklists/creditreasons`, { body, ...options });
  }

  /**
   * Retrieve the Credit Reason with the given UUID.
   */
  retrieve(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<CreditReason> {
    return this._client.get(`/organizations/${orgId}/picklists/creditreasons/${id}`, options);
  }

  /**
   * Update the Credit Reason with the given UUID.
   */
  update(
    orgId: string,
    id: string,
    body: CreditReasonUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditReason> {
    return this._client.put(`/organizations/${orgId}/picklists/creditreasons/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of the Credit Reason entities created for your Organization. You
   * can filter the list returned for the call by Credit Reason ID, Credit Reason
   * short code, or by Archive status.
   */
  list(
    orgId: string,
    query?: CreditReasonListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown>;
  list(orgId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    orgId: string,
    query: CreditReasonListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list(orgId, {}, query);
    }
    return this._client.get(`/organizations/${orgId}/picklists/creditreasons`, { query, ...options });
  }

  /**
   * Delete the Credit Reason with the given UUID.
   */
  delete(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<CreditReason> {
    return this._client.delete(`/organizations/${orgId}/picklists/creditreasons/${id}`, options);
  }
}

export interface CreditReason {
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
   * The id of the user who created this credit reason.
   */
  createdBy?: string;

  /**
   * The DateTime when the credit reason was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when the credit reason was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this credit reason.
   */
  lastModifiedBy?: string;

  /**
   * The name of the data entity.
   */
  name?: string;
}

export type CreditReasonListResponse = unknown;

export interface CreditReasonCreateParams {
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

export interface CreditReasonUpdateParams {
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

export interface CreditReasonListParams {
  /**
   * TRUE / FALSE archived flag to filter the list. CreditReasons can be archived
   * once they are obsolete.
   *
   * - TRUE includes archived CreditReasons.
   * - FALSE excludes CreditReasons that are archived.
   */
  archived?: boolean;

  /**
   * List of Credit Reason short codes to retrieve.
   */
  codes?: Array<string>;

  /**
   * List of Credit Reason IDs to retrieve.
   */
  ids?: Array<string>;

  /**
   * `nextToken` for multi page retrievals.
   */
  nextToken?: string;

  /**
   * Number of credit reasons to retrieve per page.
   */
  pageSize?: number;
}

export declare namespace CreditReasons {
  export {
    type CreditReason as CreditReason,
    type CreditReasonListResponse as CreditReasonListResponse,
    type CreditReasonCreateParams as CreditReasonCreateParams,
    type CreditReasonUpdateParams as CreditReasonUpdateParams,
    type CreditReasonListParams as CreditReasonListParams,
  };
}
