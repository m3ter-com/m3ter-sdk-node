# Authentication

Types:

- <code><a href="./src/resources/authentication.ts">AuthenticationGetBearerTokenResponse</a></code>

Methods:

- <code title="post /oauth/token">client.authentication.<a href="./src/resources/authentication.ts">getBearerToken</a>({ ...params }) -> AuthenticationGetBearerTokenResponse</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts.ts">AccountSearchResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/accounts">client.accounts.<a href="./src/resources/accounts.ts">create</a>({ ...params }) -> Account</code>
- <code title="get /organizations/{orgId}/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">retrieve</a>(id, { ...params }) -> Account</code>
- <code title="put /organizations/{orgId}/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">update</a>(id, { ...params }) -> Account</code>
- <code title="get /organizations/{orgId}/accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>({ ...params }) -> AccountsCursor</code>
- <code title="delete /organizations/{orgId}/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">delete</a>(id, { ...params }) -> Account</code>
- <code title="get /organizations/{orgId}/accounts/{id}/children">client.accounts.<a href="./src/resources/accounts.ts">listChildren</a>(id, { ...params }) -> Account</code>
- <code title="get /organizations/{orgId}/accounts/search">client.accounts.<a href="./src/resources/accounts.ts">search</a>({ ...params }) -> AccountSearchResponse</code>

# AccountPlans

Types:

- <code><a href="./src/resources/account-plans.ts">AccountPlan</a></code>

Methods:

- <code title="post /organizations/{orgId}/accountplans">client.accountPlans.<a href="./src/resources/account-plans.ts">create</a>({ ...params }) -> AccountPlan</code>
- <code title="get /organizations/{orgId}/accountplans/{id}">client.accountPlans.<a href="./src/resources/account-plans.ts">retrieve</a>(id, { ...params }) -> AccountPlan</code>
- <code title="put /organizations/{orgId}/accountplans/{id}">client.accountPlans.<a href="./src/resources/account-plans.ts">update</a>(id, { ...params }) -> AccountPlan</code>
- <code title="get /organizations/{orgId}/accountplans">client.accountPlans.<a href="./src/resources/account-plans.ts">list</a>({ ...params }) -> AccountPlansCursor</code>
- <code title="delete /organizations/{orgId}/accountplans/{id}">client.accountPlans.<a href="./src/resources/account-plans.ts">delete</a>(id, { ...params }) -> AccountPlan</code>

# Aggregations

Types:

- <code><a href="./src/resources/aggregations.ts">Aggregation</a></code>

Methods:

- <code title="post /organizations/{orgId}/aggregations">client.aggregations.<a href="./src/resources/aggregations.ts">create</a>({ ...params }) -> Aggregation</code>
- <code title="get /organizations/{orgId}/aggregations/{id}">client.aggregations.<a href="./src/resources/aggregations.ts">retrieve</a>(id, { ...params }) -> Aggregation</code>
- <code title="put /organizations/{orgId}/aggregations/{id}">client.aggregations.<a href="./src/resources/aggregations.ts">update</a>(id, { ...params }) -> Aggregation</code>
- <code title="get /organizations/{orgId}/aggregations">client.aggregations.<a href="./src/resources/aggregations.ts">list</a>({ ...params }) -> AggregationsCursor</code>
- <code title="delete /organizations/{orgId}/aggregations/{id}">client.aggregations.<a href="./src/resources/aggregations.ts">delete</a>(id, { ...params }) -> Aggregation</code>

# Balances

Types:

- <code><a href="./src/resources/balances/balances.ts">Balance</a></code>

Methods:

- <code title="post /organizations/{orgId}/balances">client.balances.<a href="./src/resources/balances/balances.ts">create</a>({ ...params }) -> Balance</code>
- <code title="get /organizations/{orgId}/balances/{id}">client.balances.<a href="./src/resources/balances/balances.ts">retrieve</a>(id, { ...params }) -> Balance</code>
- <code title="put /organizations/{orgId}/balances/{id}">client.balances.<a href="./src/resources/balances/balances.ts">update</a>(id, { ...params }) -> Balance</code>
- <code title="get /organizations/{orgId}/balances">client.balances.<a href="./src/resources/balances/balances.ts">list</a>({ ...params }) -> BalancesCursor</code>
- <code title="delete /organizations/{orgId}/balances/{id}">client.balances.<a href="./src/resources/balances/balances.ts">delete</a>(id, { ...params }) -> Balance</code>

