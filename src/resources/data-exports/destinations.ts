// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { Cursor, type CursorParams } from '../../pagination';

export class Destinations extends APIResource {
  /**
   * Create a new Export Destination to use for your Data Export Schedules or Ad-Hoc
   * Data Exports.
   *
   * **NOTE:** Currently, you can only create Export Destinations using an S3 bucket
   * on your AWS Account.
   */
  create(
    params: DestinationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DestinationCreateResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.post(`/organizations/${orgId}/dataexports/destinations`, { body, ...options });
  }

  /**
   * Retrieve an Export Destination for the given UUID.
   */
  retrieve(
    id: string,
    params?: DestinationRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DestinationRetrieveResponse>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<DestinationRetrieveResponse>;
  retrieve(
    id: string,
    params: DestinationRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DestinationRetrieveResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.get(`/organizations/${orgId}/dataexports/destinations/${id}`, options);
  }

  /**
   * Update an Export Destination for the given UUID.
   *
   * **NOTE:** Currently, only Export Destinations using an S3 bucket on your AWS
   * Account are supported.
   */
  update(
    id: string,
    params: DestinationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DestinationUpdateResponse> {
    const { orgId = this._client.orgId, ...body } = params;
    return this._client.put(`/organizations/${orgId}/dataexports/destinations/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of Export Destination entities. You can filter the list of
   * Destinations returned by UUID.
   */
  list(
    params?: DestinationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DataExportDestinationsCursor, DataExportDestination>;
  list(options?: Core.RequestOptions): Core.PagePromise<DataExportDestinationsCursor, DataExportDestination>;
  list(
    params: DestinationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DataExportDestinationsCursor, DataExportDestination> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { orgId = this._client.orgId, ...query } = params;
    return this._client.getAPIList(
      `/organizations/${orgId}/dataexports/destinations`,
      DataExportDestinationsCursor,
      { query, ...options },
    );
  }

  /**
   * Delete an Export Destination for the given UUID.
   *
   * **NOTE:** If you attempt to delete an Export Destination that is currently
   * linked to a Data Export Schedule, an error message is returned and you won't be
   * able to delete the Destination.
   */
  delete(
    id: string,
    params?: DestinationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DestinationDeleteResponse>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<DestinationDeleteResponse>;
  delete(
    id: string,
    params: DestinationDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DestinationDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { orgId = this._client.orgId } = params;
    return this._client.delete(`/organizations/${orgId}/dataexports/destinations/${id}`, options);
  }
}

export class DataExportDestinationsCursor extends Cursor<DataExportDestination> {}

export interface DataExportDestination {
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
   * The code of the data Export Destination.
   */
  code?: string;

  /**
   * The id of the user who created the Export Destination.
   */
  createdBy?: string;

  /**
   * The DateTime when the Export Destination was created.
   */
  dtCreated?: string;

  /**
   * The DateTime when the Export Destination was last modified.
   */
  dtLastModified?: string;

  /**
   * The id of the user who last modified the Export Destination.
   */
  lastModifiedBy?: string;

  /**
   * The name of the data Export Destination.
   */
  name?: string;
}

export interface DestinationCreateResponse extends DataExportDestination {
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
   * Name of the S3 bucket for the Export Destination.
   */
  bucketName?: string;

  /**
   * The specified IAM role ARN with PutObject permission for the specified
   * `bucketName`, which allows the service to upload Data Exports to your S3 bucket.
   */
  iamRoleArn?: string;

  /**
   * Specify how you want the file path to be structured in your bucket destination -
   * by Time first (Default) or Type first.
   *
   * Type is dependent on whether the Export is for Usage data or Operational data:
   *
   * - **Usage.** Type is `measurements`.
   * - **Operational.** Type is one of the entities for which operational data
   *   exports are available, such as `account`, `commitment`, `meter`, and so on.
   *
   * Example for Usage Data Export using .CSV format:
   *
   * - Time first:
   *   `{bucketName}/{prefix}/orgId={orgId}/date=2025-01-27/hour=10/type=measurements/b9a317a6-860a-40f9-9bf4-e65c44c72c94_measurements.csv.gz`
   * - Type first:
   *   `{bucketName}/{prefix}/orgId={orgId}/type=measurements/date=2025-01-27/hour=10/b9a317a6-860a-40f9-9bf4-e65c44c72c94_measurements.csv.gz`
   */
  partitionOrder?: 'TYPE_FIRST' | 'TIME_FIRST';

  /**
   * Location in specified S3 bucket for the Export Destination. If no `prefix` is
   * specified, then the root of the bucket is used.
   */
  prefix?: string;
}

export interface DestinationRetrieveResponse extends DataExportDestination {
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
   * Name of the S3 bucket for the Export Destination.
   */
  bucketName?: string;

  /**
   * The specified IAM role ARN with PutObject permission for the specified
   * `bucketName`, which allows the service to upload Data Exports to your S3 bucket.
   */
  iamRoleArn?: string;

  /**
   * Specify how you want the file path to be structured in your bucket destination -
   * by Time first (Default) or Type first.
   *
   * Type is dependent on whether the Export is for Usage data or Operational data:
   *
   * - **Usage.** Type is `measurements`.
   * - **Operational.** Type is one of the entities for which operational data
   *   exports are available, such as `account`, `commitment`, `meter`, and so on.
   *
   * Example for Usage Data Export using .CSV format:
   *
   * - Time first:
   *   `{bucketName}/{prefix}/orgId={orgId}/date=2025-01-27/hour=10/type=measurements/b9a317a6-860a-40f9-9bf4-e65c44c72c94_measurements.csv.gz`
   * - Type first:
   *   `{bucketName}/{prefix}/orgId={orgId}/type=measurements/date=2025-01-27/hour=10/b9a317a6-860a-40f9-9bf4-e65c44c72c94_measurements.csv.gz`
   */
  partitionOrder?: 'TYPE_FIRST' | 'TIME_FIRST';

  /**
   * Location in specified S3 bucket for the Export Destination. If no `prefix` is
   * specified, then the root of the bucket is used.
   */
  prefix?: string;
}

export interface DestinationUpdateResponse extends DataExportDestination {
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
   * Name of the S3 bucket for the Export Destination.
   */
  bucketName?: string;

  /**
   * The specified IAM role ARN with PutObject permission for the specified
   * `bucketName`, which allows the service to upload Data Exports to your S3 bucket.
   */
  iamRoleArn?: string;

  /**
   * Specify how you want the file path to be structured in your bucket destination -
   * by Time first (Default) or Type first.
   *
   * Type is dependent on whether the Export is for Usage data or Operational data:
   *
   * - **Usage.** Type is `measurements`.
   * - **Operational.** Type is one of the entities for which operational data
   *   exports are available, such as `account`, `commitment`, `meter`, and so on.
   *
   * Example for Usage Data Export using .CSV format:
   *
   * - Time first:
   *   `{bucketName}/{prefix}/orgId={orgId}/date=2025-01-27/hour=10/type=measurements/b9a317a6-860a-40f9-9bf4-e65c44c72c94_measurements.csv.gz`
   * - Type first:
   *   `{bucketName}/{prefix}/orgId={orgId}/type=measurements/date=2025-01-27/hour=10/b9a317a6-860a-40f9-9bf4-e65c44c72c94_measurements.csv.gz`
   */
  partitionOrder?: 'TYPE_FIRST' | 'TIME_FIRST';

  /**
   * Location in specified S3 bucket for the Export Destination. If no `prefix` is
   * specified, then the root of the bucket is used.
   */
  prefix?: string;
}

export interface DestinationDeleteResponse extends DataExportDestination {
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
   * Name of the S3 bucket for the Export Destination.
   */
  bucketName?: string;

  /**
   * The specified IAM role ARN with PutObject permission for the specified
   * `bucketName`, which allows the service to upload Data Exports to your S3 bucket.
   */
  iamRoleArn?: string;

  /**
   * Specify how you want the file path to be structured in your bucket destination -
   * by Time first (Default) or Type first.
   *
   * Type is dependent on whether the Export is for Usage data or Operational data:
   *
   * - **Usage.** Type is `measurements`.
   * - **Operational.** Type is one of the entities for which operational data
   *   exports are available, such as `account`, `commitment`, `meter`, and so on.
   *
   * Example for Usage Data Export using .CSV format:
   *
   * - Time first:
   *   `{bucketName}/{prefix}/orgId={orgId}/date=2025-01-27/hour=10/type=measurements/b9a317a6-860a-40f9-9bf4-e65c44c72c94_measurements.csv.gz`
   * - Type first:
   *   `{bucketName}/{prefix}/orgId={orgId}/type=measurements/date=2025-01-27/hour=10/b9a317a6-860a-40f9-9bf4-e65c44c72c94_measurements.csv.gz`
   */
  partitionOrder?: 'TYPE_FIRST' | 'TIME_FIRST';

  /**
   * Location in specified S3 bucket for the Export Destination. If no `prefix` is
   * specified, then the root of the bucket is used.
   */
  prefix?: string;
}

export interface DestinationCreateParams {
  /**
   * Path param: UUID of the organization
   */
  orgId?: string;

  /**
   * Body param: Name of the S3 bucket for the Export Destination.
   */
  bucketName: string;

  /**
   * Body param: The code of the Export Destination.
   */
  code: string;

  /**
   * Body param: To enable m3ter to upload a Data Exports to your S3 bucket, the
   * service has to assume an IAM role with PutObject permission for the specified
   * `bucketName`. Create a suitable IAM role in your AWS account and enter ARN:
   *
   * **Formatting Constraints:**
   *
   * - The IAM role ARN must begin with "arn:aws:iam".
   * - The general format required is:
   *   "arn:aws:iam::<aws account id>:role/<role name>". For example:
   *   "arn:aws:iam::922609978421:role/IAMRole636".
   * - If the `iamRoleArn` used doesn't comply with this format, then an error
   *   message will be returned.
   *
   * **More Details:** For more details and examples of the Permission and Trust
   * Policies you can use to create the required IAM Role ARN, see
   * [Creating Data Export Destinations](https://www.m3ter.com/docs/guides/data-exports/creating-data-export-destinations)
   * in our main User documentation.
   */
  iamRoleArn: string;

  /**
   * Body param: The name of the Export Destination.
   */
  name: string;

  /**
   * Body param: Specify how you want the file path to be structured in your bucket
   * destination - by Time first (Default) or Type first.
   *
   * Type is dependent on whether the Export is for Usage data or Operational data:
   *
   * - **Usage.** Type is `measurements`.
   * - **Operational.** Type is one of the entities for which operational data
   *   exports are available, such as `account`, `commitment`, `meter`, and so on.
   *
   * Example for Usage Data Export using .CSV format:
   *
   * - Time first:
   *   `{bucketName}/{prefix}/orgId={orgId}/date=2025-01-27/hour=10/type=measurements/b9a317a6-860a-40f9-9bf4-e65c44c72c94_measurements.csv.gz`
   * - Type first:
   *   `{bucketName}/{prefix}/orgId={orgId}/type=measurements/date=2025-01-27/hour=10/b9a317a6-860a-40f9-9bf4-e65c44c72c94_measurements.csv.gz`
   */
  partitionOrder?: 'TYPE_FIRST' | 'TIME_FIRST' | null;

  /**
   * Body param: Location in specified S3 bucket for the Export Destination. If you
   * omit a `prefix`, then the root of the bucket will be used.
   */
  prefix?: string;

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

export interface DestinationRetrieveParams {
  /**
   * UUID of the organization
   */
  orgId?: string;
}

export interface DestinationUpdateParams {
  /**
   * Path param: UUID of the organization
   */
  orgId?: string;

  /**
   * Body param: Name of the S3 bucket for the Export Destination.
   */
  bucketName: string;

  /**
   * Body param: The code of the Export Destination.
   */
  code: string;

  /**
   * Body param: To enable m3ter to upload a Data Exports to your S3 bucket, the
   * service has to assume an IAM role with PutObject permission for the specified
   * `bucketName`. Create a suitable IAM role in your AWS account and enter ARN:
   *
   * **Formatting Constraints:**
   *
   * - The IAM role ARN must begin with "arn:aws:iam".
   * - The general format required is:
   *   "arn:aws:iam::<aws account id>:role/<role name>". For example:
   *   "arn:aws:iam::922609978421:role/IAMRole636".
   * - If the `iamRoleArn` used doesn't comply with this format, then an error
   *   message will be returned.
   *
   * **More Details:** For more details and examples of the Permission and Trust
   * Policies you can use to create the required IAM Role ARN, see
   * [Creating Data Export Destinations](https://www.m3ter.com/docs/guides/data-exports/creating-data-export-destinations)
   * in our main User documentation.
   */
  iamRoleArn: string;

  /**
   * Body param: The name of the Export Destination.
   */
  name: string;

  /**
   * Body param: Specify how you want the file path to be structured in your bucket
   * destination - by Time first (Default) or Type first.
   *
   * Type is dependent on whether the Export is for Usage data or Operational data:
   *
   * - **Usage.** Type is `measurements`.
   * - **Operational.** Type is one of the entities for which operational data
   *   exports are available, such as `account`, `commitment`, `meter`, and so on.
   *
   * Example for Usage Data Export using .CSV format:
   *
   * - Time first:
   *   `{bucketName}/{prefix}/orgId={orgId}/date=2025-01-27/hour=10/type=measurements/b9a317a6-860a-40f9-9bf4-e65c44c72c94_measurements.csv.gz`
   * - Type first:
   *   `{bucketName}/{prefix}/orgId={orgId}/type=measurements/date=2025-01-27/hour=10/b9a317a6-860a-40f9-9bf4-e65c44c72c94_measurements.csv.gz`
   */
  partitionOrder?: 'TYPE_FIRST' | 'TIME_FIRST' | null;

  /**
   * Body param: Location in specified S3 bucket for the Export Destination. If you
   * omit a `prefix`, then the root of the bucket will be used.
   */
  prefix?: string;

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

export interface DestinationListParams extends CursorParams {
  /**
   * Path param: UUID of the organization
   */
  orgId?: string;

  /**
   * Query param: List of Export Destination UUIDs to retrieve.
   */
  ids?: Array<string>;
}

export interface DestinationDeleteParams {
  /**
   * UUID of the organization
   */
  orgId?: string;
}

Destinations.DataExportDestinationsCursor = DataExportDestinationsCursor;

export declare namespace Destinations {
  export {
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
}
