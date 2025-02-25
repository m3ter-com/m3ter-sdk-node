// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { Cursor, type CursorParams } from '../../pagination';

export class Schedules extends APIResource {
  /**
   * Create a new Data Export Schedule. Each Schedule can be configured for exporting
   * _only one_ of either Usage or Operational data:
   *
   * **Operational Data Exports**.
   *
   * - Use the `operationalDataTypes` parameter to specify the entities whose
   *   operational data you want to include in the export each time the Export
   *   Schedule runs.
   * - For each of the entity types you select, each time the Export Schedule runs a
   *   separate file is compiled containing the operational data for all entities of
   *   that type that exist in your Organization
   *
   * **Usage Data Exports**.
   *
   * - Select the Meters and Accounts whose usage data you want to include in the
   *   export each time the Export Schedule runs.
   * - If _don't want to aggregate_ the usage data collected by the selected Meters,
   *   use **ORIGINAL** for `aggregationFrequency`, which is the _default_. This
   *   means the raw usage data collected by any type of Data Fields and the values
   *   for any Derived Fields on the selected Meters will be included in the export.
   * - If you _do want to aggregate_ the usage data collected by the selected Meters,
   *   use one of the other options for `aggregationFrequency`: **HOUR**, **DAY**,
   *   **WEEK**, or **MONTH**. You _must_ then also specified an `aggregation` method
   *   to be used on the usage data before export. Importantly, if you do aggregate
   *   usage data, only the usage data collected by any numeric Data Fields on the
   *   selected Meters - those of type **MEASURE**, **INCOME**, or **COST** - will be
   *   included in the export each time the Export Schedule runs.
   */
  create(
    params: ScheduleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleCreateResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/dataexports/schedules`, { body, ...options });
  }

  /**
   * Retrieve a Data Export Schedule for the given UUID. Each Schedule can be
   * configured for exporting _only one_ of either Usage or Operational data.
   */
  retrieve(
    id: string,
    params?: ScheduleRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleRetrieveResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ScheduleRetrieveResponse>;
  retrieve(
    id: string,
    params: ScheduleRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleRetrieveResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/dataexports/schedules/${id}`, options);
  }

  /**
   * Update a Data Export Schedule for the given UUID. Each Schedule can be
   * configured for exporting _only one_ of either Usage or Operational data:
   *
   * **Operational Data Exports**.
   *
   * - Use the `operationalDataTypes` parameter to specify the entities whose
   *   operational data you want to include in the export each time the Export
   *   Schedule runs.
   * - For each of the entity types you select, each time the Export Schedule runs a
   *   separate file is compiled containing the operational data for all entities of
   *   that type that exist in your Organization
   *
   * **Usage Data Exports**.
   *
   * - Select the Meters and Accounts whose usage data you want to include in the
   *   export each time the Export Schedule runs.
   * - If _don't want to aggregate_ the usage data collected by the selected Meters,
   *   use **ORIGINAL** for `aggregationFrequency`, which is the _default_. This
   *   means the raw usage data collected by any type of Data Fields and the values
   *   for any Derived Fields on the selected Meters will be included in the export.
   * - If you _do want to aggregate_ the usage data collected by the selected Meters,
   *   use one of the other options for `aggregationFrequency`: **HOUR**, **DAY**,
   *   **WEEK**, or **MONTH**. You _must_ then also specified an `aggregation` method
   *   to be used on the usage data before export. Importantly, if you do aggregate
   *   usage data, only the usage data collected by any numeric Data Fields on the
   *   selected Meters - those of type **MEASURE**, **INCOME**, or **COST** - will be
   *   included in the export each time the Export Schedule runs.
   */
  update(
    id: string,
    params: ScheduleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleUpdateResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/dataexports/schedules/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of Data Export Schedules created for your Organization. You can
   * filter the response by Schedules `ids`.
   *
   * The response will contain an array for both the operational and usage Data
   * Export Schedules in your Organization.
   */
  list(
    params?: ScheduleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ScheduleListResponsesCursor, ScheduleListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<ScheduleListResponsesCursor, ScheduleListResponse>;
  list(
    params: ScheduleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ScheduleListResponsesCursor, ScheduleListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/dataexports/schedules`,
      ScheduleListResponsesCursor,
      { query, ...options },
    );
  }

  /**
   * Delete the Data Export Schedule for the given UUID. Each Schedule can be
   * configured for exporting _only one_ of either Usage or Operational data.
   */
  delete(
    id: string,
    params?: ScheduleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleDeleteResponse>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<ScheduleDeleteResponse>;
  delete(
    id: string,
    params: ScheduleDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/dataexports/schedules/${id}`, options);
  }
}

