// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource balances', () => {
  test('create: only required params', async () => {
    const responsePromise = client.balances.create('orgId', {
      accountId: 'x',
      currency: 'x',
      endDate: '2019-12-27T18:11:19.117Z',
      startDate: '2019-12-27T18:11:19.117Z',
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
    const response = await client.balances.create('orgId', {
      accountId: 'x',
      currency: 'x',
      endDate: '2019-12-27T18:11:19.117Z',
      startDate: '2019-12-27T18:11:19.117Z',
      balanceDrawDownDescription: 'balanceDrawDownDescription',
      code: 'JS!?Q0]r] ]$]',
      consumptionsAccountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      description: 'description',
      feesAccountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      lineItemTypes: ['STANDING_CHARGE'],
      name: 'name',
      overageDescription: 'overageDescription',
      overageSurchargePercent: 0,
      productIds: ['string'],
      rolloverAmount: 0,
      rolloverEndDate: '2019-12-27T18:11:19.117Z',
      version: 0,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.balances.retrieve('orgId', 'id');
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
      client.balances.retrieve('orgId', 'id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.balances.update('orgId', 'id', {
      accountId: 'x',
      currency: 'x',
      endDate: '2019-12-27T18:11:19.117Z',
      startDate: '2019-12-27T18:11:19.117Z',
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
    const response = await client.balances.update('orgId', 'id', {
      accountId: 'x',
      currency: 'x',
      endDate: '2019-12-27T18:11:19.117Z',
      startDate: '2019-12-27T18:11:19.117Z',
      balanceDrawDownDescription: 'balanceDrawDownDescription',
      code: 'JS!?Q0]r] ]$]',
      consumptionsAccountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      description: 'description',
      feesAccountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      lineItemTypes: ['STANDING_CHARGE'],
      name: 'name',
      overageDescription: 'overageDescription',
      overageSurchargePercent: 0,
      productIds: ['string'],
      rolloverAmount: 0,
      rolloverEndDate: '2019-12-27T18:11:19.117Z',
      version: 0,
    });
  });

  test('list', async () => {
    const responsePromise = client.balances.list('orgId');
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
    await expect(client.balances.list('orgId', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      M3ter.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.balances.list(
        'orgId',
        {
          accountId: 'accountId',
          endDateEnd: 'endDateEnd',
          endDateStart: 'endDateStart',
          nextToken: 'nextToken',
          pageSize: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.balances.delete('orgId', 'id');
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
    await expect(client.balances.delete('orgId', 'id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      M3ter.NotFoundError,
    );
  });
});
