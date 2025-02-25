// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class Webhooks extends APIResource {
  /**
   * This endpoint creates a new webhook destination. A webhook destination is a URL
   * where webhook payloads will be sent.
   */
  create(params: WebhookCreateParams, options?: Core.RequestOptions): Core.APIPromise<WebhookCreateResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/integrationdestinations/webhooks`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve the webhook Destination for the UUID.
   */
  retrieve(
    id: string,
    params?: WebhookRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Webhook>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Webhook>;
  retrieve(
    id: string,
    params: WebhookRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Webhook> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/integrationdestinations/webhooks/${id}`, options);
  }

  /**
   * Update a destination to be used for a webhook.
   */
  update(
    id: string,
    params: WebhookUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookUpdateResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/integrationdestinations/webhooks/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve a list of all Destinations created in the Organization.
   */
  list(params?: WebhookListParams, options?: Core.RequestOptions): Core.PagePromise<WebhooksCursor, Webhook>;
  list(options?: Core.RequestOptions): Core.PagePromise<WebhooksCursor, Webhook>;
  list(
    params: WebhookListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<WebhooksCursor, Webhook> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/integrationdestinations/webhooks`,
      WebhooksCursor,
      { query, ...options },
    );
  }

  /**
   * This endpoint deletes a specific webhook destination identified by its UUID.
   */
  delete(id: string, params?: WebhookDeleteParams, options?: Core.RequestOptions): Core.APIPromise<Webhook>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<Webhook>;
  delete(
    id: string,
    params: WebhookDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Webhook> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/integrationdestinations/webhooks/${id}`, options);
  }

  /**
   * Set the `active` status on a webhook integration destination.
   *
   * Use this endpoint to activate or deactivate a webhook integration destination.
   * It toggles the `active` status of the specific wehbook destination with the
   * given ID.
   */
  setActive(
    id: string,
    params?: WebhookSetActiveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookSetActiveResponse>;
  setActive(id: string, options?: Core.RequestOptions): Core.APIPromise<WebhookSetActiveResponse>;
  setActive(
    id: string,
    params: WebhookSetActiveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookSetActiveResponse> {
    if (isRequestOptions(params)) {
      return this.setActive(id, {}, params);
    }
    const { orgId = this._client.orgId, active } = params;
    return this._client.put(`/organizations/${orgId}/integrationdestinations/webhooks/${id}/active`, {
      query: { active },
      ...options,
    });
  }
}

export class WebhooksCursor extends Cursor<Webhook> {}

export interface Webhook {
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

  active?: boolean;

  code?: string;

  /**
   * The ID of the user who created this item.
   */
  createdBy?: string;

  /**
   * This schema defines the credentials required for m3ter request signing.
   */
  credentials?: Webhook.Credentials;

  description?: string;

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

  name?: string;

  /**
   * The URL to which webhook requests are sent.
   */
  url?: string;
}

export namespace Webhook {
  /**
   * This schema defines the credentials required for m3ter request signing.
   */
  export interface Credentials {}
}

export interface WebhookCreateResponse {
  /**
   * The credentials required for the webhook.
   */
  credentials: WebhookCreateResponse.Credentials;

  description: string;

  name: string;

  /**
   * The URL to which the webhook requests will be sent.
   */
  url: string;

  active?: boolean;

  code?: string;

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

export namespace WebhookCreateResponse {
  /**
   * The credentials required for the webhook.
   */
  export interface Credentials {}
}

export interface WebhookUpdateResponse {
  /**
   * The credentials required for the webhook.
   */
  credentials: WebhookUpdateResponse.Credentials;

  description: string;

  name: string;

  /**
   * The URL to which the webhook requests will be sent.
   */
  url: string;

  active?: boolean;

  code?: string;

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

export namespace WebhookUpdateResponse {
  /**
   * The credentials required for the webhook.
   */
  export interface Credentials {}
}

export interface WebhookSetActiveResponse {
  /**
   * The credentials required for the webhook.
   */
  credentials: WebhookSetActiveResponse.Credentials;

  description: string;

  name: string;

  /**
   * The URL to which the webhook requests will be sent.
   */
  url: string;

  active?: boolean;

  code?: string;

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

export namespace WebhookSetActiveResponse {
  /**
   * The credentials required for the webhook.
   */
  export interface Credentials {}
}

export interface WebhookCreateParams {
  /**
   * Path param: The unique identifier (UUID) for the organization. This specifies
   * the organization within which the webhook destination is created.
   */
  orgId?: string;

  /**
   * Body param: The credentials required for the webhook.
   */
  credentials: WebhookCreateParams.Credentials;

  /**
   * Body param:
   */
  description: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param: The URL to which the webhook requests will be sent.
   */
  url: string;

  /**
   * Body param:
   */
  active?: boolean;

  /**
   * Body param:
   */
  code?: string;

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

export namespace WebhookCreateParams {
  /**
   * The credentials required for the webhook.
   */
  export interface Credentials {}
}

export interface WebhookRetrieveParams {
  /**
   * UUID of the organization
   */
  orgId?: string;
}

export interface WebhookUpdateParams {
  /**
   * Path param: UUID of the organization
   */
  orgId?: string;

  /**
   * Body param: The credentials required for the webhook.
   */
  credentials: WebhookUpdateParams.Credentials;

  /**
   * Body param:
   */
  description: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param: The URL to which the webhook requests will be sent.
   */
  url: string;

  /**
   * Body param:
   */
  active?: boolean;

  /**
   * Body param:
   */
  code?: string;

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

export namespace WebhookUpdateParams {
  /**
   * The credentials required for the webhook.
   */
  export interface Credentials {}
}

export interface WebhookListParams extends CursorParams {
  /**
   * Path param: UUID of the organization
   */
  orgId?: string;

  /**
   * Query param:
   */
  ids?: Array<string>;
}

export interface WebhookDeleteParams {
  /**
   * The unique identifier (UUID) of your Organization. The Organization represents
   * your company as a direct customer of our service.
   */
  orgId?: string;
}

export interface WebhookSetActiveParams {
  /**
   * Path param: The unique identifier (UUID) of your Organization. The Organization
   * represents your company as a direct customer of our service.
   */
  orgId?: string;

  /**
   * Query param: active status of the webhook
   */
  active?: boolean;
}

Webhooks.WebhooksCursor = WebhooksCursor;

export declare namespace Webhooks {
  export {
    type Webhook as Webhook,
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookSetActiveResponse as WebhookSetActiveResponse,
    WebhooksCursor as WebhooksCursor,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookRetrieveParams as WebhookRetrieveParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookDeleteParams as WebhookDeleteParams,
    type WebhookSetActiveParams as WebhookSetActiveParams,
  };
}