export class ScheduleListResponsesCursor extends Cursor<ScheduleListResponse> {}

export interface OperationalDataExportSchedule {
  /**
   * The id of the schedule.
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
   * A list of the entities whose operational data is included in the data export.
   */
  operationalDataTypes?: Array<
    | 'BILLS'
    | 'COMMITMENTS'
    | 'ACCOUNTS'
    | 'BALANCES'
    | 'CONTRACTS'
    | 'ACCOUNT_PLANS'
    | 'AGGREGATIONS'
    | 'PLANS'
    | 'PRICING'
    | 'PRICING_BANDS'
    | 'BILL_LINE_ITEMS'
    | 'METERS'
    | 'PRODUCTS'
    | 'COMPOUND_AGGREGATIONS'
    | 'PLAN_GROUPS'
    | 'PLAN_GROUP_LINKS'
    | 'PLAN_TEMPLATES'
    | 'BALANCE_TRANSACTIONS'
  >;
}

export interface UsageDataExportSchedule {
  /**
   * The id of the schedule
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
   * List of account IDs for which the usage data will be exported.
   */
  accountIds?: Array<string>;

  /**
   * Specifies the aggregation method applied to usage data collected in the numeric
   * Data Fields of Meters included for the Data Export Schedule - that is, Data
   * Fields of type **MEASURE**, **INCOME**, or **COST**:
   *
   * - **SUM**. Adds the values.
   * - **MIN**. Uses the minimum value.
   * - **MAX**. Uses the maximum value.
   * - **COUNT**. Counts the number of values.
   * - **LATEST**. Uses the most recent value. Note: Based on the timestamp `ts`
   *   value of usage data measurement submissions. If using this method, please
   *   ensure _distinct_ `ts` values are used for usage data measurement submissions.
   */
  aggregation?: 'SUM' | 'MIN' | 'MAX' | 'COUNT' | 'LATEST' | 'MEAN';

  /**
   * Specifies the time period for the aggregation of usage data included each time
   * the Data Export Schedule runs:
   *
   * - **ORIGINAL**. Usage data is _not aggregated_. If you select to not aggregate,
   *   then raw usage data measurements collected by all Data Field types and any
   *   Derived Fields on the selected Meters are included in the export. This is the
   *   _Default_.
   *
   * If you want to aggregate usage data for the Export Schedule you must define an
   * `aggregationFrequency`:
   *
   * - **HOUR**. Aggregated hourly.
   * - **DAY**. Aggregated daily.
   * - **WEEK**. Aggregated weekly.
   * - **MONTH**. Aggregated monthly.
   *
   * - If you select to aggregate usage data for a Export Schedule, then only the
   *   aggregated usage data collected by numeric Data Fields of type **MEASURE**,
   *   **INCOME**, or **COST** on selected Meters are included in the export.
   *
   * **NOTE**: If you define an `aggregationFrequency` other than **ORIGINAL** and do
   * not define an `aggregation` method, then you'll receive and error.
   */
  aggregationFrequency?: 'ORIGINAL' | 'HOUR' | 'DAY' | 'WEEK' | 'MONTH';

  /**
   * List of meter IDs for which the usage data will be exported.
   */
  meterIds?: Array<string>;

  /**
   * Define a time period to control the range of usage data you want the data export
   * to contain when it runs:
   *
   * - **TODAY**. Data collected for the current day up until the time the export
   *   runs.
   * - **YESTERDAY**. Data collected for the day before the export runs - that is,
   *   the 24 hour period from midnight to midnight of the day before.
   * - **WEEK_TO_DATE**. Data collected for the period covering the current week to
   *   the date and time the export runs, and weeks run Monday to Monday.
   * - **CURRENT_MONTH**. Data collected for the current month in which the export is
   *   ran up to and including the date and time the export runs.
   * - **LAST_30_DAYS**. Data collected for the 30 days prior to the date the export
   *   is ran.
   * - **LAST_35_DAYS**. Data collected for the 35 days prior to the date the export
   *   is ran.
   * - **PREVIOUS_WEEK**. Data collected for the previous full week period, and weeks
   *   run Monday to Monday.
   * - **PREVIOUS_MONTH**. Data collected for the previous full month period.
   *
   * For more details and examples, see the
   * [Time Period](https://www.m3ter.com/docs/guides/data-exports/creating-export-schedules#time-period)
   * section in our main User Documentation.
   */
  timePeriod?:
    | 'TODAY'
    | 'YESTERDAY'
    | 'WEEK_TO_DATE'
    | 'CURRENT_MONTH'
    | 'LAST_30_DAYS'
    | 'LAST_35_DAYS'
    | 'PREVIOUS_WEEK'
    | 'PREVIOUS_MONTH';
}

