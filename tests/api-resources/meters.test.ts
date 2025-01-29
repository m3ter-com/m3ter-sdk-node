// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource meters', () => {
  test('create: only required params', async () => {
    const responsePromise = client.meters.create('orgId', {
      code: 'JS!?Q0]r] ]$]',
      dataFields: [{ category: 'WHO', code: '{1{}}_', name: 'x' }],
      derivedFields: [{ calculation: 'x', category: 'WHO', code: '{1{}}_', name: 'x' }],
      name: 'x',
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
    const response = await client.meters.create('orgId', {
      code: 'JS!?Q0]r] ]$]',
      dataFields: [{ category: 'WHO', code: '{1{}}_', name: 'x', unit: 'x' }],
      derivedFields: [{ calculation: 'x', category: 'WHO', code: '{1{}}_', name: 'x', unit: 'x' }],
      name: 'x',
      customFields: { foo: 'bar' },
      groupId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      productId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      version: 0,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.meters.retrieve('orgId', 'id');
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
    await expect(client.meters.retrieve('orgId', 'id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      M3ter.NotFoundError,
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.meters.update('orgId', 'id', {
      code: 'JS!?Q0]r] ]$]',
      dataFields: [{ category: 'WHO', code: '{1{}}_', name: 'x' }],
      derivedFields: [{ calculation: 'x', category: 'WHO', code: '{1{}}_', name: 'x' }],
      name: 'x',
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
    const response = await client.meters.update('orgId', 'id', {
      code: 'JS!?Q0]r] ]$]',
      dataFields: [{ category: 'WHO', code: '{1{}}_', name: 'x', unit: 'x' }],
      derivedFields: [{ calculation: 'x', category: 'WHO', code: '{1{}}_', name: 'x', unit: 'x' }],
      name: 'x',
      customFields: { foo: 'bar' },
      groupId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      productId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      version: 0,
    });
  });

  test('list', async () => {
    const responsePromise = client.meters.list('orgId');
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
    await expect(client.meters.list('orgId', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      M3ter.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.meters.list(
        'orgId',
        { codes: ['string'], ids: ['string'], nextToken: 'nextToken', pageSize: 1, productId: [{}] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });
});
