// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class PlanGroupLinks extends APIResource {
  /**
   * Create a new PlanGroupLink.
   */
  create(
    orgId: string,
    body: PlanGroupLinkCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanGroupLink> {
    return this._client.post(`/organizations/${orgId}/plangrouplinks`, { body, ...options });
  }

  /**
   * Retrieve a PlanGroupLink for the given UUID.
   */
  retrieve(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<PlanGroupLink> {
    return this._client.get(`/organizations/${orgId}/plangrouplinks/${id}`, options);
  }

  /**
   * Update PlanGroupLink for the given UUID.
   */
  update(
    orgId: string,
    id: string,
    body: PlanGroupLinkUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanGroupLink> {
    return this._client.put(`/organizations/${orgId}/plangrouplinks/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of PlanGroupLink entities
   */
  list(
    orgId: string,
    query?: PlanGroupLinkListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanGroupLinksCursor, PlanGroupLink>;
  list(orgId: string, options?: Core.RequestOptions): Core.PagePromise<PlanGroupLinksCursor, PlanGroupLink>;
  list(
    orgId: string,
    query: PlanGroupLinkListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanGroupLinksCursor, PlanGroupLink> {
    if (isRequestOptions(query)) {
      return this.list(orgId, {}, query);
    }
    return this._client.getAPIList(`/organizations/${orgId}/plangrouplinks`, PlanGroupLinksCursor, {
      query,
      ...options,
    });
  }

  /**
   * Delete a PlanGroupLink for the given UUID.
   */
  delete(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<PlanGroupLink> {
    return this._client.delete(`/organizations/${orgId}/plangrouplinks/${id}`, options);
  }
}

export class PlanGroupLinksCursor extends Cursor<PlanGroupLink> {}

export interface PlanGroupLink {
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
   * The id of the user who created this plan group link.
   */
  createdBy?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the plan group link was created.
   */
  dtCreated?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the plan group link was last modified.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this plan group link.
   */
  lastModifiedBy?: string;

  /**
   * ID of the linked PlanGroup
   */
  planGroupId?: string;

  /**
   * ID of the linked Plan
   */
  planId?: string;
}

export interface PlanGroupLinkCreateParams {
  planGroupId: string;

  planId: string;

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

export interface PlanGroupLinkUpdateParams {
  planGroupId: string;

  planId: string;

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

export interface PlanGroupLinkListParams extends CursorParams {
  /**
   * list of IDs to retrieve
   */
  ids?: Array<string>;

  /**
   * UUID of the Plan to retrieve PlanGroupLinks for
   */
  plan?: string;

  /**
   * UUID of the PlanGroup to retrieve PlanGroupLinks for
   */
  planGroup?: string;
}

PlanGroupLinks.PlanGroupLinksCursor = PlanGroupLinksCursor;

export declare namespace PlanGroupLinks {
  export {
    type PlanGroupLink as PlanGroupLink,
    PlanGroupLinksCursor as PlanGroupLinksCursor,
    type PlanGroupLinkCreateParams as PlanGroupLinkCreateParams,
    type PlanGroupLinkUpdateParams as PlanGroupLinkUpdateParams,
    type PlanGroupLinkListParams as PlanGroupLinkListParams,
  };
}
