// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class PlanGroups extends APIResource {
  /**
   * Create a new PlanGroup. This endpoint creates a new PlanGroup within the
   * specified organization.
   */
  create(
    orgId: string,
    body: PlanGroupCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanGroup> {
    return this._client.post(`/organizations/${orgId}/plangroups`, { body, ...options });
  }

  /**
   * Retrieve a specific PlanGroup with the given UUID.
   *
   * This endpoint retrieves detailed information about a specific PlanGroup
   * identified by the given UUID within a specific organization.
   */
  retrieve(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<PlanGroup> {
    return this._client.get(`/organizations/${orgId}/plangroups/${id}`, options);
  }

  /**
   * Update the PlanGroup with the given UUID.
   *
   * This endpoint updates the details of a specific PlanGroup identified by the
   * given UUID within a specific organization. This allows modifications to existing
   * PlanGroup attributes.
   *
   * **Note:** If you have created Custom Fields for a PlanGroup, when you use this
   * endpoint to update the PlanGroup use the `customFields` parameter to preserve
   * those Custom Fields. If you omit them from the update request, they will be
   * lost.
   */
  update(
    orgId: string,
    id: string,
    body: PlanGroupUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanGroup> {
    return this._client.put(`/organizations/${orgId}/plangroups/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of PlanGroups.
   *
   * Retrieves a list of PlanGroups within the specified organization. You can
   * optionally filter by Account IDs or PlanGroup IDs, and also paginate the results
   * for easier management.
   */
  list(orgId: string, query?: PlanGroupListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(orgId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    orgId: string,
    query: PlanGroupListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list(orgId, {}, query);
    }
    return this._client.get(`/organizations/${orgId}/plangroups`, { query, ...options });
  }

  /**
   * Delete a PlanGroup with the given UUID.
   *
   * This endpoint deletes the PlanGroup identified by the given UUID within a
   * specific organization. This operation is irreversible and removes the PlanGroup
   * along with any associated settings.
   */
  delete(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<PlanGroup> {
    return this._client.delete(`/organizations/${orgId}/plangroups/${id}`, options);
  }
}

export interface PlanGroup {
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
   * Optional. This PlanGroup was created as bespoke for the associated Account with
   * this Account ID.
   */
  accountId?: string;

  /**
   * The short code representing the PlanGroup.
   */
  code?: string;

  /**
   * The unique identifier (UUID) for the user who created the PlanGroup.
   */
  createdBy?: string;

  /**
   * Currency code for the PlanGroup (For example, USD).
   */
  currency?: string;

  /**
   * User defined fields enabling you to attach custom data. The value for a custom
   * field can be either a string or a number.
   *
   * If `customFields` can also be defined for this entity at the Organizational
   * level,`customField` values defined at individual level override values of
   * `customFields` with the same name defined at Organization level.
   *
   * See
   * [Working with Custom Fields](https://www.m3ter.com/docs/guides/creating-and-managing-products/working-with-custom-fields)
   * in the m3ter documentation for more information.
   */
  customFields?: Record<string, string | number>;

  /**
   * The date and time _(in ISO 8601 format)_ when the PlanGroup was first created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO 8601 format)_ when the PlanGroup was last modified.
   */
  dtLastModified?: string;

  /**
   * The unique identifier (UUID) for the user who last modified the PlanGroup.
   */
  lastModifiedBy?: string;

  /**
   * The minimum spend amount for the PlanGroup.
   */
  minimumSpend?: number;

  /**
   * Optional. Product ID to attribute the PlanGroup's minimum spend for accounting
   * purposes.
   */
  minimumSpendAccountingProductId?: string;

  /**
   * A boolean flag that determines when the minimum spend is billed. This flag
   * overrides the setting at Organizational level for minimum spend billing in
   * arrears/in advance.
   *
   * - **TRUE** - minimum spend is billed at the start of each billing period.
   * - **FALSE** - minimum spend is billed at the end of each billing period.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Description of the minimum spend, displayed on the bill line item.
   */
  minimumSpendDescription?: string;

  /**
   * The name of the PlanGroup.
   */
  name?: string;

  /**
   * Standing charge amount for the PlanGroup.
   */
  standingCharge?: number;

  /**
   * Optional. Product ID to attribute the PlanGroup's standing charge for accounting
   * purposes.
   */
  standingChargeAccountingProductId?: string;

  /**
   * A boolean flag that determines when the standing charge is billed. This flag
   * overrides the setting at Organizational level for standing charge billing in
   * arrears/in advance.
   *
   * - **TRUE** - standing charge is billed at the start of each billing period.
   * - **FALSE** - standing charge is billed at the end of each billing period.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Description of the standing charge, displayed on the bill line item.
   */
  standingChargeDescription?: string;
}

export type PlanGroupListResponse = unknown;

export interface PlanGroupCreateParams {
  /**
   * Currency code for the PlanGroup (For example, USD).
   */
  currency: string;

  /**
   * The name of the PlanGroup.
   */
  name: string;

  /**
   * Optional. This PlanGroup is created as bespoke for the associated Account with
   * this Account ID.
   */
  accountId?: string;

  /**
   * The short code representing the PlanGroup.
   */
  code?: string;

  /**
   * User defined fields enabling you to attach custom data. The value for a custom
   * field can be either a string or a number.
   *
   * If `customFields` can also be defined for this entity at the Organizational
   * level, `customField` values defined at individual level override values of
   * `customFields` with the same name defined at Organization level.
   *
   * See
   * [Working with Custom Fields](https://www.m3ter.com/docs/guides/creating-and-managing-products/working-with-custom-fields)
   * in the m3ter documentation for more information.
   */
  customFields?: Record<string, string | number>;

  /**
   * The minimum spend amount for the PlanGroup.
   */
  minimumSpend?: number;

  /**
   * Optional. Product ID to attribute the PlanGroup's minimum spend for accounting
   * purposes.
   */
  minimumSpendAccountingProductId?: string;

  /**
   * A boolean flag that determines when the minimum spend is billed. This flag
   * overrides the setting at Organizational level for minimum spend billing in
   * arrears/in advance.
   *
   * - **TRUE** - minimum spend is billed at the start of each billing period.
   * - **FALSE** - minimum spend is billed at the end of each billing period.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Description of the minimum spend, displayed on the bill line item.
   */
  minimumSpendDescription?: string;

  /**
   * Standing charge amount for the PlanGroup.
   */
  standingCharge?: number;

  /**
   * Optional. Product ID to attribute the PlanGroup's standing charge for accounting
   * purposes.
   */
  standingChargeAccountingProductId?: string;

  /**
   * A boolean flag that determines when the standing charge is billed. This flag
   * overrides the setting at Organizational level for standing charge billing in
   * arrears/in advance.
   *
   * - **TRUE** - standing charge is billed at the start of each billing period.
   * - **FALSE** - standing charge is billed at the end of each billing period.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Description of the standing charge, displayed on the bill line item.
   */
  standingChargeDescription?: string;

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

export interface PlanGroupUpdateParams {
  /**
   * Currency code for the PlanGroup (For example, USD).
   */
  currency: string;

  /**
   * The name of the PlanGroup.
   */
  name: string;

  /**
   * Optional. This PlanGroup is created as bespoke for the associated Account with
   * this Account ID.
   */
  accountId?: string;

  /**
   * The short code representing the PlanGroup.
   */
  code?: string;

  /**
   * User defined fields enabling you to attach custom data. The value for a custom
   * field can be either a string or a number.
   *
   * If `customFields` can also be defined for this entity at the Organizational
   * level, `customField` values defined at individual level override values of
   * `customFields` with the same name defined at Organization level.
   *
   * See
   * [Working with Custom Fields](https://www.m3ter.com/docs/guides/creating-and-managing-products/working-with-custom-fields)
   * in the m3ter documentation for more information.
   */
  customFields?: Record<string, string | number>;

  /**
   * The minimum spend amount for the PlanGroup.
   */
  minimumSpend?: number;

  /**
   * Optional. Product ID to attribute the PlanGroup's minimum spend for accounting
   * purposes.
   */
  minimumSpendAccountingProductId?: string;

  /**
   * A boolean flag that determines when the minimum spend is billed. This flag
   * overrides the setting at Organizational level for minimum spend billing in
   * arrears/in advance.
   *
   * - **TRUE** - minimum spend is billed at the start of each billing period.
   * - **FALSE** - minimum spend is billed at the end of each billing period.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Description of the minimum spend, displayed on the bill line item.
   */
  minimumSpendDescription?: string;

  /**
   * Standing charge amount for the PlanGroup.
   */
  standingCharge?: number;

  /**
   * Optional. Product ID to attribute the PlanGroup's standing charge for accounting
   * purposes.
   */
  standingChargeAccountingProductId?: string;

  /**
   * A boolean flag that determines when the standing charge is billed. This flag
   * overrides the setting at Organizational level for standing charge billing in
   * arrears/in advance.
   *
   * - **TRUE** - standing charge is billed at the start of each billing period.
   * - **FALSE** - standing charge is billed at the end of each billing period.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Description of the standing charge, displayed on the bill line item.
   */
  standingChargeDescription?: string;

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

export interface PlanGroupListParams {
  /**
   * Optional filter. The list of Account IDs to which the PlanGroups belong.
   */
  accountId?: Array<string>;

  /**
   * Optional filter. The list of PlanGroup IDs to retrieve.
   */
  ids?: Array<string>;

  /**
   * The `nextToken` for multi-page retrievals. It is used to fetch the next page of
   * PlanGroups in a paginated list.
   */
  nextToken?: string;

  /**
   * Specifies the maximum number of PlanGroups to retrieve per page.
   */
  pageSize?: number;
}

export declare namespace PlanGroups {
  export {
    type PlanGroup as PlanGroup,
    type PlanGroupListResponse as PlanGroupListResponse,
    type PlanGroupCreateParams as PlanGroupCreateParams,
    type PlanGroupUpdateParams as PlanGroupUpdateParams,
    type PlanGroupListParams as PlanGroupListParams,
  };
}
