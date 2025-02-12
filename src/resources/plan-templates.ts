// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class PlanTemplates extends APIResource {
  /**
   * Create a new PlanTemplate.
   *
   * This endpoint creates a new PlanTemplate within a specific Organization,
   * identified by its unique UUID. The request body should contain the necessary
   * information for the new PlanTemplate.
   */
  create(
    orgId: string,
    body: PlanTemplateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanTemplate> {
    return this._client.post(`/organizations/${orgId}/plantemplates`, { body, ...options });
  }

  /**
   * Retrieve a specific PlanTemplate.
   *
   * This endpoint allows you to retrieve a specific PlanTemplate within a specific
   * Organization, both identified by their unique identifiers (UUIDs).
   */
  retrieve(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<PlanTemplate> {
    return this._client.get(`/organizations/${orgId}/plantemplates/${id}`, options);
  }

  /**
   * Update a specific PlanTemplate.
   *
   * This endpoint enables you to update a specific PlanTemplate within a specific
   * Organization, both identified by their unique identifiers (UUIDs). The request
   * body should contain the updated information for the PlanTemplate.
   *
   * **Note:** If you have created Custom Fields for a Plan Template, when you use
   * this endpoint to update the Plan Template use the `customFields` parameter to
   * preserve those Custom Fields. If you omit them from the update request, they
   * will be lost.
   */
  update(
    orgId: string,
    id: string,
    body: PlanTemplateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanTemplate> {
    return this._client.put(`/organizations/${orgId}/plantemplates/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of PlanTemplates.
   *
   * This endpoint enables you to retrieve a paginated list of PlanTemplates
   * belonging to a specific Organization, identified by its UUID. You can filter the
   * list by PlanTemplate IDs or Product IDs for more focused retrieval.
   */
  list(
    orgId: string,
    query?: PlanTemplateListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanTemplatesCursor, PlanTemplate>;
  list(orgId: string, options?: Core.RequestOptions): Core.PagePromise<PlanTemplatesCursor, PlanTemplate>;
  list(
    orgId: string,
    query: PlanTemplateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanTemplatesCursor, PlanTemplate> {
    if (isRequestOptions(query)) {
      return this.list(orgId, {}, query);
    }
    return this._client.getAPIList(`/organizations/${orgId}/plantemplates`, PlanTemplatesCursor, {
      query,
      ...options,
    });
  }

  /**
   * Delete a specific PlanTemplate.
   *
   * This endpoint enables you to delete a specific PlanTemplate within a specific
   * Organization, both identified by their unique identifiers (UUIDs).
   */
  delete(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<PlanTemplate> {
    return this._client.delete(`/organizations/${orgId}/plantemplates/${id}`, options);
  }
}

export class PlanTemplatesCursor extends Cursor<PlanTemplate> {}

export interface PlanTemplate {
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
   * Determines the frequency at which bills are generated.
   *
   * - **Daily**. Starting at midnight each day, covering the twenty-four hour period
   *   following.
   *
   * - **Weekly**. Starting at midnight on a Monday, covering the seven-day period
   *   following.
   *
   * - **Monthly**. Starting at midnight on the first day of each month, covering the
   *   entire calendar month following.
   *
   * - **Annually**. Starting at midnight on first day of each year covering the
   *   entire calendar year following.
   */
  billFrequency?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ANNUALLY' | 'AD_HOC' | 'MIXED';

  /**
   * How often bills are issued. For example, if `billFrequency` is Monthly and
   * `billFrequencyInterval` is 3, bills are issued every three months.
   */
  billFrequencyInterval?: number;

  /**
   * A unique, short code reference for the PlanTemplate. This code should not
   * contain control characters or spaces.
   */
  code?: string;

  /**
   * The unique identifier (UUID) of the user who created this PlanTemplate.
   */
  createdBy?: string;

  /**
   * The ISO currency code for the pricing currency used by Plans based on the Plan
   * Template to define charge rates for Product consumption - for example USD, GBP,
   * EUR.
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
   * The date and time _(in ISO-8601 format)_ when the PlanTemplate was created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the PlanTemplate was last
   * modified.
   */
  dtLastModified?: string;

  /**
   * The unique identifier (UUID) of the user who last modified this PlanTemplate.
   */
  lastModifiedBy?: string;

  /**
   * The Product minimum spend amount per billing cycle for end customer Accounts on
   * a pricing Plan based on the PlanTemplate. This must be a non-negative number.
   */
  minimumSpend?: number;

  /**
   * A boolean that determines when the minimum spend is billed.
   *
   * - TRUE - minimum spend is billed at the start of each billing period.
   * - FALSE - minimum spend is billed at the end of each billing period.
   *
   * Overrides the setting at Organizational level for minimum spend billing in
   * arrears/in advance.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Minimum spend description _(displayed on the bill line item)_.
   */
  minimumSpendDescription?: string;

  /**
   * Descriptive name for the PlanTemplate.
   */
  name?: string;

  /**
   * The ranking of the PlanTemplate among your pricing plans. Lower numbers
   * represent more basic plans, while higher numbers represent premium plans. This
   * must be a non-negative integer.
   *
   * **NOTE:** **DEPRECATED** - no longer used.
   */
  ordinal?: number;

  /**
   * The unique identifier (UUID) of the Product associated with this PlanTemplate.
   */
  productId?: string;

  /**
   * The fixed charge _(standing charge)_ applied to customer bills. This charge is
   * prorated and must be a non-negative number.
   */
  standingCharge?: number;

  /**
   * A boolean that determines when the standing charge is billed.
   *
   * - TRUE - standing charge is billed at the start of each billing period.
   * - FALSE - standing charge is billed at the end of each billing period.
   *
   * Overrides the setting at Organizational level for standing charge billing in
   * arrears/in advance.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Standing charge description _(displayed on the bill line item)_.
   */
  standingChargeDescription?: string;

  /**
   * How often the standing charge is applied. For example, if the bill is issued
   * every three months and `standingChargeInterval` is 2, then the standing charge
   * is applied every six months.
   */
  standingChargeInterval?: number;

  /**
   * Defines an offset for when the standing charge is first applied. For example, if
   * the bill is issued every three months and the `standingChargeOfset` is 0, then
   * the charge is applied to the first bill _(at three months)_; if 1, it would be
   * applied to the second bill _(at six months)_, and so on.
   */
  standingChargeOffset?: number;
}

export interface PlanTemplateCreateParams {
  /**
   * Determines the frequency at which bills are generated.
   *
   * - **Daily**. Starting at midnight each day, covering the twenty-four hour period
   *   following.
   *
   * - **Weekly**. Starting at midnight on a Monday, covering the seven-day period
   *   following.
   *
   * - **Monthly**. Starting at midnight on the first day of each month, covering the
   *   entire calendar month following.
   *
   * - **Annually**. Starting at midnight on first day of each year covering the
   *   entire calendar year following.
   */
  billFrequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ANNUALLY' | 'AD_HOC' | 'MIXED';

  /**
   * The ISO currency code for the currency used to charge end users - for example
   * USD, GBP, EUR. This defines the _pricing currency_ and is inherited by any Plans
   * based on the Plan Template.
   *
   * **Notes:**
   *
   * - You can define a currency at Organization-level or Account-level to be used as
   *   the _billing currency_. This can be a different currency to that used for the
   *   Plan as the _pricing currency_.
   * - If the billing currency for an Account is different to the pricing currency
   *   used by a Plan attached to the Account, you must ensure a _currency conversion
   *   rate_ is defined for your Organization to convert the pricing currency into
   *   the billing currency at billing, otherwise Bills will fail for the Account.
   * - To define any required currency conversion rates, use the
   *   `currencyConversions` request body parameter for the
   *   [Update OrganizationConfig](https://www.m3ter.com/docs/api#tag/OrganizationConfig/operation/UpdateOrganizationConfig)
   *   call.
   */
  currency: string;

  /**
   * Descriptive name for the PlanTemplate.
   */
  name: string;

  /**
   * The unique identifier (UUID) of the Product associated with this PlanTemplate.
   */
  productId: string;

  /**
   * The fixed charge _(standing charge)_ applied to customer bills. This charge is
   * prorated and must be a non-negative number.
   */
  standingCharge: number;

  /**
   * How often bills are issued. For example, if `billFrequency` is Monthly and
   * `billFrequencyInterval` is 3, bills are issued every three months.
   */
  billFrequencyInterval?: number;

  /**
   * A unique, short code reference for the PlanTemplate. This code should not
   * contain control characters or spaces.
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
   * The Product minimum spend amount per billing cycle for end customer Accounts on
   * a pricing Plan based on the PlanTemplate. This must be a non-negative number.
   */
  minimumSpend?: number;

  /**
   * A boolean that determines when the minimum spend is billed.
   *
   * - TRUE - minimum spend is billed at the start of each billing period.
   * - FALSE - minimum spend is billed at the end of each billing period.
   *
   * Overrides the setting at Organizational level for minimum spend billing in
   * arrears/in advance.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Minimum spend description _(displayed on the bill line item)_.
   */
  minimumSpendDescription?: string;

  /**
   * The ranking of the PlanTemplate among your pricing plans. Lower numbers
   * represent more basic plans, while higher numbers represent premium plans. This
   * must be a non-negative integer.
   *
   * **NOTE: DEPRECATED** - do not use.
   */
  ordinal?: number;

  /**
   * A boolean that determines when the standing charge is billed.
   *
   * - TRUE - standing charge is billed at the start of each billing period.
   * - FALSE - standing charge is billed at the end of each billing period.
   *
   * Overrides the setting at Organizational level for standing charge billing in
   * arrears/in advance.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Standing charge description _(displayed on the bill line item)_.
   */
  standingChargeDescription?: string;

  /**
   * How often the standing charge is applied. For example, if the bill is issued
   * every three months and `standingChargeInterval` is 2, then the standing charge
   * is applied every six months.
   */
  standingChargeInterval?: number;

  /**
   * Defines an offset for when the standing charge is first applied. For example, if
   * the bill is issued every three months and the `standingChargeOfset` is 0, then
   * the charge is applied to the first bill _(at three months)_; if 1, it would be
   * applied to the second bill _(at six months)_, and so on.
   */
  standingChargeOffset?: number;

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

export interface PlanTemplateUpdateParams {
  /**
   * Determines the frequency at which bills are generated.
   *
   * - **Daily**. Starting at midnight each day, covering the twenty-four hour period
   *   following.
   *
   * - **Weekly**. Starting at midnight on a Monday, covering the seven-day period
   *   following.
   *
   * - **Monthly**. Starting at midnight on the first day of each month, covering the
   *   entire calendar month following.
   *
   * - **Annually**. Starting at midnight on first day of each year covering the
   *   entire calendar year following.
   */
  billFrequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ANNUALLY' | 'AD_HOC' | 'MIXED';

  /**
   * The ISO currency code for the currency used to charge end users - for example
   * USD, GBP, EUR. This defines the _pricing currency_ and is inherited by any Plans
   * based on the Plan Template.
   *
   * **Notes:**
   *
   * - You can define a currency at Organization-level or Account-level to be used as
   *   the _billing currency_. This can be a different currency to that used for the
   *   Plan as the _pricing currency_.
   * - If the billing currency for an Account is different to the pricing currency
   *   used by a Plan attached to the Account, you must ensure a _currency conversion
   *   rate_ is defined for your Organization to convert the pricing currency into
   *   the billing currency at billing, otherwise Bills will fail for the Account.
   * - To define any required currency conversion rates, use the
   *   `currencyConversions` request body parameter for the
   *   [Update OrganizationConfig](https://www.m3ter.com/docs/api#tag/OrganizationConfig/operation/UpdateOrganizationConfig)
   *   call.
   */
  currency: string;

  /**
   * Descriptive name for the PlanTemplate.
   */
  name: string;

  /**
   * The unique identifier (UUID) of the Product associated with this PlanTemplate.
   */
  productId: string;

  /**
   * The fixed charge _(standing charge)_ applied to customer bills. This charge is
   * prorated and must be a non-negative number.
   */
  standingCharge: number;

  /**
   * How often bills are issued. For example, if `billFrequency` is Monthly and
   * `billFrequencyInterval` is 3, bills are issued every three months.
   */
  billFrequencyInterval?: number;

  /**
   * A unique, short code reference for the PlanTemplate. This code should not
   * contain control characters or spaces.
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
   * The Product minimum spend amount per billing cycle for end customer Accounts on
   * a pricing Plan based on the PlanTemplate. This must be a non-negative number.
   */
  minimumSpend?: number;

  /**
   * A boolean that determines when the minimum spend is billed.
   *
   * - TRUE - minimum spend is billed at the start of each billing period.
   * - FALSE - minimum spend is billed at the end of each billing period.
   *
   * Overrides the setting at Organizational level for minimum spend billing in
   * arrears/in advance.
   */
  minimumSpendBillInAdvance?: boolean;

  /**
   * Minimum spend description _(displayed on the bill line item)_.
   */
  minimumSpendDescription?: string;

  /**
   * The ranking of the PlanTemplate among your pricing plans. Lower numbers
   * represent more basic plans, while higher numbers represent premium plans. This
   * must be a non-negative integer.
   *
   * **NOTE: DEPRECATED** - do not use.
   */
  ordinal?: number;

  /**
   * A boolean that determines when the standing charge is billed.
   *
   * - TRUE - standing charge is billed at the start of each billing period.
   * - FALSE - standing charge is billed at the end of each billing period.
   *
   * Overrides the setting at Organizational level for standing charge billing in
   * arrears/in advance.
   */
  standingChargeBillInAdvance?: boolean;

  /**
   * Standing charge description _(displayed on the bill line item)_.
   */
  standingChargeDescription?: string;

  /**
   * How often the standing charge is applied. For example, if the bill is issued
   * every three months and `standingChargeInterval` is 2, then the standing charge
   * is applied every six months.
   */
  standingChargeInterval?: number;

  /**
   * Defines an offset for when the standing charge is first applied. For example, if
   * the bill is issued every three months and the `standingChargeOfset` is 0, then
   * the charge is applied to the first bill _(at three months)_; if 1, it would be
   * applied to the second bill _(at six months)_, and so on.
   */
  standingChargeOffset?: number;

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

export interface PlanTemplateListParams extends CursorParams {
  /**
   * List of specific PlanTemplate UUIDs to retrieve.
   */
  ids?: Array<string>;

  /**
   * The unique identifiers (UUIDs) of the Products to retrieve associated
   * PlanTemplates.
   */
  productId?: string;
}

PlanTemplates.PlanTemplatesCursor = PlanTemplatesCursor;

export declare namespace PlanTemplates {
  export {
    type PlanTemplate as PlanTemplate,
    PlanTemplatesCursor as PlanTemplatesCursor,
    type PlanTemplateCreateParams as PlanTemplateCreateParams,
    type PlanTemplateUpdateParams as PlanTemplateUpdateParams,
    type PlanTemplateListParams as PlanTemplateListParams,
  };
}
