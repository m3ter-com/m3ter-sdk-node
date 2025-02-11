// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Accounts extends APIResource {
  /**
   * Create a new Account within the Organization.
   */
  create(orgId: string, body: AccountCreateParams, options?: Core.RequestOptions): Core.APIPromise<Account> {
    return this._client.post(`/organizations/${orgId}/accounts`, { body, ...options });
  }

  /**
   * Retrieve the Account with the given Account UUID.
   */
  retrieve(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Account> {
    return this._client.get(`/organizations/${orgId}/accounts/${id}`, options);
  }

  /**
   * Update the Account with the given Account UUID.
   *
   * **Note:** If you have created Custom Fields for an Account, when you use this
   * endpoint to update the Account, use the `customFields` parameter to preserve
   * those Custom Fields. If you omit them from the update request, they will be
   * lost.
   */
  update(
    orgId: string,
    id: string,
    body: AccountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Account> {
    return this._client.put(`/organizations/${orgId}/accounts/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of Accounts that can be filtered by Account ID or Account Code.
   */
  list(orgId: string, query?: AccountListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(orgId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    orgId: string,
    query: AccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list(orgId, {}, query);
    }
    return this._client.get(`/organizations/${orgId}/accounts`, { query, ...options });
  }

  /**
   * Delete the Account with the given UUID. This may fail if there are any
   * AccountPlans that reference the Account being deleted.
   */
  delete(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Account> {
    return this._client.delete(`/organizations/${orgId}/accounts/${id}`, options);
  }

  /**
   * Retrieve a list of Accounts that are children of the specified Account.
   */
  listChildren(
    orgId: string,
    id: string,
    query?: AccountListChildrenParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Account>;
  listChildren(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Account>;
  listChildren(
    orgId: string,
    id: string,
    query: AccountListChildrenParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Account> {
    if (isRequestOptions(query)) {
      return this.listChildren(orgId, id, {}, query);
    }
    return this._client.get(`/organizations/${orgId}/accounts/${id}/children`, { query, ...options });
  }

  /**
   * Search for account entities
   */
  search(orgId: string, query?: AccountSearchParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  search(orgId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  search(
    orgId: string,
    query: AccountSearchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.search(orgId, {}, query);
    }
    return this._client.get(`/organizations/${orgId}/accounts/search`, { query, ...options });
  }
}

export interface Account {
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
   * Contact address.
   */
  address?: Account.Address;

  /**
   * Specify whether to auto-generate statements once Bills are approved or locked.
   *
   * - **None**. Statements will not be auto-generated.
   * - **JSON**. Statements are auto-generated in JSON format.
   * - **JSON and CSV**. Statements are auto-generated in both JSON and CSV formats.
   */
  autoGenerateStatementMode?: 'NONE' | 'JSON' | 'JSON_AND_CSV';

  /**
   * Defines first bill date for Account Bills. For example, if the Plan attached to
   * the Account is set for monthly billing frequency and you set the first bill date
   * to be January 1st, Bills are created every month starting on that date.
   *
   * Optional attribute - if not defined, then first bill date is determined by the
   * Epoch settings at Organizational level.
   */
  billEpoch?: string;

  /**
   * Code of the Account. This is a unique short code used for the Account.
   */
  code?: string;

  /**
   * Configuration data for the Account
   */
  configData?: Record<string, unknown>;

  /**
   * The ID of the user who created the account.
   */
  createdBy?: string;

  /**
   * The order in which any Prepayment or Balance amounts on the Account are to be
   * drawn-down against for billing. Four options:
   *
   * - `"PREPAYMENT","BALANCE"`. Draw-down against Prepayment credit before Balance
   *   credit.
   * - `"BALANCE","PREPAYMENT"`. Draw-down against Balance credit before Prepayment
   *   credit.
   * - `"PREPAYMENT"`. Only draw-down against Prepayment credit.
   * - `"BALANCE"`. Only draw-down against Balance credit.
   */
  creditApplicationOrder?: Array<'PREPAYMENT' | 'BALANCE'>;

  /**
   * Account level billing currency, such as USD or GBP. Optional attribute:
   *
   * - If you define an Account currency, this will be used for bills.
   * - If you do not define a currency, the billing currency defined at
   *   Organizational will be used.
   *
   * **Note:** If you've attached a Plan to the Account that uses a different
   * currency to the billing currency, then you must add the relevant currency
   * conversion rate at Organization level to ensure the billing process can convert
   * line items calculated using the Plan currency into the selected billing
   * currency. If you don't add these conversion rates, then bills will fail for the
   * Account.
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
   * The number of days after the Bill generation date shown on Bills as the due
   * date.
   */
  daysBeforeBillDue?: number;

  /**
   * The DateTime when the Account was created _(in ISO 8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when the Account was last modified _(in ISO 8601 format)_.
   */
  dtLastModified?: string;

  /**
   * Contact email for the Account.
   */
  emailAddress?: string;

  /**
   * The ID of the user who last modified the Account.
   */
  lastModifiedBy?: string;

  /**
   * Name of the Account.
   */
  name?: string;

  /**
   * Parent Account ID, or null if this account does not have a parent.
   */
  parentAccountId?: string;

  /**
   * Purchase Order Number of the Account.
   *
   * Optional attribute - allows you to set a purchase order number that comes
   * through into invoicing. For example, your financial systems might require this
   * as a reference for clearing payments.
   */
  purchaseOrderNumber?: string;

  /**
   * The UUID of the statement definition used when Bill statements are generated for
   * the Account. If no statement definition is specified for the Account, the
   * statement definition specified at Organizational level is used.
   *
   * Bill statements can be used as informative backing sheets to invoices. Based on
   * the usage breakdown defined in the statement definition, generated statements
   * give a breakdown of usage charges on Account Bills, which helps customers better
   * understand usage charges incurred over the billing period.
   *
   * See
   * [Working with Bill Statements](https://www.m3ter.com/docs/guides/running-viewing-and-managing-bills/working-with-bill-statements)
   * in the m3ter documentation for more details.
   */
  statementDefinitionId?: string;
}

export namespace Account {
  /**
   * Contact address.
   */
  export interface Address {
    addressLine1?: string;

    addressLine2?: string;

    addressLine3?: string;

    addressLine4?: string;

    country?: string;

    locality?: string;

    postCode?: string;

    region?: string;
  }
}

export type AccountListResponse = unknown;

export type AccountSearchResponse = unknown;

export interface AccountCreateParams {
  /**
   * Code of the Account. This is a unique short code used for the Account.
   */
  code: string;

  /**
   * Contact email for the Account.
   */
  emailAddress: string;

  /**
   * Name of the Account.
   */
  name: string;

  /**
   * Contact address.
   */
  address?: AccountCreateParams.Address;

  /**
   * Specify whether to auto-generate statements once Bills are approved or locked.
   *
   * - **None**. Statements will not be auto-generated.
   * - **JSON**. Statements are auto-generated in JSON format.
   * - **JSON and CSV**. Statements are auto-generated in both JSON and CSV formats.
   */
  autoGenerateStatementMode?: 'NONE' | 'JSON' | 'JSON_AND_CSV';

  /**
   * Optional setting to define a _billing cycle date_, which sets the date of the
   * first Bill and acts as a reference for when in the applied billing frequency
   * period subsequent bills are created:
   *
   * - For example, if you attach a Plan to an Account where the Plan is configured
   *   for monthly billing frequency and you've defined the period the Plan will
   *   apply to the Account to be from January 1st, 2022 until January 1st, 2023. You
   *   then set a `billEpoch` date of February 15th, 2022. The first Bill will be
   *   created for the Account on February 15th, and subsequent Bills created on the
   *   15th of the months following for the remainder of the billing period - March
   *   15th, April 15th, and so on.
   * - If not defined, then the relevant Epoch date set for the billing frequency
   *   period at Organization level will be used instead.
   * - The date is in ISO-8601 format.
   */
  billEpoch?: string;

  /**
   * Configuration data for the Account Supported settings:
   *
   * - SendBillsToThirdParties ("true"/"false")
   */
  configData?: Record<string, unknown>;

  /**
   * Define the order in which any Prepayment or Balance amounts on the Account are
   * to be drawn-down against for billing. Four options:
   *
   * - `"PREPAYMENT","BALANCE"`. Draw-down against Prepayment credit before Balance
   *   credit.
   * - `"BALANCE","PREPAYMENT"`. Draw-down against Balance credit before Prepayment
   *   credit.
   * - `"PREPAYMENT"`. Only draw-down against Prepayment credit.
   * - `"BALANCE"`. Only draw-down against Balance credit.
   *
   * **NOTE:** Any setting you define here overrides the setting for credit
   * application order at Organization level.
   */
  creditApplicationOrder?: Array<'PREPAYMENT' | 'BALANCE'>;

  /**
   * Account level billing currency, such as USD or GBP. Optional attribute:
   *
   * - If you define an Account currency, this will be used for bills.
   * - If you do not define a currency, the billing currency defined at
   *   Organizational level will be used.
   *
   * **Note:** If you've attached a Plan to the Account that uses a different
   * currency to the billing currency, then you must add the relevant currency
   * conversion rate at Organization level to ensure the billing process can convert
   * line items calculated using the Plan currency into the selected billing
   * currency. If you don't add these conversion rates, then bills will fail for the
   * Account.
   */
  currency?: string;

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
   * Enter the number of days after the Bill generation date that you want to show on
   * Bills as the due date.
   *
   * **Note:** If you define `daysBeforeBillDue` at individual Account level, this
   * will take precedence over any `daysBeforeBillDue` setting defined at
   * Organization level.
   */
  daysBeforeBillDue?: number;

  /**
   * Parent Account ID, or null if this Account does not have a parent.
   */
  parentAccountId?: string;

  /**
   * Purchase Order Number of the Account.
   *
   * Optional attribute - allows you to set a purchase order number that comes
   * through into invoicing. For example, your financial systems might require this
   * as a reference for clearing payments.
   */
  purchaseOrderNumber?: string;

  /**
   * The UUID of the statement definition used when Bill statements are generated for
   * the Account. If no statement definition is specified for the Account, the
   * statement definition specified at Organizational level is used.
   *
   * Bill statements can be used as informative backing sheets to invoices. Based on
   * the usage breakdown defined in the statement definition, generated statements
   * give a breakdown of usage charges on Account Bills, which helps customers better
   * understand usage charges incurred over the billing period.
   *
   * See
   * [Working with Bill Statements](https://www.m3ter.com/docs/guides/running-viewing-and-managing-bills/working-with-bill-statements)
   * in the m3ter documentation for more details.
   */
  statementDefinitionId?: string;

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

export namespace AccountCreateParams {
  /**
   * Contact address.
   */
  export interface Address {
    addressLine1?: string;

    addressLine2?: string;

    addressLine3?: string;

    addressLine4?: string;

    country?: string;

    locality?: string;

    postCode?: string;

    region?: string;
  }
}

export interface AccountUpdateParams {
  /**
   * Code of the Account. This is a unique short code used for the Account.
   */
  code: string;

  /**
   * Contact email for the Account.
   */
  emailAddress: string;

  /**
   * Name of the Account.
   */
  name: string;

  /**
   * Contact address.
   */
  address?: AccountUpdateParams.Address;

  /**
   * Specify whether to auto-generate statements once Bills are approved or locked.
   *
   * - **None**. Statements will not be auto-generated.
   * - **JSON**. Statements are auto-generated in JSON format.
   * - **JSON and CSV**. Statements are auto-generated in both JSON and CSV formats.
   */
  autoGenerateStatementMode?: 'NONE' | 'JSON' | 'JSON_AND_CSV';

  /**
   * Optional setting to define a _billing cycle date_, which sets the date of the
   * first Bill and acts as a reference for when in the applied billing frequency
   * period subsequent bills are created:
   *
   * - For example, if you attach a Plan to an Account where the Plan is configured
   *   for monthly billing frequency and you've defined the period the Plan will
   *   apply to the Account to be from January 1st, 2022 until January 1st, 2023. You
   *   then set a `billEpoch` date of February 15th, 2022. The first Bill will be
   *   created for the Account on February 15th, and subsequent Bills created on the
   *   15th of the months following for the remainder of the billing period - March
   *   15th, April 15th, and so on.
   * - If not defined, then the relevant Epoch date set for the billing frequency
   *   period at Organization level will be used instead.
   * - The date is in ISO-8601 format.
   */
  billEpoch?: string;

  /**
   * Configuration data for the Account Supported settings:
   *
   * - SendBillsToThirdParties ("true"/"false")
   */
  configData?: Record<string, unknown>;

  /**
   * Define the order in which any Prepayment or Balance amounts on the Account are
   * to be drawn-down against for billing. Four options:
   *
   * - `"PREPAYMENT","BALANCE"`. Draw-down against Prepayment credit before Balance
   *   credit.
   * - `"BALANCE","PREPAYMENT"`. Draw-down against Balance credit before Prepayment
   *   credit.
   * - `"PREPAYMENT"`. Only draw-down against Prepayment credit.
   * - `"BALANCE"`. Only draw-down against Balance credit.
   *
   * **NOTE:** Any setting you define here overrides the setting for credit
   * application order at Organization level.
   */
  creditApplicationOrder?: Array<'PREPAYMENT' | 'BALANCE'>;

  /**
   * Account level billing currency, such as USD or GBP. Optional attribute:
   *
   * - If you define an Account currency, this will be used for bills.
   * - If you do not define a currency, the billing currency defined at
   *   Organizational level will be used.
   *
   * **Note:** If you've attached a Plan to the Account that uses a different
   * currency to the billing currency, then you must add the relevant currency
   * conversion rate at Organization level to ensure the billing process can convert
   * line items calculated using the Plan currency into the selected billing
   * currency. If you don't add these conversion rates, then bills will fail for the
   * Account.
   */
  currency?: string;

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
   * Enter the number of days after the Bill generation date that you want to show on
   * Bills as the due date.
   *
   * **Note:** If you define `daysBeforeBillDue` at individual Account level, this
   * will take precedence over any `daysBeforeBillDue` setting defined at
   * Organization level.
   */
  daysBeforeBillDue?: number;

  /**
   * Parent Account ID, or null if this Account does not have a parent.
   */
  parentAccountId?: string;

  /**
   * Purchase Order Number of the Account.
   *
   * Optional attribute - allows you to set a purchase order number that comes
   * through into invoicing. For example, your financial systems might require this
   * as a reference for clearing payments.
   */
  purchaseOrderNumber?: string;

  /**
   * The UUID of the statement definition used when Bill statements are generated for
   * the Account. If no statement definition is specified for the Account, the
   * statement definition specified at Organizational level is used.
   *
   * Bill statements can be used as informative backing sheets to invoices. Based on
   * the usage breakdown defined in the statement definition, generated statements
   * give a breakdown of usage charges on Account Bills, which helps customers better
   * understand usage charges incurred over the billing period.
   *
   * See
   * [Working with Bill Statements](https://www.m3ter.com/docs/guides/running-viewing-and-managing-bills/working-with-bill-statements)
   * in the m3ter documentation for more details.
   */
  statementDefinitionId?: string;

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

export namespace AccountUpdateParams {
  /**
   * Contact address.
   */
  export interface Address {
    addressLine1?: string;

    addressLine2?: string;

    addressLine3?: string;

    addressLine4?: string;

    country?: string;

    locality?: string;

    postCode?: string;

    region?: string;
  }
}

export interface AccountListParams {
  /**
   * List of Account Codes to retrieve. These are unique short codes for each
   * Account.
   */
  codes?: Array<string>;

  /**
   * List of Account IDs to retrieve.
   */
  ids?: Array<string>;

  /**
   * `nextToken` for multi-page retrievals.
   */
  nextToken?: string;

  /**
   * Number of accounts to retrieve per page.
   */
  pageSize?: number;
}

export interface AccountListChildrenParams {
  nextToken?: string | null;

  pageSize?: number | null;
}

export interface AccountSearchParams {
  /**
   * fromDocument for multi page retrievals
   */
  fromDocument?: number;

  /**
   * Search Operator to be used while querying search
   */
  operator?: 'AND' | 'OR';

  /**
   * Number of Accounts to retrieve per page
   */
  pageSize?: number;

  /**
   * Query for data using special syntax. Query parameters should be delimited using
   * $ Allowed comparators are > (greater than), >= (grater or equal than), :
   * (equal), < (less than), <= (less than or equal), ~ (contains). Allowed
   * parameters: name, code, currency, purchaseOrderNumber, parentAccountId, codes,
   * id, createdBy, dtCreated, lastModifiedBy, ids.Query example:
   * searchQuery=name~test$currency:USD. This query is translated into: find accounts
   * that name contains 'test' AND currency is USD.
   */
  searchQuery?: string;

  /**
   * Name of the parameter on which sorting is performed
   */
  sortBy?: string;

  /**
   * Sorting order
   */
  sortOrder?: 'ASC' | 'DESC';
}

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountListResponse as AccountListResponse,
    type AccountSearchResponse as AccountSearchResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountListChildrenParams as AccountListChildrenParams,
    type AccountSearchParams as AccountSearchParams,
  };
}
