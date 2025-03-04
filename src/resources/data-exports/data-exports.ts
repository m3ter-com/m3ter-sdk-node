// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DestinationsAPI from './destinations';
import {
  DataExportDestination,
  DataExportDestinationsCursor,
  DestinationCreateParams,
  DestinationCreateResponse,
  DestinationDeleteParams,
  DestinationDeleteResponse,
  DestinationListParams,
  DestinationRetrieveParams,
  DestinationRetrieveResponse,
  DestinationUpdateParams,
  DestinationUpdateResponse,
  Destinations,
} from './destinations';
import * as JobsAPI from './jobs';
import {
  DataExportJob,
  DataExportJobsCursor,
  JobGetDownloadURLParams,
  JobGetDownloadURLResponse,
  JobListParams,
  JobRetrieveParams,
  Jobs,
} from './jobs';
import * as SchedulesAPI from './schedules';
import {
  OperationalDataExportScheduleRequest,
  OperationalDataExportScheduleResponse,
  ScheduleCreateParams,
  ScheduleCreateResponse,
  ScheduleDeleteParams,
  ScheduleDeleteResponse,
  ScheduleListParams,
  ScheduleListResponse,
  ScheduleListResponsesCursor,
  ScheduleRetrieveParams,
  ScheduleRetrieveResponse,
  ScheduleUpdateParams,
  ScheduleUpdateResponse,
  Schedules,
  UsageDataExportScheduleRequest,
  UsageDataExportScheduleResponse,
} from './schedules';

export class DataExports extends APIResource {
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  schedules: SchedulesAPI.Schedules = new SchedulesAPI.Schedules(this._client);

