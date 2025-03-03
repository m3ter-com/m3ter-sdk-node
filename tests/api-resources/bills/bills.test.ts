// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bills', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.bills.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.bills.retrieve('id', { orgId: 'orgId' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.bills.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.bills.list({
      orgId: 'orgId',
      accountId: 'accountId',
      billDate: 'billDate',
      billDateEnd: 'billDateEnd',
      billDateStart: 'billDateStart',
      billingFrequency: 'billingFrequency',
      excludeLineItems: true,
      externalInvoiceDateEnd: 'externalInvoiceDateEnd',
      externalInvoiceDateStart: 'externalInvoiceDateStart',
      ids: ['string'],
      includeBillTotal: true,
      locked: true,
      nextToken: 'nextToken',
      pageSize: 1,
      status: 'PENDING',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.bills.delete('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.bills.delete('id', { orgId: 'orgId' });
  });

  test('approve: only required params', async () => {
    const responsePromise = client.bills.approve({ orgId: 'orgId', billIds: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('approve: required and optional params', async () => {
    const response = await client.bills.approve({
      orgId: 'orgId',
      billIds: ['string'],
      accountIds: 'accountIds',
      externalInvoiceDateEnd: 'externalInvoiceDateEnd',
      externalInvoiceDateStart: 'externalInvoiceDateStart',
    });
  });

  test('latestByAccount: only required params', async () => {
    const responsePromise = client.bills.latestByAccount('accountId', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('latestByAccount: required and optional params', async () => {
    const response = await client.bills.latestByAccount('accountId', { orgId: 'orgId' });
  });

  test('lock: only required params', async () => {
    const responsePromise = client.bills.lock('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('lock: required and optional params', async () => {
    const response = await client.bills.lock('id', { orgId: 'orgId' });
  });

  test('search: only required params', async () => {
    const responsePromise = client.bills.search({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await client.bills.search({
      orgId: 'orgId',
      fromDocument: 0,
      operator: 'AND',
      pageSize: 1,
      searchQuery: 'searchQuery',
      sortBy: 'sortBy',
      sortOrder: 'ASC',
    });
  });

  test('updateStatus: only required params', async () => {
    const responsePromise = client.bills.updateStatus('id', { orgId: 'orgId', status: 'PENDING' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateStatus: required and optional params', async () => {
    const response = await client.bills.updateStatus('id', { orgId: 'orgId', status: 'PENDING' });
  });
});
