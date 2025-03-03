// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customFields', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.customFields.retrieve({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.customFields.retrieve({ orgId: 'orgId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.customFields.update({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.customFields.update({
      orgId: 'orgId',
      account: { foo: 'bar' },
      accountPlan: { foo: 'bar' },
      aggregation: { foo: 'bar' },
      compoundAggregation: { foo: 'bar' },
      meter: { foo: 'bar' },
      organization: { foo: 'bar' },
      plan: { foo: 'bar' },
      planTemplate: { foo: 'bar' },
      product: { foo: 'bar' },
      version: 0,
    });
  });
});
