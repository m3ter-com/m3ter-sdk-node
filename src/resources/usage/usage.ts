// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as FileUploadsAPI from './file-uploads/file-uploads';
import {
  FileUploadGenerateUploadURLParams,
  FileUploadGenerateUploadURLResponse,
  FileUploads,
} from './file-uploads/file-uploads';

export class Usage extends APIResource {
  fileUploads: FileUploadsAPI.FileUploads = new FileUploadsAPI.FileUploads(this._client);

  /**
   * Returns a presigned download URL for failed ingest file download based on the
   * file path provided.
   *
   * If a usage data ingest measurement you submit to the m3ter platform fails, an
   * `ingest.validation.failure` Event is generated. Use this call to obtain a
   * download URL which you can then use to download a file containing details of
   * what went wrong with the attempted usage data measurement ingest, and allowing
   * you to follow-up and resolve the issue.
   *
   * To obtain the `file` query parameter:
   *
   * - Use the
   *   [List Events](https://www.m3ter.com/docs/api#tag/Events/operation/ListEventFields)
   *   call with the `ingest.validation.failure` for the `eventName` query parameter.
   * - The response contains a `getDownloadUrl` response parameter and this contains
   *   the file path you can use to obtain the failed ingest file download URL.
   *
   * **Notes:**
   *
   * - The presigned Url returned to use for failed ingest file download is
   *   time-bound and expires after 5 minutes.
   * - If you make a List Events call for `ingest.validation.failure` Events in your
   *   Organization, then you can perform this **GET** call using the full URL
   *   returned for any ingest failure Event to obtain a failed ingest file download
   *   URL for the Event.
   */
  getFailedIngestDownloadURL(
    params?: UsageGetFailedIngestDownloadURLParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadURLResponse>;
  getFailedIngestDownloadURL(options?: Core.RequestOptions): Core.APIPromise<DownloadURLResponse>;
  getFailedIngestDownloadURL(
    params: UsageGetFailedIngestDownloadURLParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadURLResponse> {
    if (isRequestOptions(params)) {
      return this.getFailedIngestDownloadURL({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.get(`/organizations/${orgId}/measurements/failedIngest/getDownloadUrl`, {
      query,
      ...options,
    });
  }

  /**
   * Query and filter usage data
   */
  query(params: UsageQueryParams, options?: Core.RequestOptions): Core.APIPromise<UsageQueryResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/usage/query`, { body, ...options });
  }

  /**
   * Submit a measurement or multiple measurements to the m3ter platform. The maximum
   * size of the payload needs to be less than 512,000 bytes.
   *
   * **NOTES:**
   *
   * - **Non-existent Accounts.** The `account` request parameter is required.
   *   However, if you want to submit a usage data measurement for an Account which
   *   does not yet exist in your Organization, you can use an `account` code for a
   *   non-existent Account. A new skeleton Account will be automatically created.
   *   The usage data measurement is accepted and ingested as data belonging to the
   *   new auto-created Account. At a later date, you can edit the Account's
   *   Code,??Name, and??e-mail address. For more details, see
   *   [Submittting Usage Data for Non-Existent Accounts](https://www.m3ter.com/docs/guides/billing-and-usage-data/submitting-usage-data/submitting-usage-data-for-non-existent-accounts)
   *   in our main documentation.
   * - **Usage Data Adjustments.** If you need to make corrections for billing
   *   retrospectively against an Account, you can use date/time values in the past
   *   for the `ts` (timestamp) request parameter to submit positive or negative
   *   usage data amounts to correct and reconcile earlier billing anomalies. For
   *   more details, see
   *   [Submittting Usage Data Adjustments Using Timestamp](https://www.m3ter.com/docs/guides/billing-and-usage-data/submitting-usage-data/submitting-usage-data-adjustments-using-timestamp)
   *   in our main documentation.
   * - **Ingest Validation Failure Events.** After the intial submission of a usage
   *   data measurement to the Ingest API, a data enrichment stage is performed to
   *   check for any errors in the usage data measurement, such as a missing field.
   *   If an error is identified, this might result in the submission being rejected.
   *   In these cases, an _ingest validation failure_ Event is generated, which you
   *   can review on the
   *   [Ingest Events](https://www.m3ter.com/docs/guides/billing-and-usage-data/submitting-usage-data/reviewing-and-resolving-ingest-events)
   *   page in the Console. See also the
   *   [Events](https://www.m3ter.com/docs/api#tag/Events) section in this API
   *   Reference.
   *
   * **IMPORTANT! - Use of PII:** The use of any of your end-customers' Personally
   * Identifiable Information (PII) in m3ter is restricted to a few fields on the
   * **Account** entity. Please ensure that any measurements you submit do not
   * contain any end-customer PII data. See the
   * [Introduction section](https://www.m3ter.com/docs/api#section/Introduction)
   * above for more details.
   */
  submit(
    params: UsageSubmitParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubmitMeasurementsResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/measurements`, { body, ...options });
  }
}

/**
 * It contains details for downloading a file
 */
export interface DownloadURLResponse {
  /**
   * The presigned download URL
   */
  url?: string;
}

export interface SubmitMeasurementsResponse {
  /**
   * `accepted` is returned when successful.
   */
  result?: string;
}

export interface UsageQueryResponse {
  data?: Array<Record<string, unknown>>;

  /**
   * Flag to know if there are more data available than the one returned
   */
  hasMoreData?: boolean;
}

export interface UsageGetFailedIngestDownloadURLParams {
  /**
   * Path param: UUID of the Organization
   */
  orgId?: string;

  /**
   * Query param: The file path
   */
  file?: string;
}

export interface UsageQueryParams {
  /**
   * Path param: UUID of the organization
   */
  orgId?: string;

  /**
   * Body param: ISO 8601 formatted end date to filter by.
   */
  endDate: string;

  /**
   * Body param: ISO 8601 formatted start date to filter by.
   */
  startDate: string;

  /**
   * Body param:
   */
  accountIds?: Array<string>;

  /**
   * Body param:
   */
  aggregations?: Array<UsageQueryParams.Aggregation>;

  /**
   * Body param:
   */
  dimensionFilters?: Array<UsageQueryParams.DimensionFilter>;

  /**
   * Body param:
   */
  groups?: Array<
    | UsageQueryParams.DataExplorerAccountGroup
    | UsageQueryParams.DataExplorerDimensionGroup
    | UsageQueryParams.DataExplorerTimeGroup
  >;

  /**
   * Body param:
   */
  limit?: number;

  /**
   * Body param:
   */
  meterIds?: Array<string>;
}

export namespace UsageQueryParams {
  export interface Aggregation {
    /**
     * Field code
     */
    fieldCode: string;

    /**
     * Type of field
     */
    fieldType: 'DIMENSION' | 'MEASURE';

    /**
     * Aggregation function
     */
    function: 'SUM' | 'MIN' | 'MAX' | 'COUNT' | 'LATEST' | 'MEAN' | 'UNIQUE';

    /**
     * Meter ID
     */
    meterId: string;
  }

  export interface DimensionFilter {
    /**
     * Field code
     */
    fieldCode: string;

    /**
     * Meter ID
     */
    meterId: string;

    /**
     * Values to filter by
     */
    values: Array<string>;
  }

  /**
   * Group by account
   */
  export interface DataExplorerAccountGroup {
    groupType?: 'ACCOUNT' | 'DIMENSION' | 'TIME';
  }

  /**
   * Group by dimension
   */
  export interface DataExplorerDimensionGroup {
    /**
     * Field code to group by
     */
    fieldCode: string;

    /**
     * Meter ID to group by
     */
    meterId: string;

    groupType?: 'ACCOUNT' | 'DIMENSION' | 'TIME';
  }

  /**
   * Group by time
   */
  export interface DataExplorerTimeGroup {
    /**
     * Frequency of usage data
     */
    frequency: 'DAY' | 'HOUR' | 'WEEK' | 'MONTH' | 'QUARTER';

    groupType?: 'ACCOUNT' | 'DIMENSION' | 'TIME';
  }
}

export interface UsageSubmitParams {
  /**
   * Path param: UUID of the organization. The Organization represents your company
   * as a direct customer of the m3ter service.
   */
  orgId?: string;

  /**
   * Body param: Request containing the usage data measurements for submission.
   */
  measurements: Array<UsageSubmitParams.Measurement>;
}

export namespace UsageSubmitParams {
  export interface Measurement {
    /**
     * Code of the Account the measurement is for.
     */
    account: string;

    /**
     * Short code identifying the Meter the measurement is for.
     */
    meter: string;

    /**
     * Timestamp for the measurement _(in ISO 8601 format)_.
     */
    ts: string;

    /**
     * 'cost' values
     */
    cost?: Record<string, number>;

    /**
     * End timestamp for the measurement _(in ISO 8601 format)_. _(Optional)_.
     *
     * Can be used in the case a usage event needs to have an explicit start and end
     * rather than being instantaneous.
     */
    ets?: string;

    /**
     * 'income' values
     */
    income?: Record<string, number>;

    /**
     * 'measure' values
     */
    measure?: Record<string, number>;

    /**
     * 'metadata' values
     */
    metadata?: Record<string, string>;

    /**
     * 'other' values
     */
    other?: Record<string, string>;

    /**
     * Unique ID for this measurement.
     */
    uid?: string;

    /**
     * 'what' values
     */
    what?: Record<string, string>;

    /**
     * 'where' values
     */
    where?: Record<string, string>;

    /**
     * 'who' values
     */
    who?: Record<string, string>;
  }
}

Usage.FileUploads = FileUploads;

export declare namespace Usage {
  export {
    type DownloadURLResponse as DownloadURLResponse,
    type SubmitMeasurementsResponse as SubmitMeasurementsResponse,
    type UsageQueryResponse as UsageQueryResponse,
    type UsageGetFailedIngestDownloadURLParams as UsageGetFailedIngestDownloadURLParams,
    type UsageQueryParams as UsageQueryParams,
    type UsageSubmitParams as UsageSubmitParams,
  };

  export {
    FileUploads as FileUploads,
    type FileUploadGenerateUploadURLResponse as FileUploadGenerateUploadURLResponse,
    type FileUploadGenerateUploadURLParams as FileUploadGenerateUploadURLParams,
  };
}
