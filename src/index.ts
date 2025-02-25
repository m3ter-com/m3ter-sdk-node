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
  AccountPlanDeleteParams,
  AccountPlanListParams,
  AccountPlanRetrieveParams,
  AccountPlanUpdateParams,
  AccountPlans,
  AccountPlansCursor,
} from './resources/account-plans';
import {
  Account,
  AccountCreateParams,
  AccountDeleteParams,
  AccountEndDateBillingEntitiesParams,
  AccountEndDateBillingEntitiesResponse,
  AccountListChildrenParams,
  AccountListParams,
  AccountRetrieveParams,
  AccountSearchParams,
  AccountSearchResponse,
  AccountUpdateParams,
  Accounts,
  AccountsCursor,
} from './resources/accounts';
import {
  Aggregation,
  AggregationCreateParams,
  AggregationDeleteParams,
  AggregationListParams,
  AggregationRetrieveParams,
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
  BillConfig,
  BillConfigResource,
  BillConfigRetrieveParams,
  BillConfigUpdateParams,
} from './resources/bill-config';
import {
  BillJob,
  BillJobCancelParams,
  BillJobCreateParams,
  BillJobListParams,
  BillJobRecalculateParams,
  BillJobRetrieveParams,
  BillJobs,
  BillJobsCursor,
} from './resources/bill-jobs';
import {
  Commitment,
  CommitmentCreateParams,
  CommitmentDeleteParams,
  CommitmentListParams,
  CommitmentRetrieveParams,
  CommitmentSearchParams,
  CommitmentSearchResponse,
  CommitmentUpdateParams,
  Commitments,
  CommitmentsCursor,
} from './resources/commitments';
import {
  CompoundAggregation,
  CompoundAggregationCreateParams,
  CompoundAggregationDeleteParams,
  CompoundAggregationListParams,
  CompoundAggregationRetrieveParams,
  CompoundAggregationUpdateParams,
  CompoundAggregations,
  CompoundAggregationsCursor,
} from './resources/compound-aggregations';
import {
  Contract,
  ContractCreateParams,
  ContractDeleteParams,
  ContractEndDateBillingEntitiesParams,
  ContractEndDateBillingEntitiesResponse,
  ContractListParams,
  ContractRetrieveParams,
  ContractUpdateParams,
  Contracts,
  ContractsCursor,
} from './resources/contracts';
import {
  CounterAdjustment,
  CounterAdjustmentCreateParams,
  CounterAdjustmentDeleteParams,
  CounterAdjustmentListParams,
  CounterAdjustmentRetrieveParams,
  CounterAdjustmentUpdateParams,
  CounterAdjustments,
  CounterAdjustmentsCursor,
} from './resources/counter-adjustments';
import {
  CounterPricing,
  CounterPricingCreateParams,
  CounterPricingDeleteParams,
  CounterPricingListParams,
  CounterPricingRetrieveParams,
  CounterPricingUpdateParams,
  CounterPricings,
  CounterPricingsCursor,
} from './resources/counter-pricings';
import {
  Counter,
  CounterCreateParams,
  CounterDeleteParams,
  CounterListParams,
  CounterRetrieveParams,
  CounterUpdateParams,
  Counters,
  CountersCursor,
} from './resources/counters';
import {
  CreditReason,
  CreditReasonCreateParams,
  CreditReasonDeleteParams,
  CreditReasonListParams,
  CreditReasonRetrieveParams,
  CreditReasonUpdateParams,
  CreditReasons,
  CreditReasonsCursor,
} from './resources/credit-reasons';
import {
  Currencies,
  CurrenciesCursor,
  Currency,
  CurrencyCreateParams,
  CurrencyDeleteParams,
  CurrencyListParams,
  CurrencyRetrieveParams,
  CurrencyUpdateParams,
} from './resources/currencies';
import { CustomFieldRetrieveParams, CustomFieldUpdateParams, CustomFields } from './resources/custom-fields';
import {
  DebitReason,
  DebitReasonCreateParams,
  DebitReasonDeleteParams,
  DebitReasonListParams,
  DebitReasonRetrieveParams,
  DebitReasonUpdateParams,
  DebitReasons,
  DebitReasonsCursor,
} from './resources/debit-reasons';
import {
  Event,
  EventGetFieldsParams,
  EventGetFieldsResponse,
  EventGetTypesParams,
  EventGetTypesResponse,
  EventListParams,
  EventRetrieveParams,
  Events,
  EventsCursor,
} from './resources/events';
import {
  ExternalMapping,
  ExternalMappingCreateParams,
  ExternalMappingDeleteParams,
  ExternalMappingListByExternalEntityParams,
  ExternalMappingListByExternalEntityResponse,
  ExternalMappingListByM3terEntityParams,
  ExternalMappingListByM3terEntityResponse,
  ExternalMappingListParams,
  ExternalMappingRetrieveParams,
  ExternalMappingUpdateParams,
  ExternalMappings,
  ExternalMappingsCursor,
} from './resources/external-mappings';
import {
  IntegrationConfiguration,
  IntegrationConfigurationCreateParams,
  IntegrationConfigurationCreateResponse,
  IntegrationConfigurationDeleteParams,
  IntegrationConfigurationDeleteResponse,
  IntegrationConfigurationEnableParams,
  IntegrationConfigurationEnableResponse,
  IntegrationConfigurationGetByEntityParams,
  IntegrationConfigurationListParams,
  IntegrationConfigurationListResponse,
  IntegrationConfigurationListResponsesCursor,
  IntegrationConfigurationRetrieveParams,
  IntegrationConfigurationUpdateParams,
  IntegrationConfigurationUpdateResponse,
  IntegrationConfigurations,
} from './resources/integration-configurations';
import {
  Meter,
  MeterCreateParams,
  MeterDeleteParams,
  MeterListParams,
  MeterRetrieveParams,
  MeterUpdateParams,
  Meters,
  MetersCursor,
} from './resources/meters';
import {
  NotificationConfiguration,
  NotificationConfigurationCreateParams,
  NotificationConfigurationDeleteParams,
  NotificationConfigurationListParams,
  NotificationConfigurationRetrieveParams,
  NotificationConfigurationUpdateParams,
  NotificationConfigurations,
  NotificationConfigurationsCursor,
} from './resources/notification-configurations';
import {
  OrganizationConfig,
  OrganizationConfigResource,
  OrganizationConfigRetrieveParams,
  OrganizationConfigUpdateParams,
} from './resources/organization-config';
import {
  PermissionPolicies,
  PermissionPoliciesCursor,
  PermissionPolicy,
  PermissionPolicyAddToServiceUserParams,
  PermissionPolicyAddToServiceUserResponse,
  PermissionPolicyAddToSupportUserParams,
  PermissionPolicyAddToSupportUserResponse,
  PermissionPolicyAddToUserGroupParams,
  PermissionPolicyAddToUserGroupResponse,
  PermissionPolicyAddToUserParams,
  PermissionPolicyAddToUserResponse,
  PermissionPolicyCreateParams,
  PermissionPolicyDeleteParams,
  PermissionPolicyListParams,
  PermissionPolicyRemoveFromServiceUserParams,
  PermissionPolicyRemoveFromServiceUserResponse,
  PermissionPolicyRemoveFromSupportUserParams,
  PermissionPolicyRemoveFromSupportUserResponse,
  PermissionPolicyRemoveFromUserGroupParams,
  PermissionPolicyRemoveFromUserGroupResponse,
  PermissionPolicyRemoveFromUserParams,
  PermissionPolicyRemoveFromUserResponse,
  PermissionPolicyRetrieveParams,
  PermissionPolicyUpdateParams,
} from './resources/permission-policies';
import {
  PlanGroupLink,
  PlanGroupLinkCreateParams,
  PlanGroupLinkDeleteParams,
  PlanGroupLinkListParams,
  PlanGroupLinkRetrieveParams,
  PlanGroupLinkUpdateParams,
  PlanGroupLinks,
  PlanGroupLinksCursor,
} from './resources/plan-group-links';
import {
  PlanGroup,
  PlanGroupCreateParams,
  PlanGroupDeleteParams,
  PlanGroupListParams,
  PlanGroupRetrieveParams,
  PlanGroupUpdateParams,
  PlanGroups,
  PlanGroupsCursor,
} from './resources/plan-groups';
import {
  PlanTemplate,
  PlanTemplateCreateParams,
  PlanTemplateDeleteParams,
  PlanTemplateListParams,
  PlanTemplateRetrieveParams,
  PlanTemplateUpdateParams,
  PlanTemplates,
  PlanTemplatesCursor,
} from './resources/plan-templates';
import {
  Plan,
  PlanCreateParams,
  PlanDeleteParams,
  PlanListParams,
  PlanRetrieveParams,
  PlanUpdateParams,
  Plans,
  PlansCursor,
} from './resources/plans';
import {
  Pricing,
  PricingCreateParams,
  PricingDeleteParams,
  PricingListParams,
  PricingRetrieveParams,
  PricingUpdateParams,
  Pricings,
  PricingsCursor,
} from './resources/pricings';
import {
  Product,
  ProductCreateParams,
  ProductDeleteParams,
  ProductListParams,
  ProductRetrieveParams,
  ProductUpdateParams,
  Products,
  ProductsCursor,
} from './resources/products';
import {
  ResourceGroup,
  ResourceGroupAddResourceParams,
  ResourceGroupCreateParams,
  ResourceGroupDeleteParams,
  ResourceGroupListContentsParams,
  ResourceGroupListContentsResponse,
  ResourceGroupListParams,
  ResourceGroupListPermissionsParams,
  ResourceGroupListPermissionsResponse,
  ResourceGroupRemoveResourceParams,
  ResourceGroupRetrieveParams,
  ResourceGroupUpdateParams,
  ResourceGroups,
  ResourceGroupsCursor,
} from './resources/resource-groups';
import {
  ScheduledEventConfiguration,
  ScheduledEventConfigurationCreateParams,
  ScheduledEventConfigurationDeleteParams,
  ScheduledEventConfigurationListParams,
  ScheduledEventConfigurationRetrieveParams,
  ScheduledEventConfigurationUpdateParams,
  ScheduledEventConfigurations,
  ScheduledEventConfigurationsCursor,
} from './resources/scheduled-event-configurations';
import {
  TransactionType,
  TransactionTypeCreateParams,
  TransactionTypeDeleteParams,
  TransactionTypeListParams,
  TransactionTypeRetrieveParams,
  TransactionTypeUpdateParams,
  TransactionTypes,
  TransactionTypesCursor,
} from './resources/transaction-types';
import {
  Webhook,
  WebhookCreateParams,
  WebhookCreateResponse,
  WebhookDeleteParams,
  WebhookListParams,
  WebhookRetrieveParams,
  WebhookSetActiveParams,
  WebhookSetActiveResponse,
  WebhookUpdateParams,
  WebhookUpdateResponse,
  Webhooks,
  WebhooksCursor,
} from './resources/webhooks';
import {
  Balance,
  BalanceCreateParams,
  BalanceDeleteParams,
  BalanceListParams,
  BalanceRetrieveParams,
  BalanceUpdateParams,
  Balances,
  BalancesCursor,
} from './resources/balances/balances';
import {
  Bill,
  BillApproveParams,
  BillApproveResponse,
  BillDeleteParams,
  BillLatestByAccountParams,
  BillListParams,
  BillLockParams,
  BillRetrieveParams,
  BillSearchParams,
  BillSearchResponse,
  BillUpdateStatusParams,
  Bills,
  BillsCursor,
} from './resources/bills/bills';
import {
  AdHocOperationalDataRequest,
  AdHocUsageDataRequest,
  AdhocExport,
  DataExportCreateAdhocParams,
  DataExports,
} from './resources/data-exports/data-exports';
import {
  DownloadURLResponse,
  SubmitMeasurementsResponse,
  Usage,
  UsageGetFailedIngestDownloadURLParams,
  UsageQueryParams,
  UsageQueryResponse,
  UsageSubmitParams,
} from './resources/usage/usage';
import {
  User,
  UserListParams,
  UserListPermissionsParams,
  UserListUserGroupsParams,
  UserMeParams,
  UserMeResponse,
  UserResendPasswordParams,
  UserRetrieveParams,
  UserUpdateParams,
  Users,
  UsersCursor,
} from './resources/users/users';

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

  orgId: string;

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
  orgId: string;

  tokenExpiry: Date | undefined;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the M3ter API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['M3TER_API_KEY'] ?? undefined]
   * @param {string | undefined} [opts.apiSecret=process.env['M3TER_API_SECRET'] ?? undefined]
   * @param {string | null | undefined} [opts.token=process.env['M3TER_API_TOKEN'] ?? null]
   * @param {string} opts.orgId
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
    orgId,
    ...opts
  }: ClientOptions) {
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
    if (orgId === undefined) {
      throw new Errors.M3terError(
        "Missing required client option orgId; you need to instantiate the M3ter client with an orgId option, like new M3ter({ orgId: 'My Org ID' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      apiSecret,
      token,
      orgId,
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
    this.orgId = orgId;
  }

  authentication: API.Authentication = new API.Authentication(this);
  accounts: API.Accounts = new API.Accounts(this);
  accountPlans: API.AccountPlans = new API.AccountPlans(this);
  aggregations: API.Aggregations = new API.Aggregations(this);
  balances: API.Balances = new API.Balances(this);
  bills: API.Bills = new API.Bills(this);
  billConfig: API.BillConfigResource = new API.BillConfigResource(this);
  commitments: API.Commitments = new API.Commitments(this);
  billJobs: API.BillJobs = new API.BillJobs(this);
  compoundAggregations: API.CompoundAggregations = new API.CompoundAggregations(this);
  contracts: API.Contracts = new API.Contracts(this);
  counters: API.Counters = new API.Counters(this);
  counterAdjustments: API.CounterAdjustments = new API.CounterAdjustments(this);
  counterPricings: API.CounterPricings = new API.CounterPricings(this);
  creditReasons: API.CreditReasons = new API.CreditReasons(this);
  currencies: API.Currencies = new API.Currencies(this);
  customFields: API.CustomFields = new API.CustomFields(this);
  dataExports: API.DataExports = new API.DataExports(this);
  debitReasons: API.DebitReasons = new API.DebitReasons(this);
  events: API.Events = new API.Events(this);
  externalMappings: API.ExternalMappings = new API.ExternalMappings(this);
  integrationConfigurations: API.IntegrationConfigurations = new API.IntegrationConfigurations(this);
  meters: API.Meters = new API.Meters(this);
  notificationConfigurations: API.NotificationConfigurations = new API.NotificationConfigurations(this);
  organizationConfig: API.OrganizationConfigResource = new API.OrganizationConfigResource(this);
  permissionPolicies: API.PermissionPolicies = new API.PermissionPolicies(this);
  plans: API.Plans = new API.Plans(this);
  planGroups: API.PlanGroups = new API.PlanGroups(this);
  planGroupLinks: API.PlanGroupLinks = new API.PlanGroupLinks(this);
  planTemplates: API.PlanTemplates = new API.PlanTemplates(this);
  pricings: API.Pricings = new API.Pricings(this);
  products: API.Products = new API.Products(this);
  resourceGroups: API.ResourceGroups = new API.ResourceGroups(this);
  scheduledEventConfigurations: API.ScheduledEventConfigurations = new API.ScheduledEventConfigurations(this);
  transactionTypes: API.TransactionTypes = new API.TransactionTypes(this);
  usage: API.Usage = new API.Usage(this);
  users: API.Users = new API.Users(this);
  webhooks: API.Webhooks = new API.Webhooks(this);

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
    // When manually setting the token we won't have a `tokenExpiry` so consider that valid.
    const tokenValid = !!this.token && (!this.tokenExpiry || this.tokenExpiry > new Date());

    // Prevent infinite loop of token requests.
    if (!tokenValid && !options.path.endsWith('/oauth/token')) {
      const auth = Core.toBase64(`${this.apiKey}:${this.apiSecret}`);
      const token = await this.authentication.getBearerToken(
        { grant_type: 'client_credentials' },
        { headers: { authorization: `Basic ${auth}` } },
      );

      this.token = token.access_token;

      // Store token expiry (minus 5 minutes) for automatic refreshing.
      const now = new Date();
      this.tokenExpiry = new Date(now.getTime() + token.expires_in * 1000 - 300000);
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
M3ter.AccountsCursor = AccountsCursor;
M3ter.AccountPlans = AccountPlans;
M3ter.AccountPlansCursor = AccountPlansCursor;
M3ter.Aggregations = Aggregations;
M3ter.AggregationsCursor = AggregationsCursor;
M3ter.Balances = Balances;
M3ter.BalancesCursor = BalancesCursor;
M3ter.Bills = Bills;
M3ter.BillsCursor = BillsCursor;
M3ter.BillConfigResource = BillConfigResource;
M3ter.Commitments = Commitments;
M3ter.CommitmentsCursor = CommitmentsCursor;
M3ter.BillJobs = BillJobs;
M3ter.BillJobsCursor = BillJobsCursor;
M3ter.CompoundAggregations = CompoundAggregations;
M3ter.CompoundAggregationsCursor = CompoundAggregationsCursor;
M3ter.Contracts = Contracts;
M3ter.ContractsCursor = ContractsCursor;
M3ter.Counters = Counters;
M3ter.CountersCursor = CountersCursor;
M3ter.CounterAdjustments = CounterAdjustments;
M3ter.CounterAdjustmentsCursor = CounterAdjustmentsCursor;
M3ter.CounterPricings = CounterPricings;
M3ter.CounterPricingsCursor = CounterPricingsCursor;
M3ter.CreditReasons = CreditReasons;
M3ter.CreditReasonsCursor = CreditReasonsCursor;
M3ter.Currencies = Currencies;
M3ter.CurrenciesCursor = CurrenciesCursor;
M3ter.DataExports = DataExports;
M3ter.DebitReasons = DebitReasons;
M3ter.DebitReasonsCursor = DebitReasonsCursor;
M3ter.Events = Events;
M3ter.EventsCursor = EventsCursor;
M3ter.ExternalMappings = ExternalMappings;
M3ter.ExternalMappingsCursor = ExternalMappingsCursor;
M3ter.IntegrationConfigurations = IntegrationConfigurations;
M3ter.IntegrationConfigurationListResponsesCursor = IntegrationConfigurationListResponsesCursor;
M3ter.Meters = Meters;
M3ter.MetersCursor = MetersCursor;
M3ter.NotificationConfigurations = NotificationConfigurations;
M3ter.NotificationConfigurationsCursor = NotificationConfigurationsCursor;
M3ter.OrganizationConfigResource = OrganizationConfigResource;
M3ter.PermissionPolicies = PermissionPolicies;
M3ter.PermissionPoliciesCursor = PermissionPoliciesCursor;
M3ter.Plans = Plans;
M3ter.PlansCursor = PlansCursor;
M3ter.PlanGroups = PlanGroups;
M3ter.PlanGroupsCursor = PlanGroupsCursor;
M3ter.PlanGroupLinks = PlanGroupLinks;
M3ter.PlanGroupLinksCursor = PlanGroupLinksCursor;
M3ter.PlanTemplates = PlanTemplates;
M3ter.PlanTemplatesCursor = PlanTemplatesCursor;
M3ter.Pricings = Pricings;
M3ter.PricingsCursor = PricingsCursor;
M3ter.Products = Products;
M3ter.ProductsCursor = ProductsCursor;
M3ter.ResourceGroups = ResourceGroups;
M3ter.ResourceGroupsCursor = ResourceGroupsCursor;
M3ter.ScheduledEventConfigurations = ScheduledEventConfigurations;
M3ter.ScheduledEventConfigurationsCursor = ScheduledEventConfigurationsCursor;
M3ter.TransactionTypes = TransactionTypes;
M3ter.TransactionTypesCursor = TransactionTypesCursor;
M3ter.Usage = Usage;
M3ter.Users = Users;
M3ter.UsersCursor = UsersCursor;
M3ter.Webhooks = Webhooks;
M3ter.WebhooksCursor = WebhooksCursor;
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
    type AccountEndDateBillingEntitiesResponse as AccountEndDateBillingEntitiesResponse,
    type AccountSearchResponse as AccountSearchResponse,
    AccountsCursor as AccountsCursor,
    type AccountCreateParams as AccountCreateParams,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountDeleteParams as AccountDeleteParams,
    type AccountEndDateBillingEntitiesParams as AccountEndDateBillingEntitiesParams,
    type AccountListChildrenParams as AccountListChildrenParams,
    type AccountSearchParams as AccountSearchParams,
  };

  export {
    AccountPlans as AccountPlans,
    type AccountPlan as AccountPlan,
    AccountPlansCursor as AccountPlansCursor,
    type AccountPlanCreateParams as AccountPlanCreateParams,
    type AccountPlanRetrieveParams as AccountPlanRetrieveParams,
    type AccountPlanUpdateParams as AccountPlanUpdateParams,
    type AccountPlanListParams as AccountPlanListParams,
    type AccountPlanDeleteParams as AccountPlanDeleteParams,
  };

  export {
    Aggregations as Aggregations,
    type Aggregation as Aggregation,
    AggregationsCursor as AggregationsCursor,
    type AggregationCreateParams as AggregationCreateParams,
    type AggregationRetrieveParams as AggregationRetrieveParams,
    type AggregationUpdateParams as AggregationUpdateParams,
    type AggregationListParams as AggregationListParams,
    type AggregationDeleteParams as AggregationDeleteParams,
  };

  export {
    Balances as Balances,
    type Balance as Balance,
    BalancesCursor as BalancesCursor,
    type BalanceCreateParams as BalanceCreateParams,
    type BalanceRetrieveParams as BalanceRetrieveParams,
    type BalanceUpdateParams as BalanceUpdateParams,
    type BalanceListParams as BalanceListParams,
    type BalanceDeleteParams as BalanceDeleteParams,
  };

  export {
    Bills as Bills,
    type Bill as Bill,
    type BillApproveResponse as BillApproveResponse,
    type BillSearchResponse as BillSearchResponse,
    BillsCursor as BillsCursor,
    type BillRetrieveParams as BillRetrieveParams,
    type BillListParams as BillListParams,
    type BillDeleteParams as BillDeleteParams,
    type BillApproveParams as BillApproveParams,
    type BillLatestByAccountParams as BillLatestByAccountParams,
    type BillLockParams as BillLockParams,
    type BillSearchParams as BillSearchParams,
    type BillUpdateStatusParams as BillUpdateStatusParams,
  };

  export {
    BillConfigResource as BillConfigResource,
    type BillConfig as BillConfig,
    type BillConfigRetrieveParams as BillConfigRetrieveParams,
    type BillConfigUpdateParams as BillConfigUpdateParams,
  };

  export {
    Commitments as Commitments,
    type Commitment as Commitment,
    type CommitmentSearchResponse as CommitmentSearchResponse,
    CommitmentsCursor as CommitmentsCursor,
    type CommitmentCreateParams as CommitmentCreateParams,
    type CommitmentRetrieveParams as CommitmentRetrieveParams,
    type CommitmentUpdateParams as CommitmentUpdateParams,
    type CommitmentListParams as CommitmentListParams,
    type CommitmentDeleteParams as CommitmentDeleteParams,
    type CommitmentSearchParams as CommitmentSearchParams,
  };

  export {
    BillJobs as BillJobs,
    type BillJob as BillJob,
    BillJobsCursor as BillJobsCursor,
    type BillJobCreateParams as BillJobCreateParams,
    type BillJobRetrieveParams as BillJobRetrieveParams,
    type BillJobListParams as BillJobListParams,
    type BillJobCancelParams as BillJobCancelParams,
    type BillJobRecalculateParams as BillJobRecalculateParams,
  };

  export {
    CompoundAggregations as CompoundAggregations,
    type CompoundAggregation as CompoundAggregation,
    CompoundAggregationsCursor as CompoundAggregationsCursor,
    type CompoundAggregationCreateParams as CompoundAggregationCreateParams,
    type CompoundAggregationRetrieveParams as CompoundAggregationRetrieveParams,
    type CompoundAggregationUpdateParams as CompoundAggregationUpdateParams,
    type CompoundAggregationListParams as CompoundAggregationListParams,
    type CompoundAggregationDeleteParams as CompoundAggregationDeleteParams,
  };

  export {
    Contracts as Contracts,
    type Contract as Contract,
    type ContractEndDateBillingEntitiesResponse as ContractEndDateBillingEntitiesResponse,
    ContractsCursor as ContractsCursor,
    type ContractCreateParams as ContractCreateParams,
    type ContractRetrieveParams as ContractRetrieveParams,
    type ContractUpdateParams as ContractUpdateParams,
    type ContractListParams as ContractListParams,
    type ContractDeleteParams as ContractDeleteParams,
    type ContractEndDateBillingEntitiesParams as ContractEndDateBillingEntitiesParams,
  };

  export {
    Counters as Counters,
    type Counter as Counter,
    CountersCursor as CountersCursor,
    type CounterCreateParams as CounterCreateParams,
    type CounterRetrieveParams as CounterRetrieveParams,
    type CounterUpdateParams as CounterUpdateParams,
    type CounterListParams as CounterListParams,
    type CounterDeleteParams as CounterDeleteParams,
  };

  export {
    CounterAdjustments as CounterAdjustments,
    type CounterAdjustment as CounterAdjustment,
    CounterAdjustmentsCursor as CounterAdjustmentsCursor,
    type CounterAdjustmentCreateParams as CounterAdjustmentCreateParams,
    type CounterAdjustmentRetrieveParams as CounterAdjustmentRetrieveParams,
    type CounterAdjustmentUpdateParams as CounterAdjustmentUpdateParams,
    type CounterAdjustmentListParams as CounterAdjustmentListParams,
    type CounterAdjustmentDeleteParams as CounterAdjustmentDeleteParams,
  };

  export {
    CounterPricings as CounterPricings,
    type CounterPricing as CounterPricing,
    CounterPricingsCursor as CounterPricingsCursor,
    type CounterPricingCreateParams as CounterPricingCreateParams,
    type CounterPricingRetrieveParams as CounterPricingRetrieveParams,
    type CounterPricingUpdateParams as CounterPricingUpdateParams,
    type CounterPricingListParams as CounterPricingListParams,
    type CounterPricingDeleteParams as CounterPricingDeleteParams,
  };

  export {
    CreditReasons as CreditReasons,
    type CreditReason as CreditReason,
    CreditReasonsCursor as CreditReasonsCursor,
    type CreditReasonCreateParams as CreditReasonCreateParams,
    type CreditReasonRetrieveParams as CreditReasonRetrieveParams,
    type CreditReasonUpdateParams as CreditReasonUpdateParams,
    type CreditReasonListParams as CreditReasonListParams,
    type CreditReasonDeleteParams as CreditReasonDeleteParams,
  };

  export {
    Currencies as Currencies,
    type Currency as Currency,
    CurrenciesCursor as CurrenciesCursor,
    type CurrencyCreateParams as CurrencyCreateParams,
    type CurrencyRetrieveParams as CurrencyRetrieveParams,
    type CurrencyUpdateParams as CurrencyUpdateParams,
    type CurrencyListParams as CurrencyListParams,
    type CurrencyDeleteParams as CurrencyDeleteParams,
  };

  export {
    type CustomFields as CustomFields,
    type CustomFieldRetrieveParams as CustomFieldRetrieveParams,
    type CustomFieldUpdateParams as CustomFieldUpdateParams,
  };

  export {
    DataExports as DataExports,
    type AdhocExport as AdhocExport,
    type AdHocOperationalDataRequest as AdHocOperationalDataRequest,
    type AdHocUsageDataRequest as AdHocUsageDataRequest,
    type DataExportCreateAdhocParams as DataExportCreateAdhocParams,
  };

  export {
    DebitReasons as DebitReasons,
    type DebitReason as DebitReason,
    DebitReasonsCursor as DebitReasonsCursor,
    type DebitReasonCreateParams as DebitReasonCreateParams,
    type DebitReasonRetrieveParams as DebitReasonRetrieveParams,
    type DebitReasonUpdateParams as DebitReasonUpdateParams,
    type DebitReasonListParams as DebitReasonListParams,
    type DebitReasonDeleteParams as DebitReasonDeleteParams,
  };

  export {
    Events as Events,
    type Event as Event,
    type EventGetFieldsResponse as EventGetFieldsResponse,
    type EventGetTypesResponse as EventGetTypesResponse,
    EventsCursor as EventsCursor,
    type EventRetrieveParams as EventRetrieveParams,
    type EventListParams as EventListParams,
    type EventGetFieldsParams as EventGetFieldsParams,
    type EventGetTypesParams as EventGetTypesParams,
  };

  export {
    ExternalMappings as ExternalMappings,
    type ExternalMapping as ExternalMapping,
    type ExternalMappingListByExternalEntityResponse as ExternalMappingListByExternalEntityResponse,
    type ExternalMappingListByM3terEntityResponse as ExternalMappingListByM3terEntityResponse,
    ExternalMappingsCursor as ExternalMappingsCursor,
    type ExternalMappingCreateParams as ExternalMappingCreateParams,
    type ExternalMappingRetrieveParams as ExternalMappingRetrieveParams,
    type ExternalMappingUpdateParams as ExternalMappingUpdateParams,
    type ExternalMappingListParams as ExternalMappingListParams,
    type ExternalMappingDeleteParams as ExternalMappingDeleteParams,
    type ExternalMappingListByExternalEntityParams as ExternalMappingListByExternalEntityParams,
    type ExternalMappingListByM3terEntityParams as ExternalMappingListByM3terEntityParams,
  };

  export {
    IntegrationConfigurations as IntegrationConfigurations,
    type IntegrationConfiguration as IntegrationConfiguration,
    type IntegrationConfigurationCreateResponse as IntegrationConfigurationCreateResponse,
    type IntegrationConfigurationUpdateResponse as IntegrationConfigurationUpdateResponse,
    type IntegrationConfigurationListResponse as IntegrationConfigurationListResponse,
    type IntegrationConfigurationDeleteResponse as IntegrationConfigurationDeleteResponse,
    type IntegrationConfigurationEnableResponse as IntegrationConfigurationEnableResponse,
    IntegrationConfigurationListResponsesCursor as IntegrationConfigurationListResponsesCursor,
    type IntegrationConfigurationCreateParams as IntegrationConfigurationCreateParams,
    type IntegrationConfigurationRetrieveParams as IntegrationConfigurationRetrieveParams,
    type IntegrationConfigurationUpdateParams as IntegrationConfigurationUpdateParams,
    type IntegrationConfigurationListParams as IntegrationConfigurationListParams,
    type IntegrationConfigurationDeleteParams as IntegrationConfigurationDeleteParams,
    type IntegrationConfigurationEnableParams as IntegrationConfigurationEnableParams,
    type IntegrationConfigurationGetByEntityParams as IntegrationConfigurationGetByEntityParams,
  };

  export {
    Meters as Meters,
    type Meter as Meter,
    MetersCursor as MetersCursor,
    type MeterCreateParams as MeterCreateParams,
    type MeterRetrieveParams as MeterRetrieveParams,
    type MeterUpdateParams as MeterUpdateParams,
    type MeterListParams as MeterListParams,
    type MeterDeleteParams as MeterDeleteParams,
  };

  export {
    NotificationConfigurations as NotificationConfigurations,
    type NotificationConfiguration as NotificationConfiguration,
    NotificationConfigurationsCursor as NotificationConfigurationsCursor,
    type NotificationConfigurationCreateParams as NotificationConfigurationCreateParams,
    type NotificationConfigurationRetrieveParams as NotificationConfigurationRetrieveParams,
    type NotificationConfigurationUpdateParams as NotificationConfigurationUpdateParams,
    type NotificationConfigurationListParams as NotificationConfigurationListParams,
    type NotificationConfigurationDeleteParams as NotificationConfigurationDeleteParams,
  };

  export {
    OrganizationConfigResource as OrganizationConfigResource,
    type OrganizationConfig as OrganizationConfig,
    type OrganizationConfigRetrieveParams as OrganizationConfigRetrieveParams,
    type OrganizationConfigUpdateParams as OrganizationConfigUpdateParams,
  };

  export {
    PermissionPolicies as PermissionPolicies,
    type PermissionPolicy as PermissionPolicy,
    type PermissionPolicyAddToServiceUserResponse as PermissionPolicyAddToServiceUserResponse,
    type PermissionPolicyAddToSupportUserResponse as PermissionPolicyAddToSupportUserResponse,
    type PermissionPolicyAddToUserResponse as PermissionPolicyAddToUserResponse,
    type PermissionPolicyAddToUserGroupResponse as PermissionPolicyAddToUserGroupResponse,
    type PermissionPolicyRemoveFromServiceUserResponse as PermissionPolicyRemoveFromServiceUserResponse,
    type PermissionPolicyRemoveFromSupportUserResponse as PermissionPolicyRemoveFromSupportUserResponse,
    type PermissionPolicyRemoveFromUserResponse as PermissionPolicyRemoveFromUserResponse,
    type PermissionPolicyRemoveFromUserGroupResponse as PermissionPolicyRemoveFromUserGroupResponse,
    PermissionPoliciesCursor as PermissionPoliciesCursor,
    type PermissionPolicyCreateParams as PermissionPolicyCreateParams,
    type PermissionPolicyRetrieveParams as PermissionPolicyRetrieveParams,
    type PermissionPolicyUpdateParams as PermissionPolicyUpdateParams,
    type PermissionPolicyListParams as PermissionPolicyListParams,
    type PermissionPolicyDeleteParams as PermissionPolicyDeleteParams,
    type PermissionPolicyAddToServiceUserParams as PermissionPolicyAddToServiceUserParams,
    type PermissionPolicyAddToSupportUserParams as PermissionPolicyAddToSupportUserParams,
    type PermissionPolicyAddToUserParams as PermissionPolicyAddToUserParams,
    type PermissionPolicyAddToUserGroupParams as PermissionPolicyAddToUserGroupParams,
    type PermissionPolicyRemoveFromServiceUserParams as PermissionPolicyRemoveFromServiceUserParams,
    type PermissionPolicyRemoveFromSupportUserParams as PermissionPolicyRemoveFromSupportUserParams,
    type PermissionPolicyRemoveFromUserParams as PermissionPolicyRemoveFromUserParams,
    type PermissionPolicyRemoveFromUserGroupParams as PermissionPolicyRemoveFromUserGroupParams,
  };

  export {
    Plans as Plans,
    type Plan as Plan,
    PlansCursor as PlansCursor,
    type PlanCreateParams as PlanCreateParams,
    type PlanRetrieveParams as PlanRetrieveParams,
    type PlanUpdateParams as PlanUpdateParams,
    type PlanListParams as PlanListParams,
    type PlanDeleteParams as PlanDeleteParams,
  };

  export {
    PlanGroups as PlanGroups,
    type PlanGroup as PlanGroup,
    PlanGroupsCursor as PlanGroupsCursor,
    type PlanGroupCreateParams as PlanGroupCreateParams,
    type PlanGroupRetrieveParams as PlanGroupRetrieveParams,
    type PlanGroupUpdateParams as PlanGroupUpdateParams,
    type PlanGroupListParams as PlanGroupListParams,
    type PlanGroupDeleteParams as PlanGroupDeleteParams,
  };

  export {
    PlanGroupLinks as PlanGroupLinks,
    type PlanGroupLink as PlanGroupLink,
    PlanGroupLinksCursor as PlanGroupLinksCursor,
    type PlanGroupLinkCreateParams as PlanGroupLinkCreateParams,
    type PlanGroupLinkRetrieveParams as PlanGroupLinkRetrieveParams,
    type PlanGroupLinkUpdateParams as PlanGroupLinkUpdateParams,
    type PlanGroupLinkListParams as PlanGroupLinkListParams,
    type PlanGroupLinkDeleteParams as PlanGroupLinkDeleteParams,
  };

  export {
    PlanTemplates as PlanTemplates,
    type PlanTemplate as PlanTemplate,
    PlanTemplatesCursor as PlanTemplatesCursor,
    type PlanTemplateCreateParams as PlanTemplateCreateParams,
    type PlanTemplateRetrieveParams as PlanTemplateRetrieveParams,
    type PlanTemplateUpdateParams as PlanTemplateUpdateParams,
    type PlanTemplateListParams as PlanTemplateListParams,
    type PlanTemplateDeleteParams as PlanTemplateDeleteParams,
  };

  export {
    Pricings as Pricings,
    type Pricing as Pricing,
    PricingsCursor as PricingsCursor,
    type PricingCreateParams as PricingCreateParams,
    type PricingRetrieveParams as PricingRetrieveParams,
    type PricingUpdateParams as PricingUpdateParams,
    type PricingListParams as PricingListParams,
    type PricingDeleteParams as PricingDeleteParams,
  };

  export {
    Products as Products,
    type Product as Product,
    ProductsCursor as ProductsCursor,
    type ProductCreateParams as ProductCreateParams,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductDeleteParams as ProductDeleteParams,
  };

  export {
    ResourceGroups as ResourceGroups,
    type ResourceGroup as ResourceGroup,
    type ResourceGroupListContentsResponse as ResourceGroupListContentsResponse,
    type ResourceGroupListPermissionsResponse as ResourceGroupListPermissionsResponse,
    ResourceGroupsCursor as ResourceGroupsCursor,
    type ResourceGroupCreateParams as ResourceGroupCreateParams,
    type ResourceGroupRetrieveParams as ResourceGroupRetrieveParams,
    type ResourceGroupUpdateParams as ResourceGroupUpdateParams,
    type ResourceGroupListParams as ResourceGroupListParams,
    type ResourceGroupDeleteParams as ResourceGroupDeleteParams,
    type ResourceGroupAddResourceParams as ResourceGroupAddResourceParams,
    type ResourceGroupListContentsParams as ResourceGroupListContentsParams,
    type ResourceGroupListPermissionsParams as ResourceGroupListPermissionsParams,
    type ResourceGroupRemoveResourceParams as ResourceGroupRemoveResourceParams,
  };

  export {
    ScheduledEventConfigurations as ScheduledEventConfigurations,
    type ScheduledEventConfiguration as ScheduledEventConfiguration,
    ScheduledEventConfigurationsCursor as ScheduledEventConfigurationsCursor,
    type ScheduledEventConfigurationCreateParams as ScheduledEventConfigurationCreateParams,
    type ScheduledEventConfigurationRetrieveParams as ScheduledEventConfigurationRetrieveParams,
    type ScheduledEventConfigurationUpdateParams as ScheduledEventConfigurationUpdateParams,
    type ScheduledEventConfigurationListParams as ScheduledEventConfigurationListParams,
    type ScheduledEventConfigurationDeleteParams as ScheduledEventConfigurationDeleteParams,
  };

  export {
    TransactionTypes as TransactionTypes,
    type TransactionType as TransactionType,
    TransactionTypesCursor as TransactionTypesCursor,
    type TransactionTypeCreateParams as TransactionTypeCreateParams,
    type TransactionTypeRetrieveParams as TransactionTypeRetrieveParams,
    type TransactionTypeUpdateParams as TransactionTypeUpdateParams,
    type TransactionTypeListParams as TransactionTypeListParams,
    type TransactionTypeDeleteParams as TransactionTypeDeleteParams,
  };

  export {
    Usage as Usage,
    type DownloadURLResponse as DownloadURLResponse,
    type SubmitMeasurementsResponse as SubmitMeasurementsResponse,
    type UsageQueryResponse as UsageQueryResponse,
    type UsageGetFailedIngestDownloadURLParams as UsageGetFailedIngestDownloadURLParams,
    type UsageQueryParams as UsageQueryParams,
    type UsageSubmitParams as UsageSubmitParams,
  };

  export {
    Users as Users,
    type User as User,
    type UserMeResponse as UserMeResponse,
    UsersCursor as UsersCursor,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserListPermissionsParams as UserListPermissionsParams,
    type UserListUserGroupsParams as UserListUserGroupsParams,
    type UserMeParams as UserMeParams,
    type UserResendPasswordParams as UserResendPasswordParams,
  };

  export {
    Webhooks as Webhooks,
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
