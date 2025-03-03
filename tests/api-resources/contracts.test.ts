// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contracts', () => {
  test('create: only required params', async () => {
    const responsePromise = client.contracts.create({
      orgId: 'orgId',
      accountId: 'x',
      endDate: '2019-12-27',
      name: 'x',
      startDate: '2019-12-27',
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
    const response = await client.contracts.create({
      orgId: 'orgId',
      accountId: 'x',
      endDate: '2019-12-27',
      name: 'x',
      startDate: '2019-12-27',
      code: 'JS!?Q0]r] ]$]',
      customFields: { foo: 'string' },
      description: 'description',
      purchaseOrderNumber: 'purchaseOrderNumber',
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.contracts.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.contracts.retrieve('id', { orgId: 'orgId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.contracts.update('id', {
      orgId: 'orgId',
      accountId: 'x',
      endDate: '2019-12-27',
      name: 'x',
      startDate: '2019-12-27',
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
    const response = await client.contracts.update('id', {
      orgId: 'orgId',
      accountId: 'x',
      endDate: '2019-12-27',
      name: 'x',
      startDate: '2019-12-27',
      code: 'JS!?Q0]r] ]$]',
      customFields: { foo: 'string' },
      description: 'description',
      purchaseOrderNumber: 'purchaseOrderNumber',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.contracts.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.contracts.list({
      orgId: 'orgId',
      accountId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      codes: ['string'],
      ids: ['string'],
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.contracts.delete('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.contracts.delete('id', { orgId: 'orgId' });
  });

  test('endDateBillingEntities: only required params', async () => {
    const responsePromise = client.contracts.endDateBillingEntities('id', {
      orgId: 'orgId',
      billingEntities: ['CONTRACT'],
      endDate: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('endDateBillingEntities: required and optional params', async () => {
    const response = await client.contracts.endDateBillingEntities('id', {
      orgId: 'orgId',
      billingEntities: ['CONTRACT'],
      endDate: '2019-12-27T18:11:19.117Z',
      applyToChildren: true,
    });
  });
});
