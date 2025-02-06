// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class Plans extends APIResource {
  /**
   * Create a new Plan.
   */
  create(orgId: string, body: PlanCreateParams, options?: Core.RequestOptions): Core.APIPromise<Plan> {
    return this._client.post(`/organizations/${orgId}/plans`, { body, ...options });
  }

  /**
   * Retrieve the Plan with the given UUID.
   */
  retrieve(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Plan> {
    return this._client.get(`/organizations/${orgId}/plans/${id}`, options);
  }

  /**
   * Update the Plan with the given UUID.
   *
   * **Note:** If you have created Custom Fields for a Plan, when you use this
   * endpoint to update the Plan use the `customFields` parameter to preserve those
   * Custom Fields. If you omit them from the update request, they will be lost.
   */
  update(
    orgId: string,
    id: string,
    body: PlanUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Plan> {
    return this._client.put(`/organizations/${orgId}/plans/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of Plans that can be filtered by Product, Account, or Plan ID.
   */
  list(
    orgId: string,
    query?: PlanListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlansCursor, Plan>;
  list(orgId: string, options?: Core.RequestOptions): Core.PagePromise<PlansCursor, Plan>;
  list(
    orgId: string,
    query: PlanListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlansCursor, Plan> {
    if (isRequestOptions(query)) {
      return this.list(orgId, {}, query);
    }
    return this._client.getAPIList(`/organizations/${orgId}/plans`, PlansCursor, { query, ...options });
  }

  /**
   * Delete the Plan with the given UUID.
   */
  delete(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Plan> {
    return this._client.delete(`/organizations/${orgId}/plans/${id}`, options);
  }
}

export class PlansCursor extends Cursor<Plan> {}

export interface Plan {
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
   * _(Optional)_. The Account ID for which this plan was created as custom/bespoke.
   * A custom/bespoke Plan can only be attached to the specified Account.
   */
  accountId?: string;

  /**
   * TRUE/FALSE flag indicating whether the plan is custom/bespoke for a particular
   * Account.
   */
  bespoke?: boolean;

  /**
   * Unique short code reference for the Plan.
   */
  code?: string;

  /**
   * The id of the user who created this plan.
   */
  createdBy?: string;

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
   * The DateTime _(in ISO-8601 format)_ when the plan was created.
   */
  dtCreated?: string;

  /**
   * The DateTime _(in ISO-8601 format)_ when the plan was last modified.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this plan.
   */
  lastModifiedBy?: string;

  /**
   * The product minimum spend amount per billing cycle for end customer Accounts on
   * a priced Plan.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   */
  minimumSpend?: number;

  /**
   * When TRUE, minimum spend is billed at the start of each billing period.
   *
   * When FALSE, minimum spend is billed at the end of each billing period.
   *
   * _(Optional)_. Overrides the setting at PlanTemplate level for minimum spend
   * billing in arrears/in advance.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Minimum spend description _(displayed on the bill line item)_.
   */
  minimumSpendDescription?: string;

  /**
   * Descriptive name for the Plan.
   */
  name?: string;

  /**
   * Assigns a rank or position to the Plan in your order of pricing plans - lower
   * numbers represent more basic pricing plans; higher numbers represent more
   * premium pricing plans.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   *
   * **NOTE:** **DEPRECATED** - no longer used.
   */
  ordinal?: number;

  /**
   * UUID of the PlanTemplate the Plan belongs to.
   */
  planTemplateId?: string;

  /**
   * UUID of the Product the Plan belongs to.
   */
  productId?: string;

  /**
   * The standing charge applied to bills for end customers. This is prorated.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   */
  standingCharge?: number;

  /**
   * When TRUE, standing charge is billed at the start of each billing period.
   *
   * When FALSE, standing charge is billed at the end of each billing period.
   *
   * _(Optional)_. Overrides the setting at PlanTemplate level for standing charge
   * billing in arrears/in advance.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Standing charge description _(displayed on the bill line item)_.
   */
  standingChargeDescription?: string;
}

export interface PlanCreateParams {
  /**
   * Unique short code reference for the Plan.
   */
  code: string;

  /**
   * Descriptive name for the Plan.
   */
  name: string;

  /**
   * UUID of the PlanTemplate the Plan belongs to.
   */
  planTemplateId: string;

  /**
   * _(Optional)_. Used to specify an Account for which the Plan will be a
   * custom/bespoke Plan:
   *
   * - Use when first creating a Plan.
   * - A custom/bespoke Plan can only be attached to the specified Account.
   * - Once created, a custom/bespoke Plan cannot be updated to be made a
   *   custom/bespoke Plan for a different Account.
   */
  accountId?: string;

  /**
   * TRUE/FALSE flag indicating whether the plan is a custom/bespoke Plan for a
   * particular Account:
   *
   * - When creating a Plan, use the `accountId` request parameter to specify the
   *   Account for which the Plan will be custom/bespoke.
   * - A custom/bespoke Plan can only be attached to the specified Account.
   */
  bespoke?: boolean;

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
   * The product minimum spend amount per billing cycle for end customer Accounts on
   * a priced Plan.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   */
  minimumSpend?: number;

  /**
   * When TRUE, minimum spend is billed at the start of each billing period.
   *
   * When FALSE, minimum spend is billed at the end of each billing period.
   *
   * _(Optional)_. Overrides the setting at PlanTemplate level for minimum spend
   * billing in arrears/in advance.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Minimum spend description _(displayed on the bill line item)_.
   */
  minimumSpendDescription?: string;

  /**
   * Assigns a rank or position to the Plan in your order of pricing plans - lower
   * numbers represent more basic pricing plans; higher numbers represent more
   * premium pricing plans.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   *
   * **NOTE: DEPRECATED** - do not use.
   */
  ordinal?: number;

  /**
   * The standing charge applied to bills for end customers. This is prorated.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   */
  standingCharge?: number;

  /**
   * When TRUE, standing charge is billed at the start of each billing period.
   *
   * When FALSE, standing charge is billed at the end of each billing period.
   *
   * _(Optional)_. Overrides the setting at PlanTemplate level for standing charge
   * billing in arrears/in advance.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Standing charge description _(displayed on the bill line item)_.
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

export interface PlanUpdateParams {
  /**
   * Unique short code reference for the Plan.
   */
  code: string;

  /**
   * Descriptive name for the Plan.
   */
  name: string;

  /**
   * UUID of the PlanTemplate the Plan belongs to.
   */
  planTemplateId: string;

  /**
   * _(Optional)_. Used to specify an Account for which the Plan will be a
   * custom/bespoke Plan:
   *
   * - Use when first creating a Plan.
   * - A custom/bespoke Plan can only be attached to the specified Account.
   * - Once created, a custom/bespoke Plan cannot be updated to be made a
   *   custom/bespoke Plan for a different Account.
   */
  accountId?: string;

  /**
   * TRUE/FALSE flag indicating whether the plan is a custom/bespoke Plan for a
   * particular Account:
   *
   * - When creating a Plan, use the `accountId` request parameter to specify the
   *   Account for which the Plan will be custom/bespoke.
   * - A custom/bespoke Plan can only be attached to the specified Account.
   */
  bespoke?: boolean;

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
   * The product minimum spend amount per billing cycle for end customer Accounts on
   * a priced Plan.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   */
  minimumSpend?: number;

  /**
   * When TRUE, minimum spend is billed at the start of each billing period.
   *
   * When FALSE, minimum spend is billed at the end of each billing period.
   *
   * _(Optional)_. Overrides the setting at PlanTemplate level for minimum spend
   * billing in arrears/in advance.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Minimum spend description _(displayed on the bill line item)_.
   */
  minimumSpendDescription?: string;

  /**
   * Assigns a rank or position to the Plan in your order of pricing plans - lower
   * numbers represent more basic pricing plans; higher numbers represent more
   * premium pricing plans.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   *
   * **NOTE: DEPRECATED** - do not use.
   */
  ordinal?: number;

  /**
   * The standing charge applied to bills for end customers. This is prorated.
   *
   * _(Optional)_. Overrides PlanTemplate value.
   */
  standingCharge?: number;

  /**
   * When TRUE, standing charge is billed at the start of each billing period.
   *
   * When FALSE, standing charge is billed at the end of each billing period.
   *
   * _(Optional)_. Overrides the setting at PlanTemplate level for standing charge
   * billing in arrears/in advance.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Standing charge description _(displayed on the bill line item)_.
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

export interface PlanListParams extends CursorParams {
  /**
   * List of Account IDs the Plan belongs to.
   */
  accountId?: Array<string>;

  /**
   * List of Plan IDs to retrieve.
   */
  ids?: Array<string>;

  /**
   * UUID of the Product to retrieve Plans for.
   */
  productId?: string;
}

Plans.PlansCursor = PlansCursor;

export declare namespace Plans {
  export {
    type Plan as Plan,
    PlansCursor as PlansCursor,
    type PlanCreateParams as PlanCreateParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanListParams as PlanListParams,
  };
}
