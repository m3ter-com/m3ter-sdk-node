// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Cursor, type CursorParams } from '../pagination';

export class Products extends APIResource {
  /**
   * Create a new Product.
   *
   * This endpoint creates a new Product within the specified Organization. The
   * details of the Product are provided in the request body.
   */
  create(orgId: string, body: ProductCreateParams, options?: Core.RequestOptions): Core.APIPromise<Product> {
    return this._client.post(`/organizations/${orgId}/products`, { body, ...options });
  }

  /**
   * Retrieve a Product with the given UUID.
   *
   * This endpoint retrieves the details of a specific Product within a specified
   * Organization, using the Product UUID.
   */
  retrieve(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Product> {
    return this._client.get(`/organizations/${orgId}/products/${id}`, options);
  }

  /**
   * Update a Product with the given UUID.
   *
   * This endpoint updates the details of a specific Product within a specified
   * Organization, using the Product UUID. The updated details are provided in the
   * request body.
   *
   * **Note:** If you have created Custom Fields for a Product, when you use this
   * endpoint to update the Product use the `customFields` parameter to preserve
   * those Custom Fields. If you omit them from the update request, they will be
   * lost.
   */
  update(
    orgId: string,
    id: string,
    body: ProductUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Product> {
    return this._client.put(`/organizations/${orgId}/products/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of Products.
   *
   * This endpoint retrieves a list of all the Products within a specified
   * Organization. The list can be paginated, and supports filtering by specific
   * Product IDs.
   */
  list(
    orgId: string,
    query?: ProductListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProductsCursor, Product>;
  list(orgId: string, options?: Core.RequestOptions): Core.PagePromise<ProductsCursor, Product>;
  list(
    orgId: string,
    query: ProductListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProductsCursor, Product> {
    if (isRequestOptions(query)) {
      return this.list(orgId, {}, query);
    }
    return this._client.getAPIList(`/organizations/${orgId}/products`, ProductsCursor, { query, ...options });
  }
}

export class ProductsCursor extends Cursor<Product> {}

export interface Product {
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
   * A unique short code to identify the Product. It should not contain control
   * chracters or spaces.
   */
  code?: string;

  /**
   * The unique identifier (UUID) of the user who created this Product.
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
  customFields?: Record<string, unknown>;

  /**
   * The date and time _(in ISO-8601 format)_ when the Product was created.
   */
  dtCreated?: string;

  /**
   * The date and time _(in ISO-8601 format)_ when the Product was last modified.
   */
  dtLastModified?: string;

  /**
   * The unique identifier (UUID) of the user who last modified this Product.
   */
  lastModifiedBy?: string;

  /**
   * Descriptive name for the Product providing context and information.
   */
  name?: string;
}

export interface ProductCreateParams {
  /**
   * A unique short code to identify the Product. It should not contain control
   * chracters or spaces.
   */
  code: string;

  /**
   * Descriptive name for the Product providing context and information.
   */
  name: string;

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
  customFields?: Record<string, unknown>;

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

export interface ProductUpdateParams {
  /**
   * A unique short code to identify the Product. It should not contain control
   * chracters or spaces.
   */
  code: string;

  /**
   * Descriptive name for the Product providing context and information.
   */
  name: string;

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
  customFields?: Record<string, unknown>;

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

export interface ProductListParams extends CursorParams {
  /**
   * List of specific Product UUIDs to retrieve.
   */
  ids?: Array<string>;
}

Products.ProductsCursor = ProductsCursor;

export declare namespace Products {
  export {
    type Product as Product,
    ProductsCursor as ProductsCursor,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };
}
