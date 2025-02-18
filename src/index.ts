// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type CursorParams, CursorResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  Aggregation,
  AggregationCreateParams,
  AggregationListParams,
  AggregationUpdateParams,
  Aggregations,
  AggregationsCursor,
} from './resources/aggregations';
import {
  Authentication,
  AuthenticationGetBearerTokenParams,
  AuthenticationGetBearerTokenResponse,
} from './resources/authentication';
import {
  CompoundAggregation,
  CompoundAggregationCreateParams,
  CompoundAggregationListParams,
  CompoundAggregationUpdateParams,
  CompoundAggregations,
  CompoundAggregationsCursor,
} from './resources/compound-aggregations';
import {
  Counter,
  CounterCreateParams,
  CounterListParams,
  CounterUpdateParams,
  Counters,
  CountersCursor,
} from './resources/counters';
import {
  Meter,
  MeterCreateParams,
  MeterListParams,
  MeterUpdateParams,
  Meters,
  MetersCursor,
} from './resources/meters';
import {
  Product,
  ProductCreateParams,
  ProductListParams,
  ProductUpdateParams,
  Products,
  ProductsCursor,
} from './resources/products';

export interface ClientOptions {
  /**
   * Defaults to process.env['M3TER_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Defaults to process.env['M3TER_API_SECRET'].
   */
  apiSecret?: string | undefined;

  /**
   * Defaults to process.env['M3TER_API_TOKEN'].
   */
  token?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['M3TER_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;

  /**
   * By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
   * Only set this option to `true` if you understand the risks and have appropriate mitigations in place.
   */
  dangerouslyAllowBrowser?: boolean | undefined;
}

/**
 * API Client for interfacing with the M3ter API.
 */
export class M3ter extends Core.APIClient {
  apiKey: string;
  apiSecret: string;
  token: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the M3ter API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['M3TER_API_KEY'] ?? undefined]
   * @param {string | undefined} [opts.apiSecret=process.env['M3TER_API_SECRET'] ?? undefined]
   * @param {string | null | undefined} [opts.token=process.env['M3TER_API_TOKEN'] ?? null]
   * @param {string} [opts.baseURL=process.env['M3TER_BASE_URL'] ?? https://api.m3ter.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   * @param {boolean} [opts.dangerouslyAllowBrowser=false] - By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
   */
  constructor({
    baseURL = Core.readEnv('M3TER_BASE_URL'),
    apiKey = Core.readEnv('M3TER_API_KEY'),
    apiSecret = Core.readEnv('M3TER_API_SECRET'),
    token = Core.readEnv('M3TER_API_TOKEN') ?? null,
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.M3terError(
        "The M3TER_API_KEY environment variable is missing or empty; either provide it, or instantiate the M3ter client with an apiKey option, like new M3ter({ apiKey: 'My API Key' }).",
      );
    }
    if (apiSecret === undefined) {
      throw new Errors.M3terError(
        "The M3TER_API_SECRET environment variable is missing or empty; either provide it, or instantiate the M3ter client with an apiSecret option, like new M3ter({ apiSecret: 'My API Secret' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      apiSecret,
      token,
      ...opts,
      baseURL: baseURL || `https://api.m3ter.com`,
    };

    if (!options.dangerouslyAllowBrowser && Core.isRunningInBrowser()) {
      throw new Errors.M3terError(
        'This is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew M3ter({ dangerouslyAllowBrowser: true })',
      );
    }

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.token = token;
  }

  authentication: API.Authentication = new API.Authentication(this);
  aggregations: API.Aggregations = new API.Aggregations(this);
  compoundAggregations: API.CompoundAggregations = new API.CompoundAggregations(this);
  counters: API.Counters = new API.Counters(this);
  meters: API.Meters = new API.Meters(this);
  products: API.Products = new API.Products(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override validateHeaders(headers: Core.Headers, customHeaders: Core.Headers) {
    // When making the token request we have an `authorization` header in `customHeaders`.
    // Using this to skip validating the token on token requests themselves.
    if (customHeaders['authorization']) {
      return;
    }

    if (this.token && headers['authorization']) {
      return;
    }
    if (customHeaders['authorization'] === null) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected the token to be set. Or for the "Authorization" headers to be explicitly omitted',
    );
  }

  // This is the earliest async hook we have to obtain a token, before the `authHeaders` is called
  // on the request.
  protected override async prepareOptions(options: Core.FinalRequestOptions): Promise<void> {
    // Prevent infinite loop of token requests.
    if (!this.token && !options.path.endsWith('/oauth/token')) {
      const auth = Core.toBase64(`${this.apiKey}:${this.apiSecret}`);
      const token = await this.authentication.getBearerToken(
        { grant_type: 'client_credentials' },
        { headers: { authorization: `Basic ${auth}` } },
      );
      this.token = token.access_token;
    }
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.token == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.token}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static M3ter = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static M3terError = Errors.M3terError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

M3ter.Authentication = Authentication;
M3ter.Aggregations = Aggregations;
M3ter.AggregationsCursor = AggregationsCursor;
M3ter.CompoundAggregations = CompoundAggregations;
M3ter.CompoundAggregationsCursor = CompoundAggregationsCursor;
M3ter.Counters = Counters;
M3ter.CountersCursor = CountersCursor;
M3ter.Meters = Meters;
M3ter.MetersCursor = MetersCursor;
M3ter.Products = Products;
M3ter.ProductsCursor = ProductsCursor;
export declare namespace M3ter {
  export type RequestOptions = Core.RequestOptions;

  export import Cursor = Pagination.Cursor;
  export { type CursorParams as CursorParams, type CursorResponse as CursorResponse };

  export {
    Authentication as Authentication,
    type AuthenticationGetBearerTokenResponse as AuthenticationGetBearerTokenResponse,
    type AuthenticationGetBearerTokenParams as AuthenticationGetBearerTokenParams,
  };

  export {
    Aggregations as Aggregations,
    type Aggregation as Aggregation,
    AggregationsCursor as AggregationsCursor,
    type AggregationCreateParams as AggregationCreateParams,
    type AggregationUpdateParams as AggregationUpdateParams,
    type AggregationListParams as AggregationListParams,
  };

  export {
    CompoundAggregations as CompoundAggregations,
    type CompoundAggregation as CompoundAggregation,
    CompoundAggregationsCursor as CompoundAggregationsCursor,
    type CompoundAggregationCreateParams as CompoundAggregationCreateParams,
    type CompoundAggregationUpdateParams as CompoundAggregationUpdateParams,
    type CompoundAggregationListParams as CompoundAggregationListParams,
  };

  export {
    Counters as Counters,
    type Counter as Counter,
    CountersCursor as CountersCursor,
    type CounterCreateParams as CounterCreateParams,
    type CounterUpdateParams as CounterUpdateParams,
    type CounterListParams as CounterListParams,
  };

  export {
    Meters as Meters,
    type Meter as Meter,
    MetersCursor as MetersCursor,
    type MeterCreateParams as MeterCreateParams,
    type MeterUpdateParams as MeterUpdateParams,
    type MeterListParams as MeterListParams,
  };

  export {
    Products as Products,
    type Product as Product,
    ProductsCursor as ProductsCursor,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  M3terError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default M3ter;
