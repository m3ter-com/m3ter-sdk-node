# Authentication

Types:

- <code><a href="./src/resources/authentication.ts">AuthenticationGetBearerTokenResponse</a></code>

Methods:

- <code title="post /oauth/token">client.authentication.<a href="./src/resources/authentication.ts">getBearerToken</a>({ ...params }) -> AuthenticationGetBearerTokenResponse</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountSearchResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/accounts">client.accounts.<a href="./src/resources/accounts.ts">create</a>(orgId, { ...params }) -> Account</code>
- <code title="get /organizations/{orgId}/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">retrieve</a>(orgId, id) -> Account</code>
- <code title="put /organizations/{orgId}/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">update</a>(orgId, id, { ...params }) -> Account</code>
- <code title="get /organizations/{orgId}/accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">delete</a>(orgId, id) -> Account</code>
- <code title="get /organizations/{orgId}/accounts/{id}/children">client.accounts.<a href="./src/resources/accounts.ts">listChildren</a>(orgId, id, { ...params }) -> Account</code>
- <code title="get /organizations/{orgId}/accounts/search">client.accounts.<a href="./src/resources/accounts.ts">search</a>(orgId, { ...params }) -> unknown</code>

# AccountPlans

Types:

- <code><a href="./src/resources/account-plans.ts">AccountPlan</a></code>
- <code><a href="./src/resources/account-plans.ts">AccountPlanListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/accountplans">client.accountPlans.<a href="./src/resources/account-plans.ts">create</a>(orgId, { ...params }) -> AccountPlan</code>
- <code title="get /organizations/{orgId}/accountplans/{id}">client.accountPlans.<a href="./src/resources/account-plans.ts">retrieve</a>(orgId, id) -> AccountPlan</code>
- <code title="put /organizations/{orgId}/accountplans/{id}">client.accountPlans.<a href="./src/resources/account-plans.ts">update</a>(orgId, id, { ...params }) -> AccountPlan</code>
- <code title="get /organizations/{orgId}/accountplans">client.accountPlans.<a href="./src/resources/account-plans.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/accountplans/{id}">client.accountPlans.<a href="./src/resources/account-plans.ts">delete</a>(orgId, id) -> AccountPlan</code>

# Aggregations

Types:

- <code><a href="./src/resources/aggregations.ts">Aggregation</a></code>
- <code><a href="./src/resources/aggregations.ts">AggregationListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/aggregations">client.aggregations.<a href="./src/resources/aggregations.ts">create</a>(orgId, { ...params }) -> Aggregation</code>
- <code title="get /organizations/{orgId}/aggregations/{id}">client.aggregations.<a href="./src/resources/aggregations.ts">retrieve</a>(orgId, id) -> Aggregation</code>
- <code title="put /organizations/{orgId}/aggregations/{id}">client.aggregations.<a href="./src/resources/aggregations.ts">update</a>(orgId, id, { ...params }) -> Aggregation</code>
- <code title="get /organizations/{orgId}/aggregations">client.aggregations.<a href="./src/resources/aggregations.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/aggregations/{id}">client.aggregations.<a href="./src/resources/aggregations.ts">delete</a>(orgId, id) -> Aggregation</code>

# Balances

Types:

- <code><a href="./src/resources/balances/balances.ts">Balance</a></code>
- <code><a href="./src/resources/balances/balances.ts">BalanceListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/balances">client.balances.<a href="./src/resources/balances/balances.ts">create</a>(orgId, { ...params }) -> Balance</code>
- <code title="get /organizations/{orgId}/balances/{id}">client.balances.<a href="./src/resources/balances/balances.ts">retrieve</a>(orgId, id) -> Balance</code>
- <code title="put /organizations/{orgId}/balances/{id}">client.balances.<a href="./src/resources/balances/balances.ts">update</a>(orgId, id, { ...params }) -> Balance</code>
- <code title="get /organizations/{orgId}/balances">client.balances.<a href="./src/resources/balances/balances.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/balances/{id}">client.balances.<a href="./src/resources/balances/balances.ts">delete</a>(orgId, id) -> Balance</code>

## Transactions

Types:

- <code><a href="./src/resources/balances/transactions.ts">Transaction</a></code>
- <code><a href="./src/resources/balances/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/balances/{balanceId}/transactions">client.balances.transactions.<a href="./src/resources/balances/transactions.ts">create</a>(orgId, balanceId, { ...params }) -> Transaction</code>
- <code title="get /organizations/{orgId}/balances/{balanceId}/transactions">client.balances.transactions.<a href="./src/resources/balances/transactions.ts">list</a>(orgId, balanceId, { ...params }) -> unknown</code>

