// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource debitLineItems', () => {
  test('create: only required params', async () => {
    const responsePromise = client.bills.debitLineItems.create('billId', {
      orgId: 'orgId',
      amount: 1,
      description: 'x',
      productId: 'productId',
      referencedBillId: 'referencedBillId',
      referencedLineItemId: 'referencedLineItemId',
      servicePeriodEndDate: '2019-12-27T18:11:19.117Z',
      servicePeriodStartDate: '2019-12-27T18:11:19.117Z',
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
    const response = await client.bills.debitLineItems.create('billId', {
      orgId: 'orgId',
      amount: 1,
      description: 'x',
      productId: 'productId',
      referencedBillId: 'referencedBillId',
      referencedLineItemId: 'referencedLineItemId',
      servicePeriodEndDate: '2019-12-27T18:11:19.117Z',
      servicePeriodStartDate: '2019-12-27T18:11:19.117Z',
      debitReasonId: 'debitReasonId',
      lineItemType: 'STANDING_CHARGE',
      reasonId: 'reasonId',
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.bills.debitLineItems.retrieve('billId', 'id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.bills.debitLineItems.retrieve('billId', 'id', { orgId: 'orgId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.bills.debitLineItems.update('billId', 'id', {
      orgId: 'orgId',
      amount: 1,
      description: 'x',
      productId: 'productId',
      referencedBillId: 'referencedBillId',
      referencedLineItemId: 'referencedLineItemId',
      servicePeriodEndDate: '2019-12-27T18:11:19.117Z',
      servicePeriodStartDate: '2019-12-27T18:11:19.117Z',
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
    const response = await client.bills.debitLineItems.update('billId', 'id', {
      orgId: 'orgId',
      amount: 1,
      description: 'x',
      productId: 'productId',
      referencedBillId: 'referencedBillId',
      referencedLineItemId: 'referencedLineItemId',
      servicePeriodEndDate: '2019-12-27T18:11:19.117Z',
      servicePeriodStartDate: '2019-12-27T18:11:19.117Z',
      debitReasonId: 'debitReasonId',
      lineItemType: 'STANDING_CHARGE',
      reasonId: 'reasonId',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.bills.debitLineItems.list('billId', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.bills.debitLineItems.list('billId', {
      orgId: 'orgId',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.bills.debitLineItems.delete('billId', 'id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.bills.debitLineItems.delete('billId', 'id', { orgId: 'orgId' });
  });
});
