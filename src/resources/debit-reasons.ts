// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class DebitReasons extends APIResource {
  /**
   * Create a new Debit Reason for your Organization. When you've created a Debit
   * Reason, it becomes available as a debit type for adding Debit line items to
   * Bills. See [Debits](https://www.m3ter.com/docs/api#tag/Debits).
   */
  create(
    params: DebitReasonCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DebitReasonResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/picklists/debitreasons`, { body, ...options });
  }

  /**
   * Retrieve the Debit Reason with the given UUID.
   */
  retrieve(
    id: string,
    params?: DebitReasonRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DebitReasonResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<DebitReasonResponse>;
  retrieve(
    id: string,
    params: DebitReasonRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DebitReasonResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/picklists/debitreasons/${id}`, options);
  }

  /**
   * Update the Debit Reason with the given UUID.
   */
  update(
    id: string,
    params: DebitReasonUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DebitReasonResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/picklists/debitreasons/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of the Debit Reason entities created for your Organization. You
   * can filter the list returned for the call by Debit Reason ID, Debit Reason short
   * code, or by Archive status.
   */
  list(
    params?: DebitReasonListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DebitReasonResponsesCursor, DebitReasonResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<DebitReasonResponsesCursor, DebitReasonResponse>;
  list(
    params: DebitReasonListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DebitReasonResponsesCursor, DebitReasonResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/picklists/debitreasons`,
      DebitReasonResponsesCursor,
      { query, ...options },
    );
  }

  /**
   * Delete the Debit Reason with the given UUID.
   */
  delete(
    id: string,
    params?: DebitReasonDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DebitReasonResponse>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<DebitReasonResponse>;
  delete(
    id: string,
    params: DebitReasonDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DebitReasonResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/picklists/debitreasons/${id}`, options);
  }
}

export class DebitReasonResponsesCursor extends Cursor<DebitReasonResponse> {}

export interface DebitReasonResponse {
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
   * The id of the user who created this debit reason.
   */
  createdBy?: string;

  /**
   * The DateTime when the debit reason was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when the debit reason was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this debit reason.
   */
  lastModifiedBy?: string;

  /**
   * The name of the data entity.
   */
  name?: string;
}

export interface DebitReasonCreateParams {
  /**
   * Path param: UUID of the Organization. The Organization represents your company
   * as a direct customer of the m3ter service.
   */
  orgId?: string;

  /**
   * Body param: The name of the entity.
   */
  name: string;

  /**
   * Body param: A Boolean TRUE / FALSE flag indicating whether the entity is
   * archived. An entity can be archived if it is obsolete.
   *
   * - TRUE - the entity is in the archived state.
   * - FALSE - the entity is not in the archived state.
   */
  archived?: boolean;

  /**
   * Body param: The short code for the entity.
   */
  code?: string;

  /**
   * Body param: The version number of the entity:
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

export interface DebitReasonRetrieveParams {
  /**
   * UUID of the Organization. The Organization represents your company as a direct
   * customer of the m3ter service.
   */
  orgId?: string;
}

export interface DebitReasonUpdateParams {
  /**
   * Path param: UUID of the Organization. The Organization represents your company
   * as a direct customer of the m3ter service.
   */
  orgId?: string;

  /**
   * Body param: The name of the entity.
   */
  name: string;

  /**
   * Body param: A Boolean TRUE / FALSE flag indicating whether the entity is
   * archived. An entity can be archived if it is obsolete.
   *
   * - TRUE - the entity is in the archived state.
   * - FALSE - the entity is not in the archived state.
   */
  archived?: boolean;

  /**
   * Body param: The short code for the entity.
   */
  code?: string;

  /**
   * Body param: The version number of the entity:
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

export interface DebitReasonListParams extends CursorParams {
  /**
   * Path param: UUID of the Organization. The Organization represents your company
   * as a direct customer of the m3ter service.
   */
  orgId?: string;

  /**
   * Query param: Filter using the boolean archived flag. DebitReasons can be
   * archived if they are obsolete.
   *
   * - TRUE includes DebitReasons that have been archived.
   * - FALSE excludes archived DebitReasons.
   */
  archived?: boolean;

  /**
   * Query param: List of Debit Reason short codes to retrieve.
   */
  codes?: Array<string>;

  /**
   * Query param: List of Debit Reason IDs to retrieve.
   */
  ids?: Array<string>;
}

export interface DebitReasonDeleteParams {
  /**
   * UUID of the Organization. The Organization represents your company as a direct
   * customer of the m3ter service.
   */
  orgId?: string;
}

DebitReasons.DebitReasonResponsesCursor = DebitReasonResponsesCursor;

export declare namespace DebitReasons {
  export {
    type DebitReasonResponse as DebitReasonResponse,
    DebitReasonResponsesCursor as DebitReasonResponsesCursor,
    type DebitReasonCreateParams as DebitReasonCreateParams,
    type DebitReasonRetrieveParams as DebitReasonRetrieveParams,
    type DebitReasonUpdateParams as DebitReasonUpdateParams,
    type DebitReasonListParams as DebitReasonListParams,
    type DebitReasonDeleteParams as DebitReasonDeleteParams,
  };
}
