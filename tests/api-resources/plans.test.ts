// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource plans', () => {
  test('create: only required params', async () => {
    const responsePromise = client.plans.create({
      orgId: 'orgId',
      code: 'JS!?Q0]r] ]$]',
      name: 'x',
      planTemplateId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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
    const response = await client.plans.create({
      orgId: 'orgId',
      code: 'JS!?Q0]r] ]$]',
      name: 'x',
      planTemplateId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      accountId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      bespoke: true,
      customFields: { foo: 'string' },
      minimumSpend: 0,
      minimumSpendAccountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      minimumSpendBillInAdvance: true,
      minimumSpendDescription: 'minimumSpendDescription',
      ordinal: 0,
      standingCharge: 0,
      standingChargeAccountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      standingChargeBillInAdvance: true,
      standingChargeDescription: 'standingChargeDescription',
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.plans.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.plans.retrieve('id', { orgId: 'orgId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.plans.update('id', {
      orgId: 'orgId',
      code: 'JS!?Q0]r] ]$]',
      name: 'x',
      planTemplateId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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
    const response = await client.plans.update('id', {
      orgId: 'orgId',
      code: 'JS!?Q0]r] ]$]',
      name: 'x',
      planTemplateId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      accountId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      bespoke: true,
      customFields: { foo: 'string' },
      minimumSpend: 0,
      minimumSpendAccountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      minimumSpendBillInAdvance: true,
      minimumSpendDescription: 'minimumSpendDescription',
      ordinal: 0,
      standingCharge: 0,
      standingChargeAccountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      standingChargeBillInAdvance: true,
      standingChargeDescription: 'standingChargeDescription',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.plans.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.plans.list({
      orgId: 'orgId',
      accountId: ['string'],
      ids: ['string'],
      nextToken: 'nextToken',
      pageSize: 1,
      productId: 'productId',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.plans.delete('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.plans.delete('id', { orgId: 'orgId' });
  });
});
