// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  orgId: 'My Org ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transactions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.balances.transactions.create('balanceId', { amount: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.balances.transactions.create('balanceId', {
      orgId: 'orgId',
      amount: 0,
      appliedDate: '2019-12-27T18:11:19.117Z',
      currencyPaid: 'currencyPaid',
      description: 'description',
      paid: 0,
      transactionDate: '2019-12-27T18:11:19.117Z',
      transactionTypeId: 'transactionTypeId',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.balances.transactions.list('balanceId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.balances.transactions.list('balanceId', {
      orgId: 'orgId',
      nextToken: 'nextToken',
      pageSize: 1,
      transactionTypeId: 'transactionTypeId',
    });
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.balances.transactions.list('balanceId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.balances.transactions.list(
        'balanceId',
        { orgId: 'orgId', nextToken: 'nextToken', pageSize: 1, transactionTypeId: 'transactionTypeId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });
});
