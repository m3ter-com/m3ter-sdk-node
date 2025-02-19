// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource compoundAggregations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.compoundAggregations.create('orgId', {
      calculation: 'x',
      name: 'x',
      quantityPerUnit: 1,
      rounding: 'UP',
      unit: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.compoundAggregations.create('orgId', {
      calculation: 'x',
      name: 'x',
      quantityPerUnit: 1,
      rounding: 'UP',
      unit: 'x',
      accountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      code: 'example_code',
      customFields: { foo: 'string' },
      evaluateNullAggregations: true,
      productId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      version: 0,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.compoundAggregations.retrieve('orgId', 'id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.compoundAggregations.retrieve('orgId', 'id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.compoundAggregations.update('orgId', 'id', {
      calculation: 'x',
      name: 'x',
      quantityPerUnit: 1,
      rounding: 'UP',
      unit: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.compoundAggregations.update('orgId', 'id', {
      calculation: 'x',
      name: 'x',
      quantityPerUnit: 1,
      rounding: 'UP',
      unit: 'x',
      accountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      code: 'example_code',
      customFields: { foo: 'string' },
      evaluateNullAggregations: true,
      productId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      version: 0,
    });
  });

  test('list', async () => {
    const responsePromise = client.compoundAggregations.list('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.compoundAggregations.list('orgId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.compoundAggregations.list(
        'orgId',
        { codes: ['string'], ids: ['string'], nextToken: 'nextToken', pageSize: 1, productId: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.compoundAggregations.delete('orgId', 'id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.compoundAggregations.delete('orgId', 'id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });
});
