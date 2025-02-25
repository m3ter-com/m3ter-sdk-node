// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class ScheduledEventConfigurations extends APIResource {
  /**
   * Create a new ScheduledEventConfiguration.
   */
  create(
    params: ScheduledEventConfigurationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduledEventConfiguration> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/scheduledevents/configurations`, { body, ...options });
  }

  /**
   * Retrieve a ScheduledEventConfiguration for the given UUID.
   */
  retrieve(
    id: string,
    params?: ScheduledEventConfigurationRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduledEventConfiguration>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ScheduledEventConfiguration>;
  retrieve(
    id: string,
    params: ScheduledEventConfigurationRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduledEventConfiguration> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/scheduledevents/configurations/${id}`, options);
  }

  /**
   * Update a ScheduledEventConfiguration for the given UUID.
   */
  update(
    id: string,
    params: ScheduledEventConfigurationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduledEventConfiguration> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/scheduledevents/configurations/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve a list of ScheduledEventConfiguration entities
   */
  list(
    params?: ScheduledEventConfigurationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ScheduledEventConfigurationsCursor, ScheduledEventConfiguration>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<ScheduledEventConfigurationsCursor, ScheduledEventConfiguration>;
  list(
    params: ScheduledEventConfigurationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ScheduledEventConfigurationsCursor, ScheduledEventConfiguration> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/scheduledevents/configurations`,
      ScheduledEventConfigurationsCursor,
      { query, ...options },
    );
  }

  /**
   * Delete the ScheduledEventConfiguration for the given UUID.
   */
  delete(
    id: string,
    params?: ScheduledEventConfigurationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduledEventConfiguration>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<ScheduledEventConfiguration>;
  delete(
    id: string,
    params: ScheduledEventConfigurationDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduledEventConfiguration> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/scheduledevents/configurations/${id}`, options);
  }
}

export class ScheduledEventConfigurationsCursor extends Cursor<ScheduledEventConfiguration> {}

export interface ScheduledEventConfiguration {
  /**
   * The UUID of the entity.
   */
  id: string;

  /**
   * The referenced configuration or billing entity for which the desired scheduled
   * Event will trigger.
   */
  entity: string;

  /**
   * A DateTime field for which the desired scheduled Event will trigger - this must
   * be a DateTime field on the referenced billing or configuration entity.
   */
  field: string;

  /**
   * The name of the custom Scheduled Event Configuration.
   */
  name: string;

  /**
   * The offset in days from the specified DateTime field on the referenced entity
   * when the scheduled Event will trigger.
   */
  offset: number;

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
   * The ID of the user who created this item.
   */
  createdBy?: string;

  /**
   * The DateTime when this item was created _(in ISO-8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when this item was last modified _(in ISO-8601 format)_.
   */
  dtLastModified?: string;

  /**
   * The ID of the user who last modified this item.
   */
  lastModifiedBy?: string;
}

export interface ScheduledEventConfigurationCreateParams {
  /**
   * Path param: UUID of the organization
   */
  orgId?: string;

  /**
   * Body param: The referenced configuration or billing entity for which the desired
   * scheduled Event will trigger.
   */
  entity: string;

  /**
   * Body param: A DateTime field for which the desired scheduled Event will
   * trigger - this must be a DateTime field on the referenced billing or
   * configuration entity.
   */
  field: string;

  /**
   * Body param: The name of the custom Scheduled Event Configuration.
   *
   * This must be in the format:
   *
   * - scheduled._name of entity_._custom event name_
   *
   * For example:
   *
   * - `scheduled.bill.endDateEvent`
   */
  name: string;

  /**
   * Body param: The offset in days from the specified DateTime field on the
   * referenced entity when the scheduled Event will trigger.
   */
  offset: number;

  /**
   * Body param: The version number of the scheduled event configuration:
   *
   * - **Create entity**: Not valid for initial insertion - do not use for Create. On
   *   initial Create, version is set at 1 and listed in the response.
   * - **Update Entity**: On Update, version is required and must match the existing
   *   version because a check is performed to ensure sequential versioning is
   *   preserved. Version is incremented by 1 and listed in the response.
   */
  version?: number;
}

export interface ScheduledEventConfigurationRetrieveParams {
  /**
   * UUID of the organization
   */
  orgId?: string;
}

export interface ScheduledEventConfigurationUpdateParams {
  /**
   * Path param: UUID of the organization
   */
  orgId?: string;

  /**
   * Body param: The referenced configuration or billing entity for which the desired
   * scheduled Event will trigger.
   */
  entity: string;

  /**
   * Body param: A DateTime field for which the desired scheduled Event will
   * trigger - this must be a DateTime field on the referenced billing or
   * configuration entity.
   */
  field: string;

  /**
   * Body param: The name of the custom Scheduled Event Configuration.
   *
   * This must be in the format:
   *
   * - scheduled._name of entity_._custom event name_
   *
   * For example:
   *
   * - `scheduled.bill.endDateEvent`
   */
  name: string;

  /**
   * Body param: The offset in days from the specified DateTime field on the
   * referenced entity when the scheduled Event will trigger.
   */
  offset: number;

  /**
   * Body param: The version number of the scheduled event configuration:
   *
   * - **Create entity**: Not valid for initial insertion - do not use for Create. On
   *   initial Create, version is set at 1 and listed in the response.
   * - **Update Entity**: On Update, version is required and must match the existing
   *   version because a check is performed to ensure sequential versioning is
   *   preserved. Version is incremented by 1 and listed in the response.
   */
  version?: number;
}

export interface ScheduledEventConfigurationListParams extends CursorParams {
  /**
   * Path param: UUID of the organization
   */
  orgId?: string;

  /**
   * Query param: list of UUIDs to retrieve
   */
  ids?: Array<string>;
}

export interface ScheduledEventConfigurationDeleteParams {
  /**
   * UUID of the organization
   */
  orgId?: string;
}

ScheduledEventConfigurations.ScheduledEventConfigurationsCursor = ScheduledEventConfigurationsCursor;

export declare namespace ScheduledEventConfigurations {
  export {
    type ScheduledEventConfiguration as ScheduledEventConfiguration,
    ScheduledEventConfigurationsCursor as ScheduledEventConfigurationsCursor,
    type ScheduledEventConfigurationCreateParams as ScheduledEventConfigurationCreateParams,
    type ScheduledEventConfigurationRetrieveParams as ScheduledEventConfigurationRetrieveParams,
    type ScheduledEventConfigurationUpdateParams as ScheduledEventConfigurationUpdateParams,
    type ScheduledEventConfigurationListParams as ScheduledEventConfigurationListParams,
    type ScheduledEventConfigurationDeleteParams as ScheduledEventConfigurationDeleteParams,
  };
}
