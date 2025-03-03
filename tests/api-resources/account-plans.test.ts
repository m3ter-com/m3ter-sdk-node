// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountPlans', () => {
  test('create: only required params', async () => {
    const responsePromise = client.accountPlans.create({
      orgId: 'orgId',
      accountId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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
    const response = await client.accountPlans.create({
      orgId: 'orgId',
      accountId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      startDate: '2019-12-27T18:11:19.117Z',
      billEpoch: '2019-12-27',
      childBillingMode: 'PARENT_SUMMARY',
      code: 'JS!?Q0]r] ]$]',
      contractId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      customFields: { foo: 'string' },
      endDate: '2019-12-27T18:11:19.117Z',
      planGroupId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      planId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.accountPlans.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.accountPlans.retrieve('id', { orgId: 'orgId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.accountPlans.update('id', {
      orgId: 'orgId',
      accountId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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
    const response = await client.accountPlans.update('id', {
      orgId: 'orgId',
      accountId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      startDate: '2019-12-27T18:11:19.117Z',
      billEpoch: '2019-12-27',
      childBillingMode: 'PARENT_SUMMARY',
      code: 'JS!?Q0]r] ]$]',
      contractId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      customFields: { foo: 'string' },
      endDate: '2019-12-27T18:11:19.117Z',
      planGroupId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      planId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.accountPlans.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.accountPlans.list({
      orgId: 'orgId',
      account: 'account',
      contract: 'contract',
      date: 'date',
      ids: ['string'],
      includeall: true,
      nextToken: 'nextToken',
      pageSize: 1,
      plan: 'plan',
      product: 'product',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.accountPlans.delete('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.accountPlans.delete('id', { orgId: 'orgId' });
  });
});