  /**
   * Trigger an ad-hoc Data Export. Each ad-hoc Export can be configured for
   * exporting _only one of_ either Usage or Operational data:
   *
   * **Operational Data Exports**.
   *
   * - **Entity Types**. Use the `operationalDataTypes` parameter to specify the
   *   entities whose operational data you want to include in the ad-hoc export.
   * - **Export Files**. For each of the entity types you select, when the ad-hoc
   *   export runs a separate file is compiled containing the operational data for
   *   all entities of that type that exist in your Organization
   *
   * **Usage Data Exports**.
   *
   * - **Meters/Accounts**. Select the Meters and Accounts whose usage data you want
   *   to include in the ad-hoc export.
   * - **Aggregated or non-aggregated data**:
   *
   * 1. If you _don't want to aggregate_ the usage data collected by the selected
   *    Meters, use **ORIGINAL** for `aggregationFrequency`, which is the _default_.
   *    This means the raw usage data collected by any type of Data Fields and the
   *    values for any Derived Fields on the selected Meters will be included in the
   *    ad-hoc export.
   * 2. If you _do want to aggregate_ the usage data collected by the selected
   *    Meters, use one of the other options for `aggregationFrequency`: **HOUR**,
   *    **DAY**, **WEEK**, or **MONTH**. You _must_ then also specified an
   *    `aggregation` method to be used on the usage data before export. Importantly,
   *    if you do aggregate usage data, only the usage data collected by any numeric
   *    Data Fields on the selected Meters - those of type **MEASURE**, **INCOME**,
   *    or **COST** - will be included in the ad-hoc export.
   *
   * **Date Range for Operational Data Exports**. To restrict the operational data
   * included in the export by a date/time range, use the `startDate` and `endDate`
   * date/time request parameters to specify the period. Constraints:
   *
   * - `startDate` must be before `endDate`.
   * - `startDate` with no `endDate` is valid.
   * - No `startDate` with `endDate` is valid.
   * - `endDate` must be before present date/time.
   * - Both are optional and if neither is defined, the export includes all data for
   *   selected entities.
   *
   * **Date Range for Usage Data Exports**. To restrict the usage data included in
   * the export by date/time range, use the `timePeriod` request parameter to define
   * a set date range. Alternatively, define a custom date range using the
   * `startDate` and `endDate` date/time parameters:
   *
   * - Both `startDate` and `endDate` are required.
   * - You cannot use a `startDate` earlier than 35 days in the past.
   * - The `endDate` is valid up to tomorrow at 00:00.
   * - You must define a Date Range using **timePeriod** or **startDate/endDate**,
   *   but they are mutually exclusive and you cannot use them together.
   *
   * **NOTE:** You can use the ExportJob `id` returned to check the status of the
   * triggered ad-hoc export. See the
   * [ExportJob](https://www.m3ter.com/docs/api#tag/ExportJob) section of this API
   * Reference.
   */
  createAdhoc(
    params: DataExportCreateAdhocParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdhocExport> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/dataexports/adhoc`, { body, ...options });
  }
}

/**
 * Response containing data export ad-hoc jobId
 */
export interface AdhocExport {
  /**
   * The id of the job
   */
  jobId?: string;
}

export interface AdHocOperationalDataRequest {
  /**
   * The list of the operational data types should be exported for.
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

  sourceType: 'USAGE' | 'OPERATIONAL';

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

export interface AdHocUsageDataRequest {
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
  aggregationFrequency: 'ORIGINAL' | 'HOUR' | 'DAY' | 'WEEK' | 'MONTH';

  sourceType: 'USAGE' | 'OPERATIONAL';

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

export type DataExportCreateAdhocParams =
  | DataExportCreateAdhocParams.AdHocOperationalDataRequest
  | DataExportCreateAdhocParams.AdHocUsageDataRequest;

export declare namespace DataExportCreateAdhocParams {
  export interface AdHocOperationalDataRequest {
    /**
     * Path param: UUID of the organization
     */
    orgId?: string;

    /**
     * Body param: The list of the operational data types should be exported for.
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

  export interface AdHocUsageDataRequest {
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
    timePeriod?:
      | 'TODAY'
      | 'YESTERDAY'
      | 'WEEK_TO_DATE'
      | 'CURRENT_MONTH'
      | 'LAST_30_DAYS'
      | 'LAST_35_DAYS'
      | 'PREVIOUS_WEEK'
      | 'PREVIOUS_MONTH';

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

DataExports.Destinations = Destinations;
DataExports.DataExportDestinationsCursor = DataExportDestinationsCursor;
DataExports.Jobs = Jobs;
DataExports.DataExportJobsCursor = DataExportJobsCursor;
DataExports.Schedules = Schedules;
DataExports.ScheduleListResponsesCursor = ScheduleListResponsesCursor;

export declare namespace DataExports {
  export {
    type AdhocExport as AdhocExport,
    type AdHocOperationalDataRequest as AdHocOperationalDataRequest,
    type AdHocUsageDataRequest as AdHocUsageDataRequest,
    type DataExportCreateAdhocParams as DataExportCreateAdhocParams,
  };

  export {
    Destinations as Destinations,
    type DataExportDestination as DataExportDestination,
    type DestinationCreateResponse as DestinationCreateResponse,
    type DestinationRetrieveResponse as DestinationRetrieveResponse,
    type DestinationUpdateResponse as DestinationUpdateResponse,
    type DestinationDeleteResponse as DestinationDeleteResponse,
    DataExportDestinationsCursor as DataExportDestinationsCursor,
    type DestinationCreateParams as DestinationCreateParams,
    type DestinationRetrieveParams as DestinationRetrieveParams,
    type DestinationUpdateParams as DestinationUpdateParams,
    type DestinationListParams as DestinationListParams,
    type DestinationDeleteParams as DestinationDeleteParams,
  };

  export {
    Jobs as Jobs,
    type DataExportJob as DataExportJob,
    type JobGetDownloadURLResponse as JobGetDownloadURLResponse,
    DataExportJobsCursor as DataExportJobsCursor,
    type JobRetrieveParams as JobRetrieveParams,
    type JobListParams as JobListParams,
    type JobGetDownloadURLParams as JobGetDownloadURLParams,
  };

  export {
    Schedules as Schedules,
    type OperationalDataExportScheduleRequest as OperationalDataExportScheduleRequest,
    type OperationalDataExportScheduleResponse as OperationalDataExportScheduleResponse,
    type UsageDataExportScheduleRequest as UsageDataExportScheduleRequest,
    type UsageDataExportScheduleResponse as UsageDataExportScheduleResponse,
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
