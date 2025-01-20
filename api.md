# Authentication

Types:

- <code><a href="./src/resources/authentication.ts">AuthenticationGetBearerTokenResponse</a></code>

Methods:

- <code title="post /oauth/token">client.authentication.<a href="./src/resources/authentication.ts">getBearerToken</a>({ ...params }) -> AuthenticationGetBearerTokenResponse</code>

# Aggregations

Types:

- <code><a href="./src/resources/aggregations.ts">Aggregation</a></code>

Methods:

- <code title="post /organizations/{orgId}/aggregations">client.aggregations.<a href="./src/resources/aggregations.ts">create</a>(orgId, { ...params }) -> Aggregation</code>
- <code title="get /organizations/{orgId}/aggregations/{id}">client.aggregations.<a href="./src/resources/aggregations.ts">retrieve</a>(orgId, id) -> Aggregation</code>
- <code title="put /organizations/{orgId}/aggregations/{id}">client.aggregations.<a href="./src/resources/aggregations.ts">update</a>(orgId, id, { ...params }) -> Aggregation</code>
- <code title="get /organizations/{orgId}/aggregations">client.aggregations.<a href="./src/resources/aggregations.ts">list</a>(orgId, { ...params }) -> AggregationsCursor</code>

# CompoundAggregations

Types:

- <code><a href="./src/resources/compound-aggregations.ts">CompoundAggregation</a></code>

Methods:

- <code title="post /organizations/{orgId}/compoundaggregations">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">create</a>(orgId, { ...params }) -> Aggregation</code>
- <code title="get /organizations/{orgId}/compoundaggregations/{id}">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">retrieve</a>(orgId, id) -> CompoundAggregation</code>
- <code title="put /organizations/{orgId}/compoundaggregations/{id}">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">update</a>(orgId, id, { ...params }) -> Aggregation</code>
- <code title="get /organizations/{orgId}/compoundaggregations">client.compoundAggregations.<a href="./src/resources/compound-aggregations.ts">list</a>(orgId, { ...params }) -> CompoundAggregationsCursor</code>

# Counters

Types:

- <code><a href="./src/resources/counters.ts">Counter</a></code>

Methods:

- <code title="post /organizations/{orgId}/counters">client.counters.<a href="./src/resources/counters.ts">create</a>(orgId, { ...params }) -> Counter</code>
- <code title="get /organizations/{orgId}/counters/{id}">client.counters.<a href="./src/resources/counters.ts">retrieve</a>(orgId, id) -> Counter</code>
- <code title="put /organizations/{orgId}/counters/{id}">client.counters.<a href="./src/resources/counters.ts">update</a>(orgId, id, { ...params }) -> Counter</code>
- <code title="get /organizations/{orgId}/counters">client.counters.<a href="./src/resources/counters.ts">list</a>(orgId, { ...params }) -> CountersCursor</code>

# Meters

Types:

- <code><a href="./src/resources/meters.ts">Meter</a></code>

Methods:

- <code title="post /organizations/{orgId}/meters">client.meters.<a href="./src/resources/meters.ts">create</a>(orgId, { ...params }) -> Meter</code>
- <code title="get /organizations/{orgId}/meters/{id}">client.meters.<a href="./src/resources/meters.ts">retrieve</a>(orgId, id) -> Meter</code>
- <code title="put /organizations/{orgId}/meters/{id}">client.meters.<a href="./src/resources/meters.ts">update</a>(orgId, id, { ...params }) -> Meter</code>
- <code title="get /organizations/{orgId}/meters">client.meters.<a href="./src/resources/meters.ts">list</a>(orgId, { ...params }) -> MetersCursor</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">Product</a></code>

Methods:

- <code title="post /organizations/{orgId}/products">client.products.<a href="./src/resources/products.ts">create</a>(orgId, { ...params }) -> Product</code>
- <code title="get /organizations/{orgId}/products/{id}">client.products.<a href="./src/resources/products.ts">retrieve</a>(orgId, id) -> Product</code>
- <code title="put /organizations/{orgId}/products/{id}">client.products.<a href="./src/resources/products.ts">update</a>(orgId, id, { ...params }) -> Product</code>
- <code title="get /organizations/{orgId}/products">client.products.<a href="./src/resources/products.ts">list</a>(orgId, { ...params }) -> ProductsCursor</code>