## Transactions

Types:

- <code><a href="./src/resources/balances/transactions.ts">Transaction</a></code>

Methods:

- <code title="post /organizations/{orgId}/balances/{balanceId}/transactions">client.balances.transactions.<a href="./src/resources/balances/transactions.ts">create</a>(balanceId, { ...params }) -> Transaction</code>
- <code title="get /organizations/{orgId}/balances/{balanceId}/transactions">client.balances.transactions.<a href="./src/resources/balances/transactions.ts">list</a>(balanceId, { ...params }) -> TransactionsCursor</code>

# BillConfig

Types:

- <code><a href="./src/resources/bill-config.ts">BillConfig</a></code>

Methods:

- <code title="get /organizations/{orgId}/billconfig">client.billConfig.<a href="./src/resources/bill-config.ts">retrieve</a>({ ...params }) -> BillConfig</code>
- <code title="put /organizations/{orgId}/billconfig">client.billConfig.<a href="./src/resources/bill-config.ts">update</a>({ ...params }) -> BillConfig</code>

# Commitments

Types:

- <code><a href="./src/resources/commitments.ts">Commitment</a></code>
- <code><a href="./src/resources/commitments.ts">CommitmentSearchResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/commitments">client.commitments.<a href="./src/resources/commitments.ts">create</a>({ ...params }) -> Commitment</code>
- <code title="get /organizations/{orgId}/commitments/{id}">client.commitments.<a href="./src/resources/commitments.ts">retrieve</a>(id, { ...params }) -> Commitment</code>
- <code title="put /organizations/{orgId}/commitments/{id}">client.commitments.<a href="./src/resources/commitments.ts">update</a>(id, { ...params }) -> Commitment</code>
- <code title="get /organizations/{orgId}/commitments">client.commitments.<a href="./src/resources/commitments.ts">list</a>({ ...params }) -> CommitmentsCursor</code>
- <code title="delete /organizations/{orgId}/commitments/{id}">client.commitments.<a href="./src/resources/commitments.ts">delete</a>(id, { ...params }) -> Commitment</code>
- <code title="get /organizations/{orgId}/commitments/search">client.commitments.<a href="./src/resources/commitments.ts">search</a>({ ...params }) -> CommitmentSearchResponse</code>

# CompoundAggregations

Types:

- <code><a href="./src/resources/compound-aggregations.ts">CompoundAggregation</a></code>

Methods:

- <code title="post /organizations/{orgId}/compoundaggregations">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">create</a>({ ...params }) -> Aggregation</code>
- <code title="get /organizations/{orgId}/compoundaggregations/{id}">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">retrieve</a>(id, { ...params }) -> CompoundAggregation</code>
- <code title="put /organizations/{orgId}/compoundaggregations/{id}">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">update</a>(id, { ...params }) -> Aggregation</code>
- <code title="get /organizations/{orgId}/compoundaggregations">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">list</a>({ ...params }) -> CompoundAggregationsCursor</code>
- <code title="delete /organizations/{orgId}/compoundaggregations/{id}">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">delete</a>(id, { ...params }) -> CompoundAggregation</code>

# Contracts

Types:

- <code><a href="./src/resources/contracts.ts">Contract</a></code>

Methods:

- <code title="post /organizations/{orgId}/contracts">client.contracts.<a href="./src/resources/contracts.ts">create</a>({ ...params }) -> Contract</code>
- <code title="get /organizations/{orgId}/contracts/{id}">client.contracts.<a href="./src/resources/contracts.ts">retrieve</a>(id, { ...params }) -> Contract</code>
- <code title="put /organizations/{orgId}/contracts/{id}">client.contracts.<a href="./src/resources/contracts.ts">update</a>(id, { ...params }) -> Contract</code>
- <code title="get /organizations/{orgId}/contracts">client.contracts.<a href="./src/resources/contracts.ts">list</a>({ ...params }) -> ContractsCursor</code>
- <code title="delete /organizations/{orgId}/contracts/{id}">client.contracts.<a href="./src/resources/contracts.ts">delete</a>(id, { ...params }) -> Contract</code>