/**
 * Response representing an operational data export configuration.
 */
export type ScheduleCreateResponse = OperationalDataExportSchedule | UsageDataExportSchedule;

/**
 * Response representing an operational data export configuration.
 */
export type ScheduleRetrieveResponse = OperationalDataExportSchedule | UsageDataExportSchedule;

/**
 * Response representing an operational data export configuration.
 */
export type ScheduleUpdateResponse = OperationalDataExportSchedule | UsageDataExportSchedule;

export interface ScheduleListResponse {
  /**
   * The id of the Data Export Schedule.
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
   * Unique short code of the Data Export Schedule.
   */
  code?: string;

  /**
   * The id of the user who created this Schedule.
   */
  createdBy?: string;

  /**
   * The Export Destination ids.
   */
  destinationIds?: Array<string>;

  /**
   * The DateTime when the Data Export Schedule was created.
   */
  dtCreated?: string;

  /**
   * The DateTime when the Schedule was last modified.
   */
  dtLastModified?: string;

  exportFileFormat?: 'CSV' | 'JSON';

  /**
   * The id of the user who last modified this Data Export Schedule.
   */
  lastModifiedBy?: string;

  /**
   * The name of the Data Export Schedule.
   */
  name?: string;

  /**
   * Defines the Schedule frequency for the Data Export to run in Hours or Days. Used
   * in conjunction with the `scheduleType` parameter.
   */
  period?: number;

  scheduleType?: 'HOURLY' | 'DAILY' | 'AD_HOC';

  sourceType?: 'USAGE' | 'OPERATIONAL';
}

/**
 * Response representing an operational data export configuration.
 */
export type ScheduleDeleteResponse = OperationalDataExportSchedule | UsageDataExportSchedule;

export type ScheduleCreateParams =
  | ScheduleCreateParams.OperationalDataExportConfigurationRequest
  | ScheduleCreateParams.UsageDataExportConfigurationRequest;

export declare namespace ScheduleCreateParams {
  export interface OperationalDataExportConfigurationRequest {
    /**
     * Path param: UUID of the organization
     */
    orgId?: string;

    /**
     * Body param: A list of the entities whose operational data is included in the
     * data export.
     */
    operationalDataTypes: Array<
      | 'BILLS'
      | 'COMMITMENTS'
      | 'ACCOUNTS'
      | 'BALANCES'
      | 'CONTRACTS'
      | 'ACCOUNT_PLANS'
      | 'AGGREGATIONS'
      | 'PLANS'
      | 'PRICING'
      | 'PRICING_BANDS'
      | 'BILL_LINE_ITEMS'
      | 'METERS'
      | 'PRODUCTS'
      | 'COMPOUND_AGGREGATIONS'
      | 'PLAN_GROUPS'
      | 'PLAN_GROUP_LINKS'
      | 'PLAN_TEMPLATES'
      | 'BALANCE_TRANSACTIONS'
    >;

    /**
     * Body param:
     */
    sourceType: 'USAGE' | 'OPERATIONAL';

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

  export interface UsageDataExportConfigurationRequest {
    /**
     * Path param: UUID of the organization
     */
    orgId?: string;

    /**
     * Body param: Specifies the time period for the aggregation of usage data included
     * each time the Data Export Schedule runs:
     *
     * - **ORIGINAL**. Usage data is _not aggregated_. If you select to not aggregate,
     *   then raw usage data measurements collected by all Data Field types and any
     *   Derived Fields on the selected Meters are included in the export. This is the
     *   _Default_.
     *
     * If you want to aggregate usage data for the Export Schedule you must define an
     * `aggregationFrequency`:
     *
     * - **HOUR**. Aggregated hourly.
     * - **DAY**. Aggregated daily.
     * - **WEEK**. Aggregated weekly.
     * - **MONTH**. Aggregated monthly.
     *
     * - If you select to aggregate usage data for a Export Schedule, then only the
     *   aggregated usage data collected by numeric Data Fields of type **MEASURE**,
     *   **INCOME**, or **COST** on selected Meters are included in the export.
     *
     * **NOTE**: If you define an `aggregationFrequency` other than **ORIGINAL** and do
     * not define an `aggregation` method, then you'll receive and error.
     */
    aggregationFrequency: 'ORIGINAL' | 'HOUR' | 'DAY' | 'WEEK' | 'MONTH';

    /**
     * Body param:
     */
    sourceType: 'USAGE' | 'OPERATIONAL';

