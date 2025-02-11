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
  AccountPlan,
  AccountPlanCreateParams,
  AccountPlanListParams,
  AccountPlanListResponse,
  AccountPlanUpdateParams,
  AccountPlans,
} from './resources/account-plans';
import {
  Account,
  AccountCreateParams,
  AccountListChildrenParams,
  AccountListParams,
  AccountListResponse,
  AccountSearchParams,
  AccountSearchResponse,
  AccountUpdateParams,
  Accounts,
} from './resources/accounts';
import {
  Aggregation,
  AggregationCreateParams,
  AggregationListParams,
  AggregationListResponse,
  AggregationUpdateParams,
  Aggregations,
} from './resources/aggregations';
import {
  Authentication,
  AuthenticationGetBearerTokenParams,
  AuthenticationGetBearerTokenResponse,
} from './resources/authentication';
import { BillConfig, BillConfigResource, BillConfigUpdateParams } from './resources/bill-config';
import {
  Commitment,
  CommitmentCreateParams,
  CommitmentListParams,
  CommitmentListResponse,
  CommitmentSearchParams,
  CommitmentSearchResponse,
  CommitmentUpdateParams,
  Commitments,
} from './resources/commitments';
import {
  CompoundAggregation,
  CompoundAggregationCreateParams,
  CompoundAggregationListParams,
  CompoundAggregationListResponse,
  CompoundAggregationUpdateParams,
  CompoundAggregations,
} from './resources/compound-aggregations';
import {
  Contract,
  ContractCreateParams,
  ContractListParams,
  ContractListResponse,
  ContractUpdateParams,
  Contracts,
} from './resources/contracts';
import {
  CounterAdjustment,
  CounterAdjustmentCreateParams,
  CounterAdjustmentListParams,
  CounterAdjustmentListResponse,
  CounterAdjustmentUpdateParams,
  CounterAdjustments,
} from './resources/counter-adjustments';
import {
  CounterPricing,
  CounterPricingCreateParams,
  CounterPricingListParams,
  CounterPricingListResponse,
  CounterPricingUpdateParams,
  CounterPricings,
} from './resources/counter-pricings';
import {
  Counter,
  CounterCreateParams,
  CounterListParams,
  CounterListResponse,
  CounterUpdateParams,
  Counters,
} from './resources/counters';
import {
  CreditReason,
  CreditReasonCreateParams,
  CreditReasonListParams,
  CreditReasonListResponse,
  CreditReasonUpdateParams,
  CreditReasons,
} from './resources/credit-reasons';
import {
  Currencies,
  Currency,
  CurrencyCreateParams,
  CurrencyListParams,
  CurrencyListResponse,
  CurrencyUpdateParams,
} from './resources/currencies';
import {
  DebitReason,
  DebitReasonCreateParams,
  DebitReasonListParams,
  DebitReasonListResponse,
  DebitReasonUpdateParams,
  DebitReasons,
} from './resources/debit-reasons';
import {
  Meter,
  MeterCreateParams,
  MeterListParams,
  MeterListResponse,
  MeterUpdateParams,
  Meters,
} from './resources/meters';
import {
  OrganizationConfig,
  OrganizationConfigResource,
  OrganizationConfigUpdateParams,
} from './resources/organization-config';
import {
  PlanGroupLink,
  PlanGroupLinkCreateParams,
  PlanGroupLinkListParams,
  PlanGroupLinkListResponse,
  PlanGroupLinkUpdateParams,
  PlanGroupLinks,
} from './resources/plan-group-links';
import {
  PlanGroup,
  PlanGroupCreateParams,
  PlanGroupListParams,
  PlanGroupListResponse,
  PlanGroupUpdateParams,
  PlanGroups,
} from './resources/plan-groups';
import {
  PlanTemplate,
  PlanTemplateCreateParams,
  PlanTemplateListParams,
  PlanTemplateListResponse,
  PlanTemplateUpdateParams,
  PlanTemplates,
} from './resources/plan-templates';
import {
  Plan,
  PlanCreateParams,
  PlanListParams,
  PlanListResponse,
  PlanUpdateParams,
  Plans,
} from './resources/plans';
import {
  Pricing,
  PricingCreateParams,
  PricingListParams,
  PricingListResponse,
  PricingUpdateParams,
  Pricings,
} from './resources/pricings';
import {
  Product,
  ProductCreateParams,
  ProductListParams,
  ProductListResponse,
  ProductUpdateParams,
  Products,
} from './resources/products';
import {
  TransactionType,
  TransactionTypeCreateParams,
  TransactionTypeListParams,
  TransactionTypeListResponse,
  TransactionTypeUpdateParams,
  TransactionTypes,
} from './resources/transaction-types';
import {
  Balance,
  BalanceCreateParams,
  BalanceListParams,
  BalanceListResponse,
  BalanceUpdateParams,
  Balances,
} from './resources/balances/balances';

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
  accounts: API.Accounts = new API.Accounts(this);
  accountPlans: API.AccountPlans = new API.AccountPlans(this);
  aggregations: API.Aggregations = new API.Aggregations(this);
  balances: API.Balances = new API.Balances(this);
  billConfig: API.BillConfigResource = new API.BillConfigResource(this);
  commitments: API.Commitments = new API.Commitments(this);
  compoundAggregations: API.CompoundAggregations = new API.CompoundAggregations(this);
  contracts: API.Contracts = new API.Contracts(this);
  counters: API.Counters = new API.Counters(this);
  counterAdjustments: API.CounterAdjustments = new API.CounterAdjustments(this);
  counterPricings: API.CounterPricings = new API.CounterPricings(this);
  creditReasons: API.CreditReasons = new API.CreditReasons(this);
  currencies: API.Currencies = new API.Currencies(this);
  debitReasons: API.DebitReasons = new API.DebitReasons(this);
  meters: API.Meters = new API.Meters(this);
  organizationConfig: API.OrganizationConfigResource = new API.OrganizationConfigResource(this);
  plans: API.Plans = new API.Plans(this);
  planGroups: API.PlanGroups = new API.PlanGroups(this);
  planGroupLinks: API.PlanGroupLinks = new API.PlanGroupLinks(this);
  planTemplates: API.PlanTemplates = new API.PlanTemplates(this);
  pricings: API.Pricings = new API.Pricings(this);
  products: API.Products = new API.Products(this);
  transactionTypes: API.TransactionTypes = new API.TransactionTypes(this);

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
M3ter.Accounts = Accounts;
M3ter.AccountPlans = AccountPlans;
M3ter.Aggregations = Aggregations;
M3ter.Balances = Balances;
M3ter.BillConfigResource = BillConfigResource;
M3ter.Commitments = Commitments;
M3ter.CompoundAggregations = CompoundAggregations;
M3ter.Contracts = Contracts;
M3ter.Counters = Counters;
M3ter.CounterAdjustments = CounterAdjustments;
M3ter.CounterPricings = CounterPricings;
M3ter.CreditReasons = CreditReasons;
M3ter.Currencies = Currencies;
M3ter.DebitReasons = DebitReasons;
M3ter.Meters = Meters;
M3ter.OrganizationConfigResource = OrganizationConfigResource;
M3ter.Plans = Plans;
M3ter.PlanGroups = PlanGroups;
M3ter.PlanGroupLinks = PlanGroupLinks;
M3ter.PlanTemplates = PlanTemplates;
M3ter.Pricings = Pricings;
M3ter.Products = Products;
M3ter.TransactionTypes = TransactionTypes;
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
    Accounts as Accounts,
    type Account as Account,
    type AccountListResponse as AccountListResponse,
    type AccountSearchResponse as AccountSearchResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountListChildrenParams as AccountListChildrenParams,
    type AccountSearchParams as AccountSearchParams,
  };

  export {
    AccountPlans as AccountPlans,
    type AccountPlan as AccountPlan,
    type AccountPlanListResponse as AccountPlanListResponse,
    type AccountPlanCreateParams as AccountPlanCreateParams,
    type AccountPlanUpdateParams as AccountPlanUpdateParams,
    type AccountPlanListParams as AccountPlanListParams,
  };

  export {
    Aggregations as Aggregations,
    type Aggregation as Aggregation,
    type AggregationListResponse as AggregationListResponse,
    type AggregationCreateParams as AggregationCreateParams,
    type AggregationUpdateParams as AggregationUpdateParams,
    type AggregationListParams as AggregationListParams,
  };

  export {
    Balances as Balances,
    type Balance as Balance,
    type BalanceListResponse as BalanceListResponse,
    type BalanceCreateParams as BalanceCreateParams,
    type BalanceUpdateParams as BalanceUpdateParams,
    type BalanceListParams as BalanceListParams,
  };

  export {
    BillConfigResource as BillConfigResource,
    type BillConfig as BillConfig,
    type BillConfigUpdateParams as BillConfigUpdateParams,
  };

  export {
    Commitments as Commitments,
    type Commitment as Commitment,
    type CommitmentListResponse as CommitmentListResponse,
    type CommitmentSearchResponse as CommitmentSearchResponse,
    type CommitmentCreateParams as CommitmentCreateParams,
    type CommitmentUpdateParams as CommitmentUpdateParams,
    type CommitmentListParams as CommitmentListParams,
    type CommitmentSearchParams as CommitmentSearchParams,
  };

  export {
    CompoundAggregations as CompoundAggregations,
    type CompoundAggregation as CompoundAggregation,
    type CompoundAggregationListResponse as CompoundAggregationListResponse,
    type CompoundAggregationCreateParams as CompoundAggregationCreateParams,
    type CompoundAggregationUpdateParams as CompoundAggregationUpdateParams,
    type CompoundAggregationListParams as CompoundAggregationListParams,
  };

  export {
    Contracts as Contracts,
    type Contract as Contract,
    type ContractListResponse as ContractListResponse,
    type ContractCreateParams as ContractCreateParams,
    type ContractUpdateParams as ContractUpdateParams,
    type ContractListParams as ContractListParams,
  };

  export {
    Counters as Counters,
    type Counter as Counter,
    type CounterListResponse as CounterListResponse,
    type CounterCreateParams as CounterCreateParams,
    type CounterUpdateParams as CounterUpdateParams,
    type CounterListParams as CounterListParams,
  };

  export {
    CounterAdjustments as CounterAdjustments,
    type CounterAdjustment as CounterAdjustment,
    type CounterAdjustmentListResponse as CounterAdjustmentListResponse,
    type CounterAdjustmentCreateParams as CounterAdjustmentCreateParams,
    type CounterAdjustmentUpdateParams as CounterAdjustmentUpdateParams,
    type CounterAdjustmentListParams as CounterAdjustmentListParams,
  };

  export {
    CounterPricings as CounterPricings,
    type CounterPricing as CounterPricing,
    type CounterPricingListResponse as CounterPricingListResponse,
    type CounterPricingCreateParams as CounterPricingCreateParams,
    type CounterPricingUpdateParams as CounterPricingUpdateParams,
    type CounterPricingListParams as CounterPricingListParams,
  };

  export {
    CreditReasons as CreditReasons,
    type CreditReason as CreditReason,
    type CreditReasonListResponse as CreditReasonListResponse,
    type CreditReasonCreateParams as CreditReasonCreateParams,
    type CreditReasonUpdateParams as CreditReasonUpdateParams,
    type CreditReasonListParams as CreditReasonListParams,
  };

  export {
    Currencies as Currencies,
    type Currency as Currency,
    type CurrencyListResponse as CurrencyListResponse,
    type CurrencyCreateParams as CurrencyCreateParams,
    type CurrencyUpdateParams as CurrencyUpdateParams,
    type CurrencyListParams as CurrencyListParams,
  };

  export {
    DebitReasons as DebitReasons,
    type DebitReason as DebitReason,
    type DebitReasonListResponse as DebitReasonListResponse,
    type DebitReasonCreateParams as DebitReasonCreateParams,
    type DebitReasonUpdateParams as DebitReasonUpdateParams,
    type DebitReasonListParams as DebitReasonListParams,
  };

  export {
    Meters as Meters,
    type Meter as Meter,
    type MeterListResponse as MeterListResponse,
    type MeterCreateParams as MeterCreateParams,
    type MeterUpdateParams as MeterUpdateParams,
    type MeterListParams as MeterListParams,
  };

  export {
    OrganizationConfigResource as OrganizationConfigResource,
    type OrganizationConfig as OrganizationConfig,
    type OrganizationConfigUpdateParams as OrganizationConfigUpdateParams,
  };

  export {
    Plans as Plans,
    type Plan as Plan,
    type PlanListResponse as PlanListResponse,
    type PlanCreateParams as PlanCreateParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanListParams as PlanListParams,
  };

  export {
    PlanGroups as PlanGroups,
    type PlanGroup as PlanGroup,
    type PlanGroupListResponse as PlanGroupListResponse,
    type PlanGroupCreateParams as PlanGroupCreateParams,
    type PlanGroupUpdateParams as PlanGroupUpdateParams,
    type PlanGroupListParams as PlanGroupListParams,
  };

  export {
    PlanGroupLinks as PlanGroupLinks,
    type PlanGroupLink as PlanGroupLink,
    type PlanGroupLinkListResponse as PlanGroupLinkListResponse,
    type PlanGroupLinkCreateParams as PlanGroupLinkCreateParams,
    type PlanGroupLinkUpdateParams as PlanGroupLinkUpdateParams,
    type PlanGroupLinkListParams as PlanGroupLinkListParams,
  };

  export {
    PlanTemplates as PlanTemplates,
    type PlanTemplate as PlanTemplate,
    type PlanTemplateListResponse as PlanTemplateListResponse,
    type PlanTemplateCreateParams as PlanTemplateCreateParams,
    type PlanTemplateUpdateParams as PlanTemplateUpdateParams,
    type PlanTemplateListParams as PlanTemplateListParams,
  };

  export {
    Pricings as Pricings,
    type Pricing as Pricing,
    type PricingListResponse as PricingListResponse,
    type PricingCreateParams as PricingCreateParams,
    type PricingUpdateParams as PricingUpdateParams,
    type PricingListParams as PricingListParams,
  };

  export {
    Products as Products,
    type Product as Product,
    type ProductListResponse as ProductListResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };

  export {
    TransactionTypes as TransactionTypes,
    type TransactionType as TransactionType,
    type TransactionTypeListResponse as TransactionTypeListResponse,
    type TransactionTypeCreateParams as TransactionTypeCreateParams,
    type TransactionTypeUpdateParams as TransactionTypeUpdateParams,
    type TransactionTypeListParams as TransactionTypeListParams,
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
