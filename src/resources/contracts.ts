// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class Contracts extends APIResource {
  /**
   * Create a new Contract.
   *
   * Creates a new Contract for the specified Account. The Contract includes
   * information such as the associated Account along with start and end dates.
   */
  create(
    orgId: string,
    body: ContractCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Contract> {
    return this._client.post(`/organizations/${orgId}/contracts`, { body, ...options });
  }

  /**
   * Retrieves the Contract with the given UUID. Used to obtain the details of a
   * Contract.
   */
  retrieve(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Contract> {
    return this._client.get(`/organizations/${orgId}/contracts/${id}`, options);
  }

  /**
   * Update the Contract with the given UUID.
   *
   * This endpoint updates the details of the Contract with the specified ID. Used to
   * modify details of an existing Contract such as the start or end dates.
   *
   * **Note:** If you have created Custom Fields for a Contract, when you use this
   * endpoint to update the Contract use the `customFields` parameter to preserve
   * those Custom Fields. If you omit them from the update request, they will be
   * lost.
   */
  update(
    orgId: string,
    id: string,
    body: ContractUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Contract> {
    return this._client.put(`/organizations/${orgId}/contracts/${id}`, { body, ...options });
  }

  /**
   * Retrieves a list of Contracts by Organization ID. Supports pagination and
   * includes various query parameters to filter the Contracts returned based on
   * Contract IDs or short codes.
   */
  list(
    orgId: string,
    query?: ContractListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ContractsCursor, Contract>;
  list(orgId: string, options?: Core.RequestOptions): Core.PagePromise<ContractsCursor, Contract>;
  list(
    orgId: string,
    query: ContractListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ContractsCursor, Contract> {
    if (isRequestOptions(query)) {
      return this.list(orgId, {}, query);
    }
    return this._client.getAPIList(`/organizations/${orgId}/contracts`, ContractsCursor, {
      query,
      ...options,
    });
  }

  /**
   * Deletes the Contract with the specified UUID. Used to remove an existing
   * Contract from an Account.
   *
   * **Note:** This call will fail if there are any AccountPlans or Commitments that
   * have been added to the Contract.
   */
  delete(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Contract> {
    return this._client.delete(`/organizations/${orgId}/contracts/${id}`, options);
  }
}

export class ContractsCursor extends Cursor<Contract> {}

export interface Contract {
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
   * The unique identifier (UUID) of the Account associated with this Contract.
   */
  accountId?: string;

  /**
   * The short code of the Contract.
   */
  code?: string;

  /**
   * The unique identifier (UUID) of the user who created this Contract.
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
   * The description of the Contract, which provides context and information.
   */
  description?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the Contract was created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the Contract was last modified.
   */
  dtLastModified?: string;

  /**
   * The exclusive end date of the Contract _(in ISO-8601 format)_. This means the
   * Contract is active until midnight on the day **_before_** this date.
   */
  endDate?: string;

  /**
   * The unique identifier (UUID) of the user who last modified this Contract.
   */
  lastModifiedBy?: string;

  /**
   * The name of the Contract.
   */
  name?: string;

  /**
   * The Purchase Order Number associated with the Contract.
   */
  purchaseOrderNumber?: string;

  /**
   * The start date for the Contract _(in ISO-8601 format)_. This date is inclusive,
   * meaning the Contract is active from this date onward.
   */
  startDate?: string;
}

export interface ContractCreateParams {
  /**
   * The unique identifier (UUID) of the Account associated with this Contract.
   */
  accountId: string;

  /**
   * The exclusive end date of the Contract _(in ISO-8601 format)_. This means the
   * Contract is active until midnight on the day **_before_** this date.
   */
  endDate: string;

  /**
   * The name of the Contract.
   */
  name: string;

  /**
   * The start date for the Contract _(in ISO-8601 format)_. This date is inclusive,
   * meaning the Contract is active from this date onward.
   */
  startDate: string;

  /**
   * The short code of the Contract.
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
   * The description of the Contract, which provides context and information.
   */
  description?: string;

  /**
   * The Purchase Order Number associated with the Contract.
   */
  purchaseOrderNumber?: string;

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

export interface ContractUpdateParams {
  /**
   * The unique identifier (UUID) of the Account associated with this Contract.
   */
  accountId: string;

  /**
   * The exclusive end date of the Contract _(in ISO-8601 format)_. This means the
   * Contract is active until midnight on the day **_before_** this date.
   */
  endDate: string;

  /**
   * The name of the Contract.
   */
  name: string;

  /**
   * The start date for the Contract _(in ISO-8601 format)_. This date is inclusive,
   * meaning the Contract is active from this date onward.
   */
  startDate: string;

  /**
   * The short code of the Contract.
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
   * The description of the Contract, which provides context and information.
   */
  description?: string;

  /**
   * The Purchase Order Number associated with the Contract.
   */
  purchaseOrderNumber?: string;

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

export interface ContractListParams extends CursorParams {
  accountId?: string | null;

  /**
   * An optional parameter to retrieve specific Contracts based on their short codes.
   */
  codes?: Array<string>;

  /**
   * An optional parameter to filter the list based on specific Contract unique
   * identifiers (UUIDs).
   */
  ids?: Array<string>;
}

Contracts.ContractsCursor = ContractsCursor;

export declare namespace Contracts {
  export {
    type Contract as Contract,
    ContractsCursor as ContractsCursor,
    type ContractCreateParams as ContractCreateParams,
    type ContractUpdateParams as ContractUpdateParams,
    type ContractListParams as ContractListParams,
  };
}