    /**
     * Body param: Define a time period to control the range of usage data you want the
     * data export to contain when it runs:
     *
     * - **TODAY**. Data collected for the current day up until the time the export
     *   runs.
     * - **YESTERDAY**. Data collected for the day before the export runs - that is,
     *   the 24 hour period from midnight to midnight of the day before.
     * - **WEEK_TO_DATE**. Data collected for the period covering the current week to
     *   the date and time the export runs, and weeks run Monday to Monday.
     * - **CURRENT_MONTH**. Data collected for the current month in which the export is
     *   ran up to and including the date and time the export runs.
     * - **LAST_30_DAYS**. Data collected for the 30 days prior to the date the export
     *   is ran.
     * - **LAST_35_DAYS**. Data collected for the 35 days prior to the date the export
     *   is ran.
     * - **PREVIOUS_WEEK**. Data collected for the previous full week period, and weeks
     *   run Monday to Monday.
     * - **PREVIOUS_MONTH**. Data collected for the previous full month period.
     *
     * For more details and examples, see the
     * [Time Period](https://www.m3ter.com/docs/guides/data-exports/creating-export-schedules#time-period)
     * section in our main User Documentation.
     */
    timePeriod:
      | 'TODAY'
      | 'YESTERDAY'
      | 'WEEK_TO_DATE'
      | 'CURRENT_MONTH'
      | 'LAST_30_DAYS'
      | 'LAST_35_DAYS'
      | 'PREVIOUS_WEEK'
      | 'PREVIOUS_MONTH';

    /**
     * Body param: List of account IDs for which the usage data will be exported.
     */
    accountIds?: Array<string>;

    /**
     * Body param: Specifies the aggregation method applied to usage data collected in
     * the numeric Data Fields of Meters included for the Data Export Schedule - that
     * is, Data Fields of type **MEASURE**, **INCOME**, or **COST**:
     *
     * - **SUM**. Adds the values.
     * - **MIN**. Uses the minimum value.
     * - **MAX**. Uses the maximum value.
     * - **COUNT**. Counts the number of values.
     * - **LATEST**. Uses the most recent value. Note: Based on the timestamp `ts`
     *   value of usage data measurement submissions. If using this method, please
     *   ensure _distinct_ `ts` values are used for usage data measurement submissions.
     */
    aggregation?: 'SUM' | 'MIN' | 'MAX' | 'COUNT' | 'LATEST' | 'MEAN';

    /**
     * Body param: List of meter IDs for which the usage data will be exported.
     */
    meterIds?: Array<string>;

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
}

export interface ScheduleRetrieveParams {
  /**
   * UUID of the organization
   */
  orgId?: string;
}

export type ScheduleUpdateParams =
  | ScheduleUpdateParams.OperationalDataExportConfigurationRequest
  | ScheduleUpdateParams.UsageDataExportConfigurationRequest;

export declare namespace ScheduleUpdateParams {
  export interface OperationalDataExportConfigurationRequest {
    /**
     * Path param: UUID of the organization
     */
    orgId?: string;

    /**
     * Body param: A list of the entities whose operational data is included in the
     * data export.
     */
    operationalDataTypes: Array<
      | 'BILLS'
      | 'COMMITMENTS'
      | 'ACCOUNTS'
      | 'BALANCES'
      | 'CONTRACTS'
      | 'ACCOUNT_PLANS'
      | 'AGGREGATIONS'
      | 'PLANS'
      | 'PRICING'
      | 'PRICING_BANDS'
      | 'BILL_LINE_ITEMS'
      | 'METERS'
      | 'PRODUCTS'
      | 'COMPOUND_AGGREGATIONS'
      | 'PLAN_GROUPS'
      | 'PLAN_GROUP_LINKS'
      | 'PLAN_TEMPLATES'
      | 'BALANCE_TRANSACTIONS'
    >;

    /**
     * Body param:
     */
    sourceType: 'USAGE' | 'OPERATIONAL';

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

  export interface UsageDataExportConfigurationRequest {
    /**
     * Path param: UUID of the organization
     */
    orgId?: string;

