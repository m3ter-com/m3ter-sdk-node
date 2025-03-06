// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aggregations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.aggregations.create({
      orgId: 'orgId',
      aggregation: 'SUM',
      meterId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      name: 'x',
      quantityPerUnit: 1,
      rounding: 'UP',
      targetField: 'x',
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
    const response = await client.aggregations.create({
      orgId: 'orgId',
      aggregation: 'SUM',
      meterId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      name: 'x',
      quantityPerUnit: 1,
      rounding: 'UP',
      targetField: 'x',
      unit: 'x',
      accountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      code: 'example_code',
      customFields: { foo: 'string' },
      customSql: 'customSql',
      defaultValue: 0,
      segmentedFields: ['string'],
      segments: [{ foo: 'string' }],
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.aggregations.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.aggregations.retrieve('id', { orgId: 'orgId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.aggregations.update('id', {
      orgId: 'orgId',
      aggregation: 'SUM',
      meterId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      name: 'x',
      quantityPerUnit: 1,
      rounding: 'UP',
      targetField: 'x',
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
    const response = await client.aggregations.update('id', {
      orgId: 'orgId',
      aggregation: 'SUM',
      meterId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      name: 'x',
      quantityPerUnit: 1,
      rounding: 'UP',
      targetField: 'x',
      unit: 'x',
      accountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      code: 'example_code',
      customFields: { foo: 'string' },
      customSql: 'customSql',
      defaultValue: 0,
      segmentedFields: ['string'],
      segments: [{ foo: 'string' }],
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.aggregations.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.aggregations.list({
      orgId: 'orgId',
      codes: ['string'],
      ids: ['string'],
      nextToken: 'nextToken',
      pageSize: 1,
      productId: ['string'],
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.aggregations.delete('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.aggregations.delete('id', { orgId: 'orgId' });
  });
});
