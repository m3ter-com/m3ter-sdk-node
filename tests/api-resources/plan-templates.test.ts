// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource planTemplates', () => {
  test('create: only required params', async () => {
    const responsePromise = client.planTemplates.create({
      orgId: 'orgId',
      billFrequency: 'DAILY',
      currency: 'xxx',
      name: 'x',
      productId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      standingCharge: 0,
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
    const response = await client.planTemplates.create({
      orgId: 'orgId',
      billFrequency: 'DAILY',
      currency: 'xxx',
      name: 'x',
      productId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      standingCharge: 0,
      billFrequencyInterval: 1,
      code: 'JS!?Q0]r] ]$]',
      customFields: { foo: 'string' },
      minimumSpend: 0,
      minimumSpendBillInAdvance: true,
      minimumSpendDescription: 'minimumSpendDescription',
      ordinal: 0,
      standingChargeBillInAdvance: true,
      standingChargeDescription: 'standingChargeDescription',
      standingChargeInterval: 1,
      standingChargeOffset: 0,
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.planTemplates.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.planTemplates.retrieve('id', { orgId: 'orgId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.planTemplates.update('id', {
      orgId: 'orgId',
      billFrequency: 'DAILY',
      currency: 'xxx',
      name: 'x',
      productId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      standingCharge: 0,
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
    const response = await client.planTemplates.update('id', {
      orgId: 'orgId',
      billFrequency: 'DAILY',
      currency: 'xxx',
      name: 'x',
      productId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      standingCharge: 0,
      billFrequencyInterval: 1,
      code: 'JS!?Q0]r] ]$]',
      customFields: { foo: 'string' },
      minimumSpend: 0,
      minimumSpendBillInAdvance: true,
      minimumSpendDescription: 'minimumSpendDescription',
      ordinal: 0,
      standingChargeBillInAdvance: true,
      standingChargeDescription: 'standingChargeDescription',
      standingChargeInterval: 1,
      standingChargeOffset: 0,
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.planTemplates.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.planTemplates.list({
      orgId: 'orgId',
      ids: ['string'],
      nextToken: 'nextToken',
      pageSize: 1,
      productId: 'productId',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.planTemplates.delete('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.planTemplates.delete('id', { orgId: 'orgId' });
  });
});
