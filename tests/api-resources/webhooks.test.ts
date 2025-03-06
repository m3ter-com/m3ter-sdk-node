// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.webhooks.create({
      orgId: 'orgId',
      credentials: { apiKey: 'x', secret: 'x', type: 'M3TER_SIGNED_REQUEST' },
      description: 'x',
      name: 'x',
      url: 'x',
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
    const response = await client.webhooks.create({
      orgId: 'orgId',
      credentials: { apiKey: 'x', secret: 'x', type: 'M3TER_SIGNED_REQUEST', empty: true, version: 0 },
      description: 'x',
      name: 'x',
      url: 'x',
      active: true,
      code: 'code',
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.webhooks.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.webhooks.retrieve('id', { orgId: 'orgId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.webhooks.update('id', {
      orgId: 'orgId',
      credentials: { apiKey: 'x', secret: 'x', type: 'M3TER_SIGNED_REQUEST' },
      description: 'x',
      name: 'x',
      url: 'x',
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
    const response = await client.webhooks.update('id', {
      orgId: 'orgId',
      credentials: { apiKey: 'x', secret: 'x', type: 'M3TER_SIGNED_REQUEST', empty: true, version: 0 },
      description: 'x',
      name: 'x',
      url: 'x',
      active: true,
      code: 'code',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.webhooks.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.webhooks.list({
      orgId: 'orgId',
      ids: ['string'],
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.webhooks.delete('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.webhooks.delete('id', { orgId: 'orgId' });
  });

  test('setActive: only required params', async () => {
    const responsePromise = client.webhooks.setActive('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setActive: required and optional params', async () => {
    const response = await client.webhooks.setActive('id', { orgId: 'orgId', active: true });
  });
});