# Counters

Types:

- <code><a href="./src/resources/counters.ts">Counter</a></code>

Methods:

- <code title="post /organizations/{orgId}/counters">client.counters.<a href="./src/resources/counters.ts">create</a>({ ...params }) -> Counter</code>
- <code title="get /organizations/{orgId}/counters/{id}">client.counters.<a href="./src/resources/counters.ts">retrieve</a>(id, { ...params }) -> Counter</code>
- <code title="put /organizations/{orgId}/counters/{id}">client.counters.<a href="./src/resources/counters.ts">update</a>(id, { ...params }) -> Counter</code>
- <code title="get /organizations/{orgId}/counters">client.counters.<a href="./src/resources/counters.ts">list</a>({ ...params }) -> CountersCursor</code>
- <code title="delete /organizations/{orgId}/counters/{id}">client.counters.<a href="./src/resources/counters.ts">delete</a>(id, { ...params }) -> Counter</code>

# CounterAdjustments

Types:

- <code><a href="./src/resources/counter-adjustments.ts">CounterAdjustment</a></code>

Methods:

- <code title="post /organizations/{orgId}/counteradjustments">client.counterAdjustments.<a href="./src/resources/counter-adjustments.ts">create</a>({ ...params }) -> CounterAdjustment</code>
- <code title="get /organizations/{orgId}/counteradjustments/{id}">client.counterAdjustments.<a href="./src/resources/counter-adjustments.ts">retrieve</a>(id, { ...params }) -> CounterAdjustment</code>
- <code title="put /organizations/{orgId}/counteradjustments/{id}">client.counterAdjustments.<a href="./src/resources/counter-adjustments.ts">update</a>(id, { ...params }) -> CounterAdjustment</code>
- <code title="get /organizations/{orgId}/counteradjustments">client.counterAdjustments.<a href="./src/resources/counter-adjustments.ts">list</a>({ ...params }) -> CounterAdjustmentsCursor</code>
- <code title="delete /organizations/{orgId}/counteradjustments/{id}">client.counterAdjustments.<a href="./src/resources/counter-adjustments.ts">delete</a>(id, { ...params }) -> CounterAdjustment</code>

# CounterPricings

Types:

- <code><a href="./src/resources/counter-pricings.ts">CounterPricing</a></code>

Methods:

- <code title="post /organizations/{orgId}/counterpricings">client.counterPricings.<a href="./src/resources/counter-pricings.ts">create</a>({ ...params }) -> CounterPricing</code>
- <code title="get /organizations/{orgId}/counterpricings/{id}">client.counterPricings.<a href="./src/resources/counter-pricings.ts">retrieve</a>(id, { ...params }) -> CounterPricing</code>
- <code title="put /organizations/{orgId}/counterpricings/{id}">client.counterPricings.<a href="./src/resources/counter-pricings.ts">update</a>(id, { ...params }) -> CounterPricing</code>
- <code title="get /organizations/{orgId}/counterpricings">client.counterPricings.<a href="./src/resources/counter-pricings.ts">list</a>({ ...params }) -> CounterPricingsCursor</code>
- <code title="delete /organizations/{orgId}/counterpricings/{id}">client.counterPricings.<a href="./src/resources/counter-pricings.ts">delete</a>(id, { ...params }) -> CounterPricing</code>

# CreditReasons

Types:

- <code><a href="./src/resources/credit-reasons.ts">CreditReason</a></code>

Methods:

- <code title="post /organizations/{orgId}/picklists/creditreasons">client.creditReasons.<a href="./src/resources/credit-reasons.ts">create</a>({ ...params }) -> CreditReason</code>
- <code title="get /organizations/{orgId}/picklists/creditreasons/{id}">client.creditReasons.<a href="./src/resources/credit-reasons.ts">retrieve</a>(id, { ...params }) -> CreditReason</code>
- <code title="put /organizations/{orgId}/picklists/creditreasons/{id}">client.creditReasons.<a href="./src/resources/credit-reasons.ts">update</a>(id, { ...params }) -> CreditReason</code>
- <code title="get /organizations/{orgId}/picklists/creditreasons">client.creditReasons.<a href="./src/resources/credit-reasons.ts">list</a>({ ...params }) -> CreditReasonsCursor</code>
- <code title="delete /organizations/{orgId}/picklists/creditreasons/{id}">client.creditReasons.<a href="./src/resources/credit-reasons.ts">delete</a>(id, { ...params }) -> CreditReason</code>

# Currencies

Types:

- <code><a href="./src/resources/currencies.ts">Currency</a></code>

Methods:

- <code title="post /organizations/{orgId}/picklists/currency">client.currencies.<a href="./src/resources/currencies.ts">create</a>({ ...params }) -> Currency</code>
- <code title="get /organizations/{orgId}/picklists/currency/{id}">client.currencies.<a href="./src/resources/currencies.ts">retrieve</a>(id, { ...params }) -> Currency</code>
- <code title="put /organizations/{orgId}/picklists/currency/{id}">client.currencies.<a href="./src/resources/currencies.ts">update</a>(id, { ...params }) -> Currency</code>
- <code title="get /organizations/{orgId}/picklists/currency">client.currencies.<a href="./src/resources/currencies.ts">list</a>({ ...params }) -> CurrenciesCursor</code>
- <code title="delete /organizations/{orgId}/picklists/currency/{id}">client.currencies.<a href="./src/resources/currencies.ts">delete</a>(id, { ...params }) -> Currency</code>

# DebitReasons

Types:

- <code><a href="./src/resources/debit-reasons.ts">DebitReason</a></code>

Methods:

- <code title="post /organizations/{orgId}/picklists/debitreasons">client.debitReasons.<a href="./src/resources/debit-reasons.ts">create</a>({ ...params }) -> DebitReason</code>
- <code title="get /organizations/{orgId}/picklists/debitreasons/{id}">client.debitReasons.<a href="./src/resources/debit-reasons.ts">retrieve</a>(id, { ...params }) -> DebitReason</code>
- <code title="put /organizations/{orgId}/picklists/debitreasons/{id}">client.debitReasons.<a href="./src/resources/debit-reasons.ts">update</a>(id, { ...params }) -> DebitReason</code>
- <code title="get /organizations/{orgId}/picklists/debitreasons">client.debitReasons.<a href="./src/resources/debit-reasons.ts">list</a>({ ...params }) -> DebitReasonsCursor</code>
- <code title="delete /organizations/{orgId}/picklists/debitreasons/{id}">client.debitReasons.<a href="./src/resources/debit-reasons.ts">delete</a>(id, { ...params }) -> DebitReason</code>

# Meters

Types:

- <code><a href="./src/resources/meters.ts">Meter</a></code>

Methods:

- <code title="post /organizations/{orgId}/meters">client.meters.<a href="./src/resources/meters.ts">create</a>({ ...params }) -> Meter</code>
- <code title="get /organizations/{orgId}/meters/{id}">client.meters.<a href="./src/resources/meters.ts">retrieve</a>(id, { ...params }) -> Meter</code>
- <code title="put /organizations/{orgId}/meters/{id}">client.meters.<a href="./src/resources/meters.ts">update</a>(id, { ...params }) -> Meter</code>
- <code title="get /organizations/{orgId}/meters">client.meters.<a href="./src/resources/meters.ts">list</a>({ ...params }) -> MetersCursor</code>
- <code title="delete /organizations/{orgId}/meters/{id}">client.meters.<a href="./src/resources/meters.ts">delete</a>(id, { ...params }) -> Meter</code>

# OrganizationConfig

Types:

- <code><a href="./src/resources/organization-config.ts">OrganizationConfig</a></code>

Methods:

