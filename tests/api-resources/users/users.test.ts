// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.users.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.users.retrieve('id', { orgId: 'orgId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.users.update('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.users.update('id', {
      orgId: 'orgId',
      dtEndAccess: '2019-12-27T18:11:19.117Z',
      permissionPolicy: [{ action: ['ALL'], effect: 'ALLOW', resource: ['string'] }],
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.users.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.users.list({
      orgId: 'orgId',
      ids: ['string'],
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('getPermissions: only required params', async () => {
    const responsePromise = client.users.getPermissions('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getPermissions: required and optional params', async () => {
    const response = await client.users.getPermissions('id', {
      orgId: 'orgId',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('getUserGroups: only required params', async () => {
    const responsePromise = client.users.getUserGroups('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getUserGroups: required and optional params', async () => {
    const response = await client.users.getUserGroups('id', {
      orgId: 'orgId',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('me: only required params', async () => {
    const responsePromise = client.users.me({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('me: required and optional params', async () => {
    const response = await client.users.me({ orgId: 'orgId' });
  });

  test('resendPassword: only required params', async () => {
    const responsePromise = client.users.resendPassword('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('resendPassword: required and optional params', async () => {
    const response = await client.users.resendPassword('id', { orgId: 'orgId' });
  });
});
