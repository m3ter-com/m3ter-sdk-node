// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource counterAdjustments', () => {
  test('create: only required params', async () => {
    const responsePromise = client.counterAdjustments.create({
      orgId: 'orgId',
      accountId: 'x',
      counterId: 'x',
      date: '2022-01-04',
      value: 0,
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
    const response = await client.counterAdjustments.create({
      orgId: 'orgId',
      accountId: 'x',
      counterId: 'x',
      date: '2022-01-04',
      value: 0,
      purchaseOrderNumber: 'purchaseOrderNumber',
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.counterAdjustments.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.counterAdjustments.retrieve('id', { orgId: 'orgId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.counterAdjustments.update('id', {
      orgId: 'orgId',
      accountId: 'x',
      counterId: 'x',
      date: '2022-01-04',
      value: 0,
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
    const response = await client.counterAdjustments.update('id', {
      orgId: 'orgId',
      accountId: 'x',
      counterId: 'x',
      date: '2022-01-04',
      value: 0,
      purchaseOrderNumber: 'purchaseOrderNumber',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.counterAdjustments.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.counterAdjustments.list({
      orgId: 'orgId',
      accountId: 'accountId',
      counterId: 'counterId',
      date: 'date',
      dateEnd: 'dateEnd',
      dateStart: 'dateStart',
      endDateEnd: 'endDateEnd',
      endDateStart: 'endDateStart',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.counterAdjustments.delete('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.counterAdjustments.delete('id', { orgId: 'orgId' });
  });
});
