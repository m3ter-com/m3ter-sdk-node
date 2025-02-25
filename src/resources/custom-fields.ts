// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class CustomFields extends APIResource {
  /**
   * Retrieve all Custom Fields added at Organizational level for the entities that
   * support them.
   */
  retrieve(params?: CustomFieldRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<CustomFields>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<CustomFields>;
  retrieve(
    params: CustomFieldRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomFields> {
    if (isRequestOptions(params)) {
      return this.retrieve({}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/customfields`, options);
  }

  /**
   * Update Custom Fields added at Organization level to entities that support them.
   */
  update(params: CustomFieldUpdateParams, options?: Core.RequestOptions): Core.APIPromise<CustomFields> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/customfields`, { body, ...options });
  }
}

export interface CustomFields {
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
   * CustomFields added to Account entities.
   */
  account?: Record<string, unknown>;

  /**
   * CustomFields added to accountPlan entities.
   */
  accountPlan?: Record<string, unknown>;

  /**
   * CustomFields added to simple Aggregation entities.
   */
  aggregation?: Record<string, unknown>;

  /**
   * CustomFields added to Compound Aggregation entities.
   */
  compoundAggregation?: Record<string, unknown>;

  /**
   * The id of the user who created this custom field.
   */
  createdBy?: string;

  /**
   * The DateTime when the Organization was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when a custom field was last modified - created, modified, or
   * deleted - for the Organization _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this custom field.
   */
  lastModifiedBy?: string;

  /**
   * CustomFields added to Meter entities.
   */
  meter?: Record<string, unknown>;

  /**
   * CustomFields added to the Organization.
   */
  organization?: Record<string, unknown>;

  /**
   * CustomFields added to Plan entities.
   */
  plan?: Record<string, unknown>;

  /**
   * CustomFields added to planTemplate entities.
   */
  planTemplate?: Record<string, unknown>;

  /**
   * CustomFields added to Product entities.
   */
  product?: Record<string, unknown>;
}

export interface CustomFieldRetrieveParams {
  /**
   * UUID of the Organization. The Organization represents your company as a direct
   * customer of the m3ter service.
   */
  orgId?: string;
}

export interface CustomFieldUpdateParams {
  /**
   * Path param: UUID of the Organization. The Organization represents your company
   * as a direct customer of the m3ter service.
   */
  orgId?: string;

  /**
   * Body param: Updates to Account entity CustomFields.
   */
  account?: Record<string, unknown>;

  /**
   * Body param: Updates to accountPlan entity CustomFields.
   */
  accountPlan?: Record<string, unknown>;

  /**
   * Body param: Updates to simple Aggregation entity CustomFields.
   */
  aggregation?: Record<string, unknown>;

  /**
   * Body param: Updates to Compound Aggregation entity CustomFields.
   */
  compoundAggregation?: Record<string, unknown>;

  /**
   * Body param: Updates to Meter entity CustomFields.
   */
  meter?: Record<string, unknown>;

  /**
   * Body param: Updates to Organization CustomFields.
   */
  organization?: Record<string, unknown>;

  /**
   * Body param: Updates to Plan entity CustomFields.
   */
  plan?: Record<string, unknown>;

  /**
   * Body param: Updates to planTemplate entity CustomFields.
   */
  planTemplate?: Record<string, unknown>;

  /**
   * Body param: Updates to Product entity CustomFields.
   */
  product?: Record<string, unknown>;

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

export declare namespace CustomFields {
  export {
    type CustomFields as CustomFields,
    type CustomFieldRetrieveParams as CustomFieldRetrieveParams,
    type CustomFieldUpdateParams as CustomFieldUpdateParams,
  };
}