    /**
     * Body param: Specifies the time period for the aggregation of usage data included
     * each time the Data Export Schedule runs:
     *
     * - **ORIGINAL**. Usage data is _not aggregated_. If you select to not aggregate,
     *   then raw usage data measurements collected by all Data Field types and any
     *   Derived Fields on the selected Meters are included in the export. This is the
     *   _Default_.
     *
     * If you want to aggregate usage data for the Export Schedule you must define an
     * `aggregationFrequency`:
     *
     * - **HOUR**. Aggregated hourly.
     * - **DAY**. Aggregated daily.
     * - **WEEK**. Aggregated weekly.
     * - **MONTH**. Aggregated monthly.
     *
     * - If you select to aggregate usage data for a Export Schedule, then only the
     *   aggregated usage data collected by numeric Data Fields of type **MEASURE**,
     *   **INCOME**, or **COST** on selected Meters are included in the export.
     *
     * **NOTE**: If you define an `aggregationFrequency` other than **ORIGINAL** and do
     * not define an `aggregation` method, then you'll receive and error.
     */
    aggregationFrequency: 'ORIGINAL' | 'HOUR' | 'DAY' | 'WEEK' | 'MONTH';

    /**
     * Body param:
     */
    sourceType: 'USAGE' | 'OPERATIONAL';

    /**
     * Body param: Define a time period to control the range of usage data you want the
     * data export to contain when it runs:
     *
     * - **TODAY**. Data collected for the current day up until the time the export
     *   runs.
     * - **YESTERDAY**. Data collected for the day before the export runs - that is,
     *   the 24 hour period from midnight to midnight of the day before.
     * - **WEEK_TO_DATE**. Data collected for the period covering the current week to
     *   the date and time the export runs, and weeks run Monday to Monday.
     * - **CURRENT_MONTH**. Data collected for the current month in which the export is
     *   ran up to and including the date and time the export runs.
     * - **LAST_30_DAYS**. Data collected for the 30 days prior to the date the export
     *   is ran.
     * - **LAST_35_DAYS**. Data collected for the 35 days prior to the date the export
     *   is ran.
     * - **PREVIOUS_WEEK**. Data collected for the previous full week period, and weeks
     *   run Monday to Monday.
     * - **PREVIOUS_MONTH**. Data collected for the previous full month period.
     *
     * For more details and examples, see the
     * [Time Period](https://www.m3ter.com/docs/guides/data-exports/creating-export-schedules#time-period)
     * section in our main User Documentation.
     */
    timePeriod:
      | 'TODAY'
      | 'YESTERDAY'
      | 'WEEK_TO_DATE'
      | 'CURRENT_MONTH'
      | 'LAST_30_DAYS'
      | 'LAST_35_DAYS'
      | 'PREVIOUS_WEEK'
      | 'PREVIOUS_MONTH';

    /**
     * Body param: List of account IDs for which the usage data will be exported.
     */
    accountIds?: Array<string>;

    /**
     * Body param: Specifies the aggregation method applied to usage data collected in
     * the numeric Data Fields of Meters included for the Data Export Schedule - that
     * is, Data Fields of type **MEASURE**, **INCOME**, or **COST**:
     *
     * - **SUM**. Adds the values.
     * - **MIN**. Uses the minimum value.
     * - **MAX**. Uses the maximum value.
     * - **COUNT**. Counts the number of values.
     * - **LATEST**. Uses the most recent value. Note: Based on the timestamp `ts`
     *   value of usage data measurement submissions. If using this method, please
     *   ensure _distinct_ `ts` values are used for usage data measurement submissions.
     */
    aggregation?: 'SUM' | 'MIN' | 'MAX' | 'COUNT' | 'LATEST' | 'MEAN';

    /**
     * Body param: List of meter IDs for which the usage data will be exported.
     */
    meterIds?: Array<string>;

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
}

export interface ScheduleListParams extends CursorParams {
  /**
   * Path param: UUID of the organization
   */
  orgId?: string;

  /**
   * Query param: Data Export Schedule IDs to filter the returned list by.
   */
  ids?: Array<string>;
}

export interface ScheduleDeleteParams {
  /**
   * UUID of the organization
   */
  orgId?: string;
}

Schedules.ScheduleListResponsesCursor = ScheduleListResponsesCursor;

export declare namespace Schedules {
  export {
    type OperationalDataExportSchedule as OperationalDataExportSchedule,
    type UsageDataExportSchedule as UsageDataExportSchedule,
    type ScheduleCreateResponse as ScheduleCreateResponse,
    type ScheduleRetrieveResponse as ScheduleRetrieveResponse,
    type ScheduleUpdateResponse as ScheduleUpdateResponse,
    type ScheduleListResponse as ScheduleListResponse,
    type ScheduleDeleteResponse as ScheduleDeleteResponse,
    ScheduleListResponsesCursor as ScheduleListResponsesCursor,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleRetrieveParams as ScheduleRetrieveParams,
    type ScheduleUpdateParams as ScheduleUpdateParams,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleDeleteParams as ScheduleDeleteParams,
  };
}
