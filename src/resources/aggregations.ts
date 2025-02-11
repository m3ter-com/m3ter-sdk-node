// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Aggregations extends APIResource {
  /**
   * Create a new Aggregation.
   */
  create(
    orgId: string,
    body: AggregationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Aggregation> {
    return this._client.post(`/organizations/${orgId}/aggregations`, { body, ...options });
  }

  /**
   * Retrieve the Aggregation with the given UUID.
   */
  retrieve(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Aggregation> {
    return this._client.get(`/organizations/${orgId}/aggregations/${id}`, options);
  }

  /**
   * Update the Aggregation with the given UUID.
   *
   * **Note:** If you have created Custom Fields for an Aggregation, when you use
   * this endpoint to update the Aggregation use the `customFields` parameter to
   * preserve those Custom Fields. If you omit them from the update request, they
   * will be lost.
   */
  update(
    orgId: string,
    id: string,
    body: AggregationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Aggregation> {
    return this._client.put(`/organizations/${orgId}/aggregations/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of Aggregations that can be filtered by Product, Aggregation ID,
   * or Code.
   */
  list(orgId: string, query?: AggregationListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(orgId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    orgId: string,
    query: AggregationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list(orgId, {}, query);
    }
    return this._client.get(`/organizations/${orgId}/aggregations`, { query, ...options });
  }

  /**
   * Delete the Aggregation with the given UUID.
   */
  delete(orgId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Aggregation> {
    return this._client.delete(`/organizations/${orgId}/aggregations/${id}`, options);
  }
}

export interface Aggregation {
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
   * Specifies the computation method applied to usage data collected in
   * `targetField`. Aggregation unit value depends on the **Category** configured for
   * the selected targetField.
   *
   * Enum:
   *
   * - **SUM**. Adds the values. Can be applied to a **Measure**, **Income**, or
   *   **Cost** `targetField`.
   *
   * - **MIN**. Uses the minimum value. Can be applied to a **Measure**, **Income**,
   *   or **Cost** `targetField`.
   *
   * - **MAX**. Uses the maximum value. Can be applied to a **Measure**, **Income**,
   *   or **Cost** `targetField`.
   *
   * - **COUNT**. Counts the number of values. Can be applied to a **Measure**,
   *   **Income**, or **Cost** `targetField`.
   *
   * - **LATEST**. Uses the most recent value. Can be applied to a **Measure**,
   *   **Income**, or **Cost** `targetField`. Note: Based on the timestamp (`ts`)
   *   value of usage data measurement submissions. If using this method, please
   *   ensure _distinct_ `ts` values are used for usage data measurment submissions.
   *
   * - **MEAN**. Uses the arithmetic mean of the values. Can be applied to a
   *   **Measure**, **Income**, or **Cost** `targetField`.
   *
   * - **UNIQUE**. Uses unique values and returns a count of the number of unique
   *   values. Can be applied to a **Metadata** `targetField`.
   */
  aggregation?: 'SUM' | 'MIN' | 'MAX' | 'COUNT' | 'LATEST' | 'MEAN' | 'UNIQUE';

  /**
   * Code of the Aggregation. A unique short code to identify the Aggregation.
   */
  code?: string;

  /**
   * The id of the user who created this aggregation.
   */
  createdBy?: string;

  customFields?: Record<string, string | number>;

  /**
   * Aggregation value used when no usage data is available to be aggregated.
   * _(Optional)_.
   *
   * **Note:** Set to 0, if you expect to reference the Aggregation in a Compound
   * Aggregation. This ensures that any null values are passed in correctly to the
   * Compound Aggregation calculation with a value = 0.
   */
  defaultValue?: number;

  /**
   * The DateTime when the aggregation was created _(in ISO 8601 format)_.
   */
  dtCreated?: string;

  /**
   * The DateTime when the aggregation was last modified _(in ISO 8601 format)_.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified this aggregation.
   */
  lastModifiedBy?: string;

  /**
   * The UUID of the Meter used as the source of usage data for the Aggregation.
   *
   * Each Aggregation is a child of a Meter, so the Meter must be selected.
   */
  meterId?: string;

  /**
   * Descriptive name for the Aggregation.
   */
  name?: string;

  /**
   * Defines how much of a quantity equates to 1 unit. Used when setting the price
   * per unit for billing purposes - if charging for kilobytes per second (KiBy/s) at
   * rate of $0.25 per 500 KiBy/s, then set quantityPerUnit to 500 and price Plan at
   * $0.25 per unit.
   *
   * If `quantityPerUnit` is set to a value other than one, rounding is typically set
   * to UP.
   */
  quantityPerUnit?: number;

  /**
   * Specifies how you want to deal with non-integer, fractional number Aggregation
   * values.
   *
   * **NOTES:**
   *
   * - **NEAREST** rounds to the nearest half: 5.1 is rounded to 5, and 3.5 is
   *   rounded to 4.
   * - Also used in combination with `quantityPerUnit`. Rounds the number of units
   *   after `quantityPerUnit` is applied. If you set `quantityPerUnit` to a value
   *   other than one, you would typically set Rounding to **UP**. For example,
   *   suppose you charge by kilobytes per second (KiBy/s), set `quantityPerUnit` =
   *   500, and set charge rate at $0.25 per unit used. If your customer used 48,900
   *   KiBy/s in a billing period, the charge would be 48,900 / 500 = 97.8 rounded up
   *   to 98 \* 0.25 = $2.45.
   *
   * Enum: ???UP??? ???DOWN??? ???NEAREST??? ???NONE???
   */
  rounding?: 'UP' | 'DOWN' | 'NEAREST' | 'NONE';

  /**
   * _(Optional)_. Used when creating a segmented Aggregation, which segments the
   * usage data collected by a single Meter. Works together with `segments`.
   *
   * The `Codes` of the fields in the target Meter to use for segmentation purposes.
   *
   * String `dataFields` on the target Meter can be segmented. Any string
   * `derivedFields` on the target Meter, such as one that concatenates two string
   * `dataFields`, can also be segmented.
   */
  segmentedFields?: Array<string>;

  /**
   * _(Optional)_. Used when creating a segmented Aggregation, which segments the
   * usage data collected by a single Meter. Works together with `segmentedFields`.
   *
   * Contains the values that are to be used as the segments, read from the fields in
   * the meter pointed at by `segmentedFields`.
   */
  segments?: Array<Record<string, string>>;

  /**
   * `Code` of the target `dataField` or `derivedField` on the Meter used as the
   * basis for the Aggregation.
   */
  targetField?: string;

  /**
   * User defined or following the _Unified Code for Units of Measure_ (UCUM).
   *
   * Used as the label for billing, indicating to your customers what they are being
   * charged for.
   */
  unit?: string;
}

export type AggregationListResponse = unknown;

export interface AggregationCreateParams {
  /**
   * Specifies the computation method applied to usage data collected in
   * `targetField`. Aggregation unit value depends on the **Category** configured for
   * the selected targetField.
   *
   * Enum:
   *
   * - **SUM**. Adds the values. Can be applied to a **Measure**, **Income**, or
   *   **Cost** `targetField`.
   *
   * - **MIN**. Uses the minimum value. Can be applied to a **Measure**, **Income**,
   *   or **Cost** `targetField`.
   *
   * - **MAX**. Uses the maximum value. Can be applied to a **Measure**, **Income**,
   *   or **Cost** `targetField`.
   *
   * - **COUNT**. Counts the number of values. Can be applied to a **Measure**,
   *   **Income**, or **Cost** `targetField`.
   *
   * - **LATEST**. Uses the most recent value. Can be applied to a **Measure**,
   *   **Income**, or **Cost** `targetField`. Note: Based on the timestamp (`ts`)
   *   value of usage data measurement submissions. If using this method, please
   *   ensure _distinct_ `ts` values are used for usage data measurment submissions.
   *
   * - **MEAN**. Uses the arithmetic mean of the values. Can be applied to a
   *   **Measure**, **Income**, or **Cost** `targetField`.
   *
   * - **UNIQUE**. Uses unique values and returns a count of the number of unique
   *   values. Can be applied to a **Metadata** `targetField`.
   */
  aggregation: 'SUM' | 'MIN' | 'MAX' | 'COUNT' | 'LATEST' | 'MEAN' | 'UNIQUE';

  /**
   * The UUID of the Meter used as the source of usage data for the Aggregation.
   *
   * Each Aggregation is a child of a Meter, so the Meter must be selected.
   */
  meterId: string;

  /**
   * Descriptive name for the Aggregation.
   */
  name: string;

  /**
   * Defines how much of a quantity equates to 1 unit. Used when setting the price
   * per unit for billing purposes - if charging for kilobytes per second (KiBy/s) at
   * rate of $0.25 per 500 KiBy/s, then set quantityPerUnit to 500 and price Plan at
   * $0.25 per unit.
   *
   * **Note:** If `quantityPerUnit` is set to a value other than one, `rounding` is
   * typically set to `"UP"`.
   */
  quantityPerUnit: number;

  /**
   * Specifies how you want to deal with non-integer, fractional number Aggregation
   * values.
   *
   * **NOTES:**
   *
   * - **NEAREST** rounds to the nearest half: 5.1 is rounded to 5, and 3.5 is
   *   rounded to 4.
   * - Also used in combination with `quantityPerUnit`. Rounds the number of units
   *   after `quantityPerUnit` is applied. If you set `quantityPerUnit` to a value
   *   other than one, you would typically set Rounding to **UP**. For example,
   *   suppose you charge by kilobytes per second (KiBy/s), set `quantityPerUnit` =
   *   500, and set charge rate at $0.25 per unit used. If your customer used 48,900
   *   KiBy/s in a billing period, the charge would be 48,900 / 500 = 97.8 rounded up
   *   to 98 \* 0.25 = $2.45.
   *
   * Enum: ???UP??? ???DOWN??? ???NEAREST??? ???NONE???
   */
  rounding: 'UP' | 'DOWN' | 'NEAREST' | 'NONE';

  /**
   * `Code` of the target `dataField` or `derivedField` on the Meter used as the
   * basis for the Aggregation.
   */
  targetField: string;

  /**
   * User defined label for units shown for Bill line items, indicating to your
   * customers what they are being charged for.
   */
  unit: string;

  /**
   * Code of the new Aggregation. A unique short code to identify the Aggregation.
   */
  code?: string;

  customFields?: Record<string, string | number>;

  /**
   * Aggregation value used when no usage data is available to be aggregated.
   * _(Optional)_.
   *
   * **Note:** Set to 0, if you expect to reference the Aggregation in a Compound
   * Aggregation. This ensures that any null values are passed in correctly to the
   * Compound Aggregation calculation with a value = 0.
   */
  defaultValue?: number;

  /**
   * _(Optional)_. Used when creating a segmented Aggregation, which segments the
   * usage data collected by a single Meter. Works together with `segments`.
   *
   * Enter the `Codes` of the fields in the target Meter to use for segmentation
   * purposes.
   *
   * String `dataFields` on the target Meter can be segmented. Any string
   * `derivedFields` on the target Meter, such as one that concatenates two string
   * `dataFields`, can also be segmented.
   */
  segmentedFields?: Array<string>;

  /**
   * _(Optional)_. Used when creating a segmented Aggregation, which segments the
   * usage data collected by a single Meter. Works together with `segmentedFields`.
   *
   * Enter the values that are to be used as the segments, read from the fields in
   * the meter pointed at by `segmentedFields`.
   *
   * Note that you can use _wildcards_ or _defaults_ when setting up segment values.
   * For more details on how to do this with an example, see
   * [Using Wildcards - API Calls](https://www.m3ter.com/docs/guides/setting-up-usage-data-meters-and-aggregations/segmented-aggregations#using-wildcards---api-calls)
   * in our main User Docs.
   */
  segments?: Array<Record<string, string>>;

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

export interface AggregationUpdateParams {
  /**
   * Specifies the computation method applied to usage data collected in
   * `targetField`. Aggregation unit value depends on the **Category** configured for
   * the selected targetField.
   *
   * Enum:
   *
   * - **SUM**. Adds the values. Can be applied to a **Measure**, **Income**, or
   *   **Cost** `targetField`.
   *
   * - **MIN**. Uses the minimum value. Can be applied to a **Measure**, **Income**,
   *   or **Cost** `targetField`.
   *
   * - **MAX**. Uses the maximum value. Can be applied to a **Measure**, **Income**,
   *   or **Cost** `targetField`.
   *
   * - **COUNT**. Counts the number of values. Can be applied to a **Measure**,
   *   **Income**, or **Cost** `targetField`.
   *
   * - **LATEST**. Uses the most recent value. Can be applied to a **Measure**,
   *   **Income**, or **Cost** `targetField`. Note: Based on the timestamp (`ts`)
   *   value of usage data measurement submissions. If using this method, please
   *   ensure _distinct_ `ts` values are used for usage data measurment submissions.
   *
   * - **MEAN**. Uses the arithmetic mean of the values. Can be applied to a
   *   **Measure**, **Income**, or **Cost** `targetField`.
   *
   * - **UNIQUE**. Uses unique values and returns a count of the number of unique
   *   values. Can be applied to a **Metadata** `targetField`.
   */
  aggregation: 'SUM' | 'MIN' | 'MAX' | 'COUNT' | 'LATEST' | 'MEAN' | 'UNIQUE';

  /**
   * The UUID of the Meter used as the source of usage data for the Aggregation.
   *
   * Each Aggregation is a child of a Meter, so the Meter must be selected.
   */
  meterId: string;

  /**
   * Descriptive name for the Aggregation.
   */
  name: string;

  /**
   * Defines how much of a quantity equates to 1 unit. Used when setting the price
   * per unit for billing purposes - if charging for kilobytes per second (KiBy/s) at
   * rate of $0.25 per 500 KiBy/s, then set quantityPerUnit to 500 and price Plan at
   * $0.25 per unit.
   *
   * **Note:** If `quantityPerUnit` is set to a value other than one, `rounding` is
   * typically set to `"UP"`.
   */
  quantityPerUnit: number;

  /**
   * Specifies how you want to deal with non-integer, fractional number Aggregation
   * values.
   *
   * **NOTES:**
   *
   * - **NEAREST** rounds to the nearest half: 5.1 is rounded to 5, and 3.5 is
   *   rounded to 4.
   * - Also used in combination with `quantityPerUnit`. Rounds the number of units
   *   after `quantityPerUnit` is applied. If you set `quantityPerUnit` to a value
   *   other than one, you would typically set Rounding to **UP**. For example,
   *   suppose you charge by kilobytes per second (KiBy/s), set `quantityPerUnit` =
   *   500, and set charge rate at $0.25 per unit used. If your customer used 48,900
   *   KiBy/s in a billing period, the charge would be 48,900 / 500 = 97.8 rounded up
   *   to 98 \* 0.25 = $2.45.
   *
   * Enum: ???UP??? ???DOWN??? ???NEAREST??? ???NONE???
   */
  rounding: 'UP' | 'DOWN' | 'NEAREST' | 'NONE';

  /**
   * `Code` of the target `dataField` or `derivedField` on the Meter used as the
   * basis for the Aggregation.
   */
  targetField: string;

  /**
   * User defined label for units shown for Bill line items, indicating to your
   * customers what they are being charged for.
   */
  unit: string;

  /**
   * Code of the new Aggregation. A unique short code to identify the Aggregation.
   */
  code?: string;

  customFields?: Record<string, string | number>;

  /**
   * Aggregation value used when no usage data is available to be aggregated.
   * _(Optional)_.
   *
   * **Note:** Set to 0, if you expect to reference the Aggregation in a Compound
   * Aggregation. This ensures that any null values are passed in correctly to the
   * Compound Aggregation calculation with a value = 0.
   */
  defaultValue?: number;

  /**
   * _(Optional)_. Used when creating a segmented Aggregation, which segments the
   * usage data collected by a single Meter. Works together with `segments`.
   *
   * Enter the `Codes` of the fields in the target Meter to use for segmentation
   * purposes.
   *
   * String `dataFields` on the target Meter can be segmented. Any string
   * `derivedFields` on the target Meter, such as one that concatenates two string
   * `dataFields`, can also be segmented.
   */
  segmentedFields?: Array<string>;

  /**
   * _(Optional)_. Used when creating a segmented Aggregation, which segments the
   * usage data collected by a single Meter. Works together with `segmentedFields`.
   *
   * Enter the values that are to be used as the segments, read from the fields in
   * the meter pointed at by `segmentedFields`.
   *
   * Note that you can use _wildcards_ or _defaults_ when setting up segment values.
   * For more details on how to do this with an example, see
   * [Using Wildcards - API Calls](https://www.m3ter.com/docs/guides/setting-up-usage-data-meters-and-aggregations/segmented-aggregations#using-wildcards---api-calls)
   * in our main User Docs.
   */
  segments?: Array<Record<string, string>>;

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

export interface AggregationListParams {
  /**
   * List of Aggregation codes to retrieve. These are unique short codes to identify
   * each Aggregation.
   */
  codes?: Array<string>;

  /**
   * List of Aggregation IDs to retrieve.
   */
  ids?: Array<string>;

  /**
   * `nextToken` for multi-page retrievals.
   */
  nextToken?: string;

  /**
   * Number of Aggregations to retrieve per page.
   */
  pageSize?: number;

  /**
   * The UUIDs of the Products to retrieve Aggregations for.
   */
  productId?: Array<string>;
}

export declare namespace Aggregations {
  export {
    type Aggregation as Aggregation,
    type AggregationListResponse as AggregationListResponse,
    type AggregationCreateParams as AggregationCreateParams,
    type AggregationUpdateParams as AggregationUpdateParams,
    type AggregationListParams as AggregationListParams,
  };
}