- <code title="get /organizations/{orgId}/organizationconfig">client.organizationConfig.<a href="./src/resources/organization-config.ts">retrieve</a>({ ...params }) -> OrganizationConfig</code>
- <code title="put /organizations/{orgId}/organizationconfig">client.organizationConfig.<a href="./src/resources/organization-config.ts">update</a>({ ...params }) -> OrganizationConfig</code>

# Plans

Types:

- <code><a href="./src/resources/plans.ts">Plan</a></code>

Methods:

- <code title="post /organizations/{orgId}/plans">client.plans.<a href="./src/resources/plans.ts">create</a>({ ...params }) -> Plan</code>
- <code title="get /organizations/{orgId}/plans/{id}">client.plans.<a href="./src/resources/plans.ts">retrieve</a>(id, { ...params }) -> Plan</code>
- <code title="put /organizations/{orgId}/plans/{id}">client.plans.<a href="./src/resources/plans.ts">update</a>(id, { ...params }) -> Plan</code>
- <code title="get /organizations/{orgId}/plans">client.plans.<a href="./src/resources/plans.ts">list</a>({ ...params }) -> PlansCursor</code>
- <code title="delete /organizations/{orgId}/plans/{id}">client.plans.<a href="./src/resources/plans.ts">delete</a>(id, { ...params }) -> Plan</code>

# PlanGroups

Types:

- <code><a href="./src/resources/plan-groups.ts">PlanGroup</a></code>

Methods:

- <code title="post /organizations/{orgId}/plangroups">client.planGroups.<a href="./src/resources/plan-groups.ts">create</a>({ ...params }) -> PlanGroup</code>
- <code title="get /organizations/{orgId}/plangroups/{id}">client.planGroups.<a href="./src/resources/plan-groups.ts">retrieve</a>(id, { ...params }) -> PlanGroup</code>
- <code title="put /organizations/{orgId}/plangroups/{id}">client.planGroups.<a href="./src/resources/plan-groups.ts">update</a>(id, { ...params }) -> PlanGroup</code>
- <code title="get /organizations/{orgId}/plangroups">client.planGroups.<a href="./src/resources/plan-groups.ts">list</a>({ ...params }) -> PlanGroupsCursor</code>
- <code title="delete /organizations/{orgId}/plangroups/{id}">client.planGroups.<a href="./src/resources/plan-groups.ts">delete</a>(id, { ...params }) -> PlanGroup</code>

# PlanGroupLinks

Types:

- <code><a href="./src/resources/plan-group-links.ts">PlanGroupLink</a></code>

Methods:

- <code title="post /organizations/{orgId}/plangrouplinks">client.planGroupLinks.<a href="./src/resources/plan-group-links.ts">create</a>({ ...params }) -> PlanGroupLink</code>
- <code title="get /organizations/{orgId}/plangrouplinks/{id}">client.planGroupLinks.<a href="./src/resources/plan-group-links.ts">retrieve</a>(id, { ...params }) -> PlanGroupLink</code>
- <code title="put /organizations/{orgId}/plangrouplinks/{id}">client.planGroupLinks.<a href="./src/resources/plan-group-links.ts">update</a>(id, { ...params }) -> PlanGroupLink</code>
- <code title="get /organizations/{orgId}/plangrouplinks">client.planGroupLinks.<a href="./src/resources/plan-group-links.ts">list</a>({ ...params }) -> PlanGroupLinksCursor</code>
- <code title="delete /organizations/{orgId}/plangrouplinks/{id}">client.planGroupLinks.<a href="./src/resources/plan-group-links.ts">delete</a>(id, { ...params }) -> PlanGroupLink</code>

# PlanTemplates

Types:

- <code><a href="./src/resources/plan-templates.ts">PlanTemplate</a></code>

Methods:

