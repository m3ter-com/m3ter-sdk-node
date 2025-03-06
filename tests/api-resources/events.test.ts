// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource events', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.events.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.events.retrieve('id', { orgId: 'orgId' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.events.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.events.list({
      orgId: 'orgId',
      accountId: 'accountId',
      eventName: 'eventName',
      eventType: 'eventType',
      ids: ['string'],
      includeActioned: true,
      nextToken: 'nextToken',
      notificationCode: 'notificationCode',
      notificationId: 'notificationId',
      pageSize: 1,
      resourceId: 'resourceId',
    });
  });

  test('getFields: only required params', async () => {
    const responsePromise = client.events.getFields({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getFields: required and optional params', async () => {
    const response = await client.events.getFields({ orgId: 'orgId', eventName: 'eventName' });
  });

  test('getTypes: only required params', async () => {
    const responsePromise = client.events.getTypes({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getTypes: required and optional params', async () => {
    const response = await client.events.getTypes({ orgId: 'orgId' });
  });
});
