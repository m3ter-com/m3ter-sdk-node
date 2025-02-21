// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { Cursor, type CursorParams } from '../../pagination';

export class Transactions extends APIResource {
  /**
   * Add a Transaction to a Balance. This endpoint allows you to create a new
   * Transaction amount for a Balance. This amount then becomes available at billing
   * for draw-down to cover charges due. The Transaction details should be provided
   * in the request body.
   *
   * Before you can add a Transaction amount, you must first set up Transaction Types
   * at the Organization Level - see the
   * [Transaction Type](https://www.m3ter.com/docs/api#tag/TransactionType) section
   * in this API Reference for more details. You can then use this call to add an
   * instance of a Transaction Type to a Balance.
   *
   * **Note:** If you have a customer whose payment is in a different currency to the
   * Balance currency, you can use the `paid` and `paidCurrency` request parameters
   * to record the amount paid and alternative currency respectively. For example,
   * you might add a Transaction amount of 200 USD to a Balance on a customer Account
   * where the customer actually paid you 50 units in virtual currency X.
   */
  create(
    balanceId: string,
    params: TransactionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Transaction> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/balances/${balanceId}/transactions`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve all Transactions for a specific Balance.
   *
   * This endpoint returns a list of all Transactions associated with a specific
   * Balance. You can paginate through the Transactions by using the `pageSize` and
   * `nextToken` parameters.
   */
  list(
    balanceId: string,
    params?: TransactionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransactionsCursor, Transaction>;
  list(balanceId: string, options?: Core.RequestOptions): Core.PagePromise<TransactionsCursor, Transaction>;
  list(
    balanceId: string,
    params: TransactionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransactionsCursor, Transaction> {
    if (isRequestOptions(params)) {
      return this.list(balanceId, {}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/balances/${balanceId}/transactions`,
      TransactionsCursor,
      { query, ...options },
    );
  }
}

export class TransactionsCursor extends Cursor<Transaction> {}

export interface Transaction {
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
   * The financial value of the transaction, as recorded in the balance.
   */
  amount?: number;

  /**
   * The date _(in ISO 8601 format)_ when the balance transaction was applied, i.e.,
   * when the balance was affected.
   */
  appliedDate?: string;

  /**
   * The unique identifier (UUID) for the user who created the balance transaction.
   */
  createdBy?: string;

  /**
   * The currency code such as USD, GBP, EUR of the payment, if it differs from the
   * balance currency.
   */
  currencyPaid?: string;

  /**
   * A brief description explaining the purpose or context of the transaction.
   */
  description?: string;

  /**
   * The date and time _(in ISO 8601 format)_ when the balance transaction was first
   * created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO 8601 format)_ when the balance transaction was last
   * modified.
   */
  dtLastModified?: string;

  /**
   * The unique identifier (UUID) for the entity associated with the Transaction, as
   * specified by the `entityType`.
   */
  entityId?: string;

  /**
   * The type of entity associated with the Transaction - identifies who or what was
   * responsible for the Transaction being added to the Balance - such as a **User**,
   * a **Service User**, or a **Bill**.
   */
  entityType?: 'BILL' | 'COMMITMENT' | 'USER' | 'SERVICE_USER';

  /**
   * The unique identifier (UUID) for the user who last modified the balance
   * transaction.
   */
  lastModifiedBy?: string;

  /**
   * The actual payment amount if the payment currency differs from the Balance
   * currency.
   */
  paid?: number;

  /**
   * The date _(in ISO 8601 format)_ when the transaction was recorded in the system.
   */
  transactionDate?: string;

  /**
   * The unique identifier (UUID) for the Transaction type. This is obtained from the
   * list of created Transaction Types within the Organization Configuration.
   */
  transactionTypeId?: string;
}

export interface TransactionCreateParams {
  /**
   * Path param: The unique identifier (UUID) for your Organization. The Organization
   * represents your company as a direct customer of our service.
   */
  orgId?: string;

  /**
   * Body param: The financial value of the transaction.
   */
  amount: number;

  /**
   * Body param: The date _(in ISO 8601 format)_ when the Balance transaction was
   * applied.
   */
  appliedDate?: string;

  /**
   * Body param: The currency code of the payment if it differs from the Balance
   * currency. For example: USD, GBP or EUR.
   */
  currencyPaid?: string;

  /**
   * Body param: A brief description explaining the purpose and context of the
   * transaction.
   */
  description?: string;

  /**
   * Body param: The payment amount if the payment currency differs from the Balance
   * currency.
   */
  paid?: number;

  /**
   * Body param: The date _(in ISO 8601 format)_ when the transaction occurred.
   */
  transactionDate?: string;

  /**
   * Body param: The unique identifier (UUID) of the transaction type. This is
   * obtained from the list of created Transaction Types within the Organization
   * Configuration.
   */
  transactionTypeId?: string;

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

export interface TransactionListParams extends CursorParams {
  /**
   * Path param: The unique identifier (UUID) for your Organization. The Organization
   * represents your company as a direct customer of our service.
   */
  orgId?: string;

  /**
   * Query param:
   */
  transactionTypeId?: string | null;
}

Transactions.TransactionsCursor = TransactionsCursor;

export declare namespace Transactions {
  export {
    type Transaction as Transaction,
    TransactionsCursor as TransactionsCursor,
    type TransactionCreateParams as TransactionCreateParams,
    type TransactionListParams as TransactionListParams,
  };
}