- <code title="post /organizations/{orgId}/plantemplates">client.planTemplates.<a href="./src/resources/plan-templates.ts">create</a>({ ...params }) -> PlanTemplate</code>
- <code title="get /organizations/{orgId}/plantemplates/{id}">client.planTemplates.<a href="./src/resources/plan-templates.ts">retrieve</a>(id, { ...params }) -> PlanTemplate</code>
- <code title="put /organizations/{orgId}/plantemplates/{id}">client.planTemplates.<a href="./src/resources/plan-templates.ts">update</a>(id, { ...params }) -> PlanTemplate</code>
- <code title="get /organizations/{orgId}/plantemplates">client.planTemplates.<a href="./src/resources/plan-templates.ts">list</a>({ ...params }) -> PlanTemplatesCursor</code>
- <code title="delete /organizations/{orgId}/plantemplates/{id}">client.planTemplates.<a href="./src/resources/plan-templates.ts">delete</a>(id, { ...params }) -> PlanTemplate</code>

# Pricings

Types:

- <code><a href="./src/resources/pricings.ts">Pricing</a></code>

Methods:

- <code title="post /organizations/{orgId}/pricings">client.pricings.<a href="./src/resources/pricings.ts">create</a>({ ...params }) -> Pricing</code>
- <code title="get /organizations/{orgId}/pricings/{id}">client.pricings.<a href="./src/resources/pricings.ts">retrieve</a>(id, { ...params }) -> Pricing</code>
- <code title="put /organizations/{orgId}/pricings/{id}">client.pricings.<a href="./src/resources/pricings.ts">update</a>(id, { ...params }) -> Pricing</code>
- <code title="get /organizations/{orgId}/pricings">client.pricings.<a href="./src/resources/pricings.ts">list</a>({ ...params }) -> PricingsCursor</code>
- <code title="delete /organizations/{orgId}/pricings/{id}">client.pricings.<a href="./src/resources/pricings.ts">delete</a>(id, { ...params }) -> Pricing</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">Product</a></code>

Methods:

- <code title="post /organizations/{orgId}/products">client.products.<a href="./src/resources/products.ts">create</a>({ ...params }) -> Product</code>
- <code title="get /organizations/{orgId}/products/{id}">client.products.<a href="./src/resources/products.ts">retrieve</a>(id, { ...params }) -> Product</code>
- <code title="put /organizations/{orgId}/products/{id}">client.products.<a href="./src/resources/products.ts">update</a>(id, { ...params }) -> Product</code>
- <code title="get /organizations/{orgId}/products">client.products.<a href="./src/resources/products.ts">list</a>({ ...params }) -> ProductsCursor</code>
- <code title="delete /organizations/{orgId}/products/{id}">client.products.<a href="./src/resources/products.ts">delete</a>(id, { ...params }) -> Product</code>

# TransactionTypes

Types:

- <code><a href="./src/resources/transaction-types.ts">TransactionType</a></code>

Methods:

- <code title="post /organizations/{orgId}/picklists/transactiontypes">client.transactionTypes.<a href="./src/resources/transaction-types.ts">create</a>({ ...params }) -> TransactionType</code>
- <code title="get /organizations/{orgId}/picklists/transactiontypes/{id}">client.transactionTypes.<a href="./src/resources/transaction-types.ts">retrieve</a>(id, { ...params }) -> TransactionType</code>
- <code title="put /organizations/{orgId}/picklists/transactiontypes/{id}">client.transactionTypes.<a href="./src/resources/transaction-types.ts">update</a>(id, { ...params }) -> TransactionType</code>
- <code title="get /organizations/{orgId}/picklists/transactiontypes">client.transactionTypes.<a href="./src/resources/transaction-types.ts">list</a>({ ...params }) -> TransactionTypesCursor</code>
- <code title="delete /organizations/{orgId}/picklists/transactiontypes/{id}">client.transactionTypes.<a href="./src/resources/transaction-types.ts">delete</a>(id, { ...params }) -> TransactionType</code>

# DataExports

Types:

- <code><a href="./src/resources/data-exports.ts">AdhocExport</a></code>
- <code><a href="./src/resources/data-exports.ts">AdHocOperationalDataRequest</a></code>
- <code><a href="./src/resources/data-exports.ts">AdHocUsageDataRequest</a></code>

Methods:

- <code title="post /organizations/{orgId}/dataexports/adhoc">client.dataExports.<a href="./src/resources/data-exports.ts">createAdhoc</a>({ ...params }) -> AdhocExport</code>
