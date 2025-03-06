// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invitations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.users.invitations.create({
      orgId: 'orgId',
      email: 'dev@stainless.com',
      firstName: 'x',
      lastName: 'x',
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
    const response = await client.users.invitations.create({
      orgId: 'orgId',
      email: 'dev@stainless.com',
      firstName: 'x',
      lastName: 'x',
      contactNumber: 'contactNumber',
      dtEndAccess: '2019-12-27T18:11:19.117Z',
      dtExpiry: '2019-12-27T18:11:19.117Z',
      m3terUser: true,
      permissionPolicyIds: ['string'],
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.users.invitations.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.users.invitations.retrieve('id', { orgId: 'orgId' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.users.invitations.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.users.invitations.list({
      orgId: 'orgId',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });
});
