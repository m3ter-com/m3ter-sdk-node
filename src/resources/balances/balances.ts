// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as TransactionsAPI from './transactions';
import {
  TransactionCreateParams,
  TransactionListParams,
  TransactionResponse,
  TransactionResponsesCursor,
  TransactionSummaryParams,
  TransactionSummaryResponse,
  Transactions,
} from './transactions';
import { Cursor, type CursorParams } from '../../pagination';

export class Balances extends APIResource {
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);

  /**
   * Create a new Balance for the given end customer Account.
   *
   * This endpoint allows you to create a new Balance for a specific end customer
   * Account. The Balance details should be provided in the request body.
   */
  create(params: BalanceCreateParams, options?: Core.RequestOptions): Core.APIPromise<Balance> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/balances`, { body, ...options });
  }

  /**
   * Retrieve a specific Balance.
   *
   * This endpoint returns the details of the specified Balance.
   */
  retrieve(
    id: string,
    params?: BalanceRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Balance>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Balance>;
  retrieve(
    id: string,
    params: BalanceRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Balance> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/balances/${id}`, options);
  }

  /**
   * Update a specific Balance.
   *
   * This endpoint allows you to update the details of a specific Balance. The
   * updated Balance details should be provided in the request body.
   */
  update(id: string, params: BalanceUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Balance> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/balances/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of all Balances for your Organization.
   *
   * This endpoint returns a list of all Balances associated with your organization.
   * You can filter the Balances by the end customer's Account UUID and end dates,
   * and paginate through them using the `pageSize` and `nextToken` parameters.
   */
  list(params?: BalanceListParams, options?: Core.RequestOptions): Core.PagePromise<BalancesCursor, Balance>;
  list(options?: Core.RequestOptions): Core.PagePromise<BalancesCursor, Balance>;
  list(
    params: BalanceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<BalancesCursor, Balance> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(`/organizations/${orgId}/balances`, BalancesCursor, { query, ...options });
  }

  /**
   * Delete a specific Balance.
   *
   * This endpoint allows you to delete a specific Balance with the given UUID.
   */
  delete(id: string, params?: BalanceDeleteParams, options?: Core.RequestOptions): Core.APIPromise<Balance>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<Balance>;
  delete(
    id: string,
    params: BalanceDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Balance> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/balances/${id}`, options);
  }
}

export class BalancesCursor extends Cursor<Balance> {}

export interface Balance {
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
   * The unique identifier (UUID) for the end customer Account the Balance belongs
   * to.
   */
  accountId?: string;

  /**
   * The financial value that the Balance holds.
   */
  amount?: number;

  /**
   * A description for the bill line items for charges drawn-down against the
   * Balance.
   */
  balanceDrawDownDescription?: string;

  /**
   * A unique short code assigned to the Balance.
   */
  code?: string;

  consumptionsAccountingProductId?: string;

  /**
   * The unique identifier (UUID) for the user who created the Balance.
   */
  createdBy?: string;

  /**
   * The currency code used for the Balance amount. For example: USD, GBP or EUR.
   */
  currency?: string;

  /**
   * A description of the Balance.
   */
  description?: string;

  /**
   * The date and time _(in ISO 8601 format)_ when the Balance was first created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO 8601 format)_ when the Balance was last modified.
   */
  dtLastModified?: string;

  /**
   * The date _(in ISO 8601 format)_ after which the Balance will no longer be
   * active.
   */
  endDate?: string;

  feesAccountingProductId?: string;

  /**
   * The unique identifier (UUID) for the user who last modified the Balance.
   */
  lastModifiedBy?: string;

  /**
   * A list of line item charge types that can draw-down against the Balance amount
   * at billing.
   */
  lineItemTypes?: Array<
    | 'STANDING_CHARGE'
    | 'USAGE'
    | 'MINIMUM_SPEND'
    | 'COUNTER_RUNNING_TOTAL_CHARGE'
    | 'COUNTER_ADJUSTMENT_DEBIT'
  >;

  /**
   * The official name of the Balance.
   */
  name?: string;

  /**
   * A description for overage charges.
   */
  overageDescription?: string;

  /**
   * The percentage surcharge applied to overage charges _(usage above the Balance)_.
   */
  overageSurchargePercent?: number;

  /**
   * A list of Product IDs whose consumption charges due at billing can be drawn-down
   * against the Balance amount.
   */
  productIds?: Array<string>;

  /**
   * The maximum amount that can be carried over past the Balance end date and
   * draw-down against for billing if there is an unused Balance amount remaining
   * when the Balance end date is reached.
   */
  rolloverAmount?: number;

  /**
   * The end date _(in ISO 8601 format)_ for the rollover grace period, which is the
   * period that unused Balance amounts can be carried over beyond the specified
   * Balance `endDate` and continue to be drawn-down against for billing.
   */
  rolloverEndDate?: string;

  /**
   * The date _(in ISO 8601 format)_ when the Balance becomes active.
   */
  startDate?: string;
}

export interface BalanceCreateParams {
  /**
   * Path param: The unique identifier (UUID) for your Organization. The Organization
   * represents your company as a direct customer of our service.
   */
  orgId?: string;

  /**
   * Body param: The unique identifier (UUID) for the end customer Account.
   */
  accountId: string;

  /**
   * Body param: The currency code used for the Balance amount. For example: USD, GBP
   * or EUR.
   */
  currency: string;

  /**
   * Body param: The date _(in ISO 8601 format)_ after which the Balance will no
   * longer be active for the Account.
   *
   * **Note:** You can use the `rolloverEndDate` request parameter to define an
   * extended grace period for continued draw-down against the Balance if any amount
   * remains when the specified `endDate` is reached.
   */
  endDate: string;

  /**
   * Body param: The date _(in ISO 8601 format)_ when the Balance becomes active.
   */
  startDate: string;

  /**
   * Body param: A description for the bill line items for draw-down charges against
   * the Balance. _(Optional)._
   */
  balanceDrawDownDescription?: string;

  /**
   * Body param: Unique short code for the Balance.
   */
  code?: string;

  /**
   * Body param: Optional Product ID this Balance Consumptions should be attributed
   * to for accounting purposes
   */
  consumptionsAccountingProductId?: string;

  /**
   * Body param: A description of the Balance.
   */
  description?: string;

  /**
   * Body param: Optional Product ID this Balance Fees should be attributed to for
   * accounting purposes
   */
  feesAccountingProductId?: string;

  /**
   * Body param: Specify the line item charge types that can draw-down at billing
   * against the Balance amount. Options are:
   *
   * - `"MINIMUM_SPEND"`
   * - `"STANDING_CHARGE"`
   * - `"USAGE"`
   * - `"COUNTER_RUNNING_TOTAL_CHARGE"`
   * - `"COUNTER_ADJUSTMENT_DEBIT"`
   *
   * **NOTE:** If no charge types are specified, by default _all types_ can draw-down
   * against the Balance amount at billing.
   */
  lineItemTypes?: Array<
    | 'STANDING_CHARGE'
    | 'USAGE'
    | 'MINIMUM_SPEND'
    | 'COUNTER_RUNNING_TOTAL_CHARGE'
    | 'COUNTER_ADJUSTMENT_DEBIT'
  >;

  /**
   * Body param: The official name for the Balance.
   */
  name?: string;

  /**
   * Body param: A description for Bill line items overage charges.
   */
  overageDescription?: string;

  /**
   * Body param: Define a surcharge level, as a percentage of regular usage rating,
   * applied to overages _(usage charges that exceed the Balance amount)_. For
   * example, if the regular usage rate is $10 per unit of usage consumed and
   * `overageSurchargePercent` is set at 10%, then any usage charged above the
   * original Balance amount is charged at $11 per unit of usage.
   */
  overageSurchargePercent?: number;

  /**
   * Body param: Specify the Products whose consumption charges due at billing can be
   * drawn-down against the Balance amount.
   *
   * **Note:** If you don't specify any Products for Balance draw-down, by default
   * the consumption charges for any Product the Account consumes will be drawn-down
   * against the Balance amount.
   */
  productIds?: Array<string>;

  /**
   * Body param: The maximum amount that can be carried over past the Balance end
   * date for draw-down at billing if there is any unused Balance amount when the end
   * date is reached. Works with `rolloverEndDate` to define the amount and duration
   * of a Balance "grace period". _(Optional)_
   *
   * **Notes:**
   *
   * - If you leave `rolloverAmount` empty and only enter a `rolloverEndDate`, any
   *   amount left over after the Balance end date is reached will be drawn-down
   *   against up to the specified `rolloverEndDate`.
   * - You must enter a `rolloverEndDate`. If you only enter a `rolloverAmount`
   *   without entering a `rolloverEndDate`, you'll receive an error when trying to
   *   create or update the Balance.
   * - If you don't want to grant any grace period for outstanding Balance amounts,
   *   then do not use `rolloverAmount` and `rolloverEndDate`.
   */
  rolloverAmount?: number;

  /**
   * Body param: The end date _(in ISO 8601 format)_ for the grace period during
   * which unused Balance amounts can be carried over and drawn-down against at
   * billing.
   *
   * **Note:** Use `rolloverAmount` if you want to specify a maximum amount that can
   * be carried over and made available for draw-down.
   */
  rolloverEndDate?: string;

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

export interface BalanceRetrieveParams {
  /**
   * The unique identifier (UUID) for your Organization. The Organization represents
   * your company as a direct customer of our service.
   */
  orgId?: string;
}

export interface BalanceUpdateParams {
  /**
   * Path param: The unique identifier (UUID) for your Organization. The Organization
   * represents your company as a direct customer of our service.
   */
  orgId?: string;

  /**
   * Body param: The unique identifier (UUID) for the end customer Account.
   */
  accountId: string;

  /**
   * Body param: The currency code used for the Balance amount. For example: USD, GBP
   * or EUR.
   */
  currency: string;

  /**
   * Body param: The date _(in ISO 8601 format)_ after which the Balance will no
   * longer be active for the Account.
   *
   * **Note:** You can use the `rolloverEndDate` request parameter to define an
   * extended grace period for continued draw-down against the Balance if any amount
   * remains when the specified `endDate` is reached.
   */
  endDate: string;

  /**
   * Body param: The date _(in ISO 8601 format)_ when the Balance becomes active.
   */
  startDate: string;

  /**
   * Body param: A description for the bill line items for draw-down charges against
   * the Balance. _(Optional)._
   */
  balanceDrawDownDescription?: string;

  /**
   * Body param: Unique short code for the Balance.
   */
  code?: string;

  /**
   * Body param: Optional Product ID this Balance Consumptions should be attributed
   * to for accounting purposes
   */
  consumptionsAccountingProductId?: string;

  /**
   * Body param: A description of the Balance.
   */
  description?: string;

  /**
   * Body param: Optional Product ID this Balance Fees should be attributed to for
   * accounting purposes
   */
  feesAccountingProductId?: string;

  /**
   * Body param: Specify the line item charge types that can draw-down at billing
   * against the Balance amount. Options are:
   *
   * - `"MINIMUM_SPEND"`
   * - `"STANDING_CHARGE"`
   * - `"USAGE"`
   * - `"COUNTER_RUNNING_TOTAL_CHARGE"`
   * - `"COUNTER_ADJUSTMENT_DEBIT"`
   *
   * **NOTE:** If no charge types are specified, by default _all types_ can draw-down
   * against the Balance amount at billing.
   */
  lineItemTypes?: Array<
    | 'STANDING_CHARGE'
    | 'USAGE'
    | 'MINIMUM_SPEND'
    | 'COUNTER_RUNNING_TOTAL_CHARGE'
    | 'COUNTER_ADJUSTMENT_DEBIT'
  >;

  /**
   * Body param: The official name for the Balance.
   */
  name?: string;

  /**
   * Body param: A description for Bill line items overage charges.
   */
  overageDescription?: string;

  /**
   * Body param: Define a surcharge level, as a percentage of regular usage rating,
   * applied to overages _(usage charges that exceed the Balance amount)_. For
   * example, if the regular usage rate is $10 per unit of usage consumed and
   * `overageSurchargePercent` is set at 10%, then any usage charged above the
   * original Balance amount is charged at $11 per unit of usage.
   */
  overageSurchargePercent?: number;

  /**
   * Body param: Specify the Products whose consumption charges due at billing can be
   * drawn-down against the Balance amount.
   *
   * **Note:** If you don't specify any Products for Balance draw-down, by default
   * the consumption charges for any Product the Account consumes will be drawn-down
   * against the Balance amount.
   */
  productIds?: Array<string>;

  /**
   * Body param: The maximum amount that can be carried over past the Balance end
   * date for draw-down at billing if there is any unused Balance amount when the end
   * date is reached. Works with `rolloverEndDate` to define the amount and duration
   * of a Balance "grace period". _(Optional)_
   *
   * **Notes:**
   *
   * - If you leave `rolloverAmount` empty and only enter a `rolloverEndDate`, any
   *   amount left over after the Balance end date is reached will be drawn-down
   *   against up to the specified `rolloverEndDate`.
   * - You must enter a `rolloverEndDate`. If you only enter a `rolloverAmount`
   *   without entering a `rolloverEndDate`, you'll receive an error when trying to
   *   create or update the Balance.
   * - If you don't want to grant any grace period for outstanding Balance amounts,
   *   then do not use `rolloverAmount` and `rolloverEndDate`.
   */
  rolloverAmount?: number;

  /**
   * Body param: The end date _(in ISO 8601 format)_ for the grace period during
   * which unused Balance amounts can be carried over and drawn-down against at
   * billing.
   *
   * **Note:** Use `rolloverAmount` if you want to specify a maximum amount that can
   * be carried over and made available for draw-down.
   */
  rolloverEndDate?: string;

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

export interface BalanceListParams extends CursorParams {
  /**
   * Path param: The unique identifier (UUID) for your organization. The Organization
   * represents your company as a direct customer of our service.
   */
  orgId?: string;

  /**
   * Query param: The unique identifier (UUID) for the end customer's account.
   */
  accountId?: string;

  /**
   * Query param: Only include Balances with end dates earlier than this date.
   */
  endDateEnd?: string;

  /**
   * Query param: Only include Balances with end dates equal to or later than this
   * date.
   */
  endDateStart?: string;
}

export interface BalanceDeleteParams {
  /**
   * The unique identifier (UUID) for your Organization. The Organization represents
   * your company as a direct customer of our service.
   */
  orgId?: string;
}

Balances.BalancesCursor = BalancesCursor;
Balances.Transactions = Transactions;
Balances.TransactionResponsesCursor = TransactionResponsesCursor;

export declare namespace Balances {
  export {
    type Balance as Balance,
    BalancesCursor as BalancesCursor,
    type BalanceCreateParams as BalanceCreateParams,
    type BalanceRetrieveParams as BalanceRetrieveParams,
    type BalanceUpdateParams as BalanceUpdateParams,
    type BalanceListParams as BalanceListParams,
    type BalanceDeleteParams as BalanceDeleteParams,
  };

  export {
    Transactions as Transactions,
    type TransactionResponse as TransactionResponse,
    type TransactionSummaryResponse as TransactionSummaryResponse,
    TransactionResponsesCursor as TransactionResponsesCursor,
    type TransactionCreateParams as TransactionCreateParams,
    type TransactionListParams as TransactionListParams,
    type TransactionSummaryParams as TransactionSummaryParams,
  };
}