# BillConfig

Types:

- <code><a href="./src/resources/bill-config.ts">BillConfig</a></code>

Methods:

- <code title="get /organizations/{orgId}/billconfig">client.billConfig.<a href="./src/resources/bill-config.ts">retrieve</a>(orgId) -> BillConfig</code>
- <code title="put /organizations/{orgId}/billconfig">client.billConfig.<a href="./src/resources/bill-config.ts">update</a>(orgId, { ...params }) -> BillConfig</code>

# Commitments

Types:

- <code><a href="./src/resources/commitments.ts">Commitment</a></code>
- <code><a href="./src/resources/commitments.ts">CommitmentListResponse</a></code>
- <code><a href="./src/resources/commitments.ts">CommitmentSearchResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/commitments">client.commitments.<a href="./src/resources/commitments.ts">create</a>(orgId, { ...params }) -> Commitment</code>
- <code title="get /organizations/{orgId}/commitments/{id}">client.commitments.<a href="./src/resources/commitments.ts">retrieve</a>(orgId, id) -> Commitment</code>
- <code title="put /organizations/{orgId}/commitments/{id}">client.commitments.<a href="./src/resources/commitments.ts">update</a>(orgId, id, { ...params }) -> Commitment</code>
- <code title="get /organizations/{orgId}/commitments">client.commitments.<a href="./src/resources/commitments.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/commitments/{id}">client.commitments.<a href="./src/resources/commitments.ts">delete</a>(orgId, id) -> Commitment</code>
- <code title="get /organizations/{orgId}/commitments/search">client.commitments.<a href="./src/resources/commitments.ts">search</a>(orgId, { ...params }) -> unknown</code>

# CompoundAggregations

Types:

- <code><a href="./src/resources/compound-aggregations.ts">CompoundAggregation</a></code>
- <code><a href="./src/resources/compound-aggregations.ts">CompoundAggregationListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/compoundaggregations">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">create</a>(orgId, { ...params }) -> Aggregation</code>
- <code title="get /organizations/{orgId}/compoundaggregations/{id}">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">retrieve</a>(orgId, id) -> CompoundAggregation</code>
- <code title="put /organizations/{orgId}/compoundaggregations/{id}">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">update</a>(orgId, id, { ...params }) -> Aggregation</code>
- <code title="get /organizations/{orgId}/compoundaggregations">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/compoundaggregations/{id}">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">delete</a>(orgId, id) -> CompoundAggregation</code>

# Contracts

Types:

- <code><a href="./src/resources/contracts.ts">Contract</a></code>
- <code><a href="./src/resources/contracts.ts">ContractListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/contracts">client.contracts.<a href="./src/resources/contracts.ts">create</a>(orgId, { ...params }) -> Contract</code>
- <code title="get /organizations/{orgId}/contracts/{id}">client.contracts.<a href="./src/resources/contracts.ts">retrieve</a>(orgId, id) -> Contract</code>
- <code title="put /organizations/{orgId}/contracts/{id}">client.contracts.<a href="./src/resources/contracts.ts">update</a>(orgId, id, { ...params }) -> Contract</code>
- <code title="get /organizations/{orgId}/contracts">client.contracts.<a href="./src/resources/contracts.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/contracts/{id}">client.contracts.<a href="./src/resources/contracts.ts">delete</a>(orgId, id) -> Contract</code>

# Counters

Types:

- <code><a href="./src/resources/counters.ts">Counter</a></code>
- <code><a href="./src/resources/counters.ts">CounterListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/counters">client.counters.<a href="./src/resources/counters.ts">create</a>(orgId, { ...params }) -> Counter</code>
- <code title="get /organizations/{orgId}/counters/{id}">client.counters.<a href="./src/resources/counters.ts">retrieve</a>(orgId, id) -> Counter</code>
- <code title="put /organizations/{orgId}/counters/{id}">client.counters.<a href="./src/resources/counters.ts">update</a>(orgId, id, { ...params }) -> Counter</code>
- <code title="get /organizations/{orgId}/counters">client.counters.<a href="./src/resources/counters.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/counters/{id}">client.counters.<a href="./src/resources/counters.ts">delete</a>(orgId, id) -> Counter</code>

# CounterAdjustments

Types:

- <code><a href="./src/resources/counter-adjustments.ts">CounterAdjustment</a></code>
- <code><a href="./src/resources/counter-adjustments.ts">CounterAdjustmentListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/counteradjustments">client.counterAdjustments.<a href="./src/resources/counter-adjustments.ts">create</a>(orgId, { ...params }) -> CounterAdjustment</code>
- <code title="get /organizations/{orgId}/counteradjustments/{id}">client.counterAdjustments.<a href="./src/resources/counter-adjustments.ts">retrieve</a>(orgId, id) -> CounterAdjustment</code>
- <code title="put /organizations/{orgId}/counteradjustments/{id}">client.counterAdjustments.<a href="./src/resources/counter-adjustments.ts">update</a>(orgId, id, { ...params }) -> CounterAdjustment</code>
- <code title="get /organizations/{orgId}/counteradjustments">client.counterAdjustments.<a href="./src/resources/counter-adjustments.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/counteradjustments/{id}">client.counterAdjustments.<a href="./src/resources/counter-adjustments.ts">delete</a>(orgId, id) -> CounterAdjustment</code>

# CounterPricings

Types:

- <code><a href="./src/resources/counter-pricings.ts">CounterPricing</a></code>
- <code><a href="./src/resources/counter-pricings.ts">CounterPricingListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/counterpricings">client.counterPricings.<a href="./src/resources/counter-pricings.ts">create</a>(orgId, { ...params }) -> CounterPricing</code>
- <code title="get /organizations/{orgId}/counterpricings/{id}">client.counterPricings.<a href="./src/resources/counter-pricings.ts">retrieve</a>(orgId, id) -> CounterPricing</code>
- <code title="put /organizations/{orgId}/counterpricings/{id}">client.counterPricings.<a href="./src/resources/counter-pricings.ts">update</a>(orgId, id, { ...params }) -> CounterPricing</code>
- <code title="get /organizations/{orgId}/counterpricings">client.counterPricings.<a href="./src/resources/counter-pricings.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/counterpricings/{id}">client.counterPricings.<a href="./src/resources/counter-pricings.ts">delete</a>(orgId, id) -> CounterPricing</code>

# CreditReasons

Types:

- <code><a href="./src/resources/credit-reasons.ts">CreditReason</a></code>
- <code><a href="./src/resources/credit-reasons.ts">CreditReasonListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/picklists/creditreasons">client.creditReasons.<a href="./src/resources/credit-reasons.ts">create</a>(orgId, { ...params }) -> CreditReason</code>
- <code title="get /organizations/{orgId}/picklists/creditreasons/{id}">client.creditReasons.<a href="./src/resources/credit-reasons.ts">retrieve</a>(orgId, id) -> CreditReason</code>
- <code title="put /organizations/{orgId}/picklists/creditreasons/{id}">client.creditReasons.<a href="./src/resources/credit-reasons.ts">update</a>(orgId, id, { ...params }) -> CreditReason</code>
- <code title="get /organizations/{orgId}/picklists/creditreasons">client.creditReasons.<a href="./src/resources/credit-reasons.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/picklists/creditreasons/{id}">client.creditReasons.<a href="./src/resources/credit-reasons.ts">delete</a>(orgId, id) -> CreditReason</code>

# Currencies

Types:

- <code><a href="./src/resources/currencies.ts">Currency</a></code>
- <code><a href="./src/resources/currencies.ts">CurrencyListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/picklists/currency">client.currencies.<a href="./src/resources/currencies.ts">create</a>(orgId, { ...params }) -> Currency</code>
- <code title="get /organizations/{orgId}/picklists/currency/{id}">client.currencies.<a href="./src/resources/currencies.ts">retrieve</a>(orgId, id) -> Currency</code>
- <code title="put /organizations/{orgId}/picklists/currency/{id}">client.currencies.<a href="./src/resources/currencies.ts">update</a>(orgId, id, { ...params }) -> Currency</code>
- <code title="get /organizations/{orgId}/picklists/currency">client.currencies.<a href="./src/resources/currencies.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/picklists/currency/{id}">client.currencies.<a href="./src/resources/currencies.ts">delete</a>(orgId, id) -> Currency</code>

# DebitReasons

Types:

- <code><a href="./src/resources/debit-reasons.ts">DebitReason</a></code>
- <code><a href="./src/resources/debit-reasons.ts">DebitReasonListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/picklists/debitreasons">client.debitReasons.<a href="./src/resources/debit-reasons.ts">create</a>(orgId, { ...params }) -> DebitReason</code>
- <code title="get /organizations/{orgId}/picklists/debitreasons/{id}">client.debitReasons.<a href="./src/resources/debit-reasons.ts">retrieve</a>(orgId, id) -> DebitReason</code>
- <code title="put /organizations/{orgId}/picklists/debitreasons/{id}">client.debitReasons.<a href="./src/resources/debit-reasons.ts">update</a>(orgId, id, { ...params }) -> DebitReason</code>
- <code title="get /organizations/{orgId}/picklists/debitreasons">client.debitReasons.<a href="./src/resources/debit-reasons.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/picklists/debitreasons/{id}">client.debitReasons.<a href="./src/resources/debit-reasons.ts">delete</a>(orgId, id) -> DebitReason</code>

# Meters

Types:

- <code><a href="./src/resources/meters.ts">Meter</a></code>
- <code><a href="./src/resources/meters.ts">MeterListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/meters">client.meters.<a href="./src/resources/meters.ts">create</a>(orgId, { ...params }) -> Meter</code>
- <code title="get /organizations/{orgId}/meters/{id}">client.meters.<a href="./src/resources/meters.ts">retrieve</a>(orgId, id) -> Meter</code>
- <code title="put /organizations/{orgId}/meters/{id}">client.meters.<a href="./src/resources/meters.ts">update</a>(orgId, id, { ...params }) -> Meter</code>
- <code title="get /organizations/{orgId}/meters">client.meters.<a href="./src/resources/meters.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/meters/{id}">client.meters.<a href="./src/resources/meters.ts">delete</a>(orgId, id) -> Meter</code>

# OrganizationConfig

Types:

- <code><a href="./src/resources/organization-config.ts">OrganizationConfig</a></code>

Methods:

- <code title="get /organizations/{orgId}/organizationconfig">client.organizationConfig.<a href="./src/resources/organization-config.ts">retrieve</a>(orgId) -> OrganizationConfig</code>
- <code title="put /organizations/{orgId}/organizationconfig">client.organizationConfig.<a href="./src/resources/organization-config.ts">update</a>(orgId, { ...params }) -> OrganizationConfig</code>

# Plans

Types:

- <code><a href="./src/resources/plans.ts">Plan</a></code>
- <code><a href="./src/resources/plans.ts">PlanListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/plans">client.plans.<a href="./src/resources/plans.ts">create</a>(orgId, { ...params }) -> Plan</code>
- <code title="get /organizations/{orgId}/plans/{id}">client.plans.<a href="./src/resources/plans.ts">retrieve</a>(orgId, id) -> Plan</code>
- <code title="put /organizations/{orgId}/plans/{id}">client.plans.<a href="./src/resources/plans.ts">update</a>(orgId, id, { ...params }) -> Plan</code>
- <code title="get /organizations/{orgId}/plans">client.plans.<a href="./src/resources/plans.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/plans/{id}">client.plans.<a href="./src/resources/plans.ts">delete</a>(orgId, id) -> Plan</code>

# PlanGroups

Types:

- <code><a href="./src/resources/plan-groups.ts">PlanGroup</a></code>
- <code><a href="./src/resources/plan-groups.ts">PlanGroupListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/plangroups">client.planGroups.<a href="./src/resources/plan-groups.ts">create</a>(orgId, { ...params }) -> PlanGroup</code>
- <code title="get /organizations/{orgId}/plangroups/{id}">client.planGroups.<a href="./src/resources/plan-groups.ts">retrieve</a>(orgId, id) -> PlanGroup</code>
- <code title="put /organizations/{orgId}/plangroups/{id}">client.planGroups.<a href="./src/resources/plan-groups.ts">update</a>(orgId, id, { ...params }) -> PlanGroup</code>
- <code title="get /organizations/{orgId}/plangroups">client.planGroups.<a href="./src/resources/plan-groups.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/plangroups/{id}">client.planGroups.<a href="./src/resources/plan-groups.ts">delete</a>(orgId, id) -> PlanGroup</code>

# PlanGroupLinks

Types:

- <code><a href="./src/resources/plan-group-links.ts">PlanGroupLink</a></code>
- <code><a href="./src/resources/plan-group-links.ts">PlanGroupLinkListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/plangrouplinks">client.planGroupLinks.<a href="./src/resources/plan-group-links.ts">create</a>(orgId, { ...params }) -> PlanGroupLink</code>
- <code title="get /organizations/{orgId}/plangrouplinks/{id}">client.planGroupLinks.<a href="./src/resources/plan-group-links.ts">retrieve</a>(orgId, id) -> PlanGroupLink</code>
- <code title="put /organizations/{orgId}/plangrouplinks/{id}">client.planGroupLinks.<a href="./src/resources/plan-group-links.ts">update</a>(orgId, id, { ...params }) -> PlanGroupLink</code>
- <code title="get /organizations/{orgId}/plangrouplinks">client.planGroupLinks.<a href="./src/resources/plan-group-links.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/plangrouplinks/{id}">client.planGroupLinks.<a href="./src/resources/plan-group-links.ts">delete</a>(orgId, id) -> PlanGroupLink</code>

# PlanTemplates

Types:

- <code><a href="./src/resources/plan-templates.ts">PlanTemplate</a></code>
- <code><a href="./src/resources/plan-templates.ts">PlanTemplateListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/plantemplates">client.planTemplates.<a href="./src/resources/plan-templates.ts">create</a>(orgId, { ...params }) -> PlanTemplate</code>
- <code title="get /organizations/{orgId}/plantemplates/{id}">client.planTemplates.<a href="./src/resources/plan-templates.ts">retrieve</a>(orgId, id) -> PlanTemplate</code>
- <code title="put /organizations/{orgId}/plantemplates/{id}">client.planTemplates.<a href="./src/resources/plan-templates.ts">update</a>(orgId, id, { ...params }) -> PlanTemplate</code>
- <code title="get /organizations/{orgId}/plantemplates">client.planTemplates.<a href="./src/resources/plan-templates.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/plantemplates/{id}">client.planTemplates.<a href="./src/resources/plan-templates.ts">delete</a>(orgId, id) -> PlanTemplate</code>

# Pricings

Types:

- <code><a href="./src/resources/pricings.ts">Pricing</a></code>
- <code><a href="./src/resources/pricings.ts">PricingListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/pricings">client.pricings.<a href="./src/resources/pricings.ts">create</a>(orgId, { ...params }) -> Pricing</code>
- <code title="get /organizations/{orgId}/pricings/{id}">client.pricings.<a href="./src/resources/pricings.ts">retrieve</a>(orgId, id) -> Pricing</code>
- <code title="put /organizations/{orgId}/pricings/{id}">client.pricings.<a href="./src/resources/pricings.ts">update</a>(orgId, id, { ...params }) -> Pricing</code>
- <code title="get /organizations/{orgId}/pricings">client.pricings.<a href="./src/resources/pricings.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/pricings/{id}">client.pricings.<a href="./src/resources/pricings.ts">delete</a>(orgId, id) -> Pricing</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">Product</a></code>
- <code><a href="./src/resources/products.ts">ProductListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/products">client.products.<a href="./src/resources/products.ts">create</a>(orgId, { ...params }) -> Product</code>
- <code title="get /organizations/{orgId}/products/{id}">client.products.<a href="./src/resources/products.ts">retrieve</a>(orgId, id) -> Product</code>
- <code title="put /organizations/{orgId}/products/{id}">client.products.<a href="./src/resources/products.ts">update</a>(orgId, id, { ...params }) -> Product</code>
- <code title="get /organizations/{orgId}/products">client.products.<a href="./src/resources/products.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/products/{id}">client.products.<a href="./src/resources/products.ts">delete</a>(orgId, id) -> Product</code>

# TransactionTypes

Types:

- <code><a href="./src/resources/transaction-types.ts">TransactionType</a></code>
- <code><a href="./src/resources/transaction-types.ts">TransactionTypeListResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/picklists/transactiontypes">client.transactionTypes.<a href="./src/resources/transaction-types.ts">create</a>(orgId, { ...params }) -> TransactionType</code>
- <code title="get /organizations/{orgId}/picklists/transactiontypes/{id}">client.transactionTypes.<a href="./src/resources/transaction-types.ts">retrieve</a>(orgId, id) -> TransactionType</code>
- <code title="put /organizations/{orgId}/picklists/transactiontypes/{id}">client.transactionTypes.<a href="./src/resources/transaction-types.ts">update</a>(orgId, id, { ...params }) -> TransactionType</code>
- <code title="get /organizations/{orgId}/picklists/transactiontypes">client.transactionTypes.<a href="./src/resources/transaction-types.ts">list</a>(orgId, { ...params }) -> unknown</code>
- <code title="delete /organizations/{orgId}/picklists/transactiontypes/{id}">client.transactionTypes.<a href="./src/resources/transaction-types.ts">delete</a>(orgId, id) -> TransactionType</code>
