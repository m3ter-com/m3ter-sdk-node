// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource counterPricings', () => {
  test('create: only required params', async () => {
    const responsePromise = client.counterPricings.create({
      orgId: 'orgId',
      counterId: 'x',
      pricingBands: [{ fixedPrice: 0, lowerLimit: 0, unitPrice: 0 }],
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
    const response = await client.counterPricings.create({
      orgId: 'orgId',
      counterId: 'x',
      pricingBands: [{ fixedPrice: 0, lowerLimit: 0, unitPrice: 0, id: 'id', creditTypeId: 'creditTypeId' }],
      startDate: '2019-12-27T18:11:19.117Z',
      accountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      code: 'JS!?Q0]r] ]$]',
      cumulative: true,
      description: 'description',
      endDate: '2019-12-27T18:11:19.117Z',
      planId: 'planId',
      planTemplateId: 'planTemplateId',
      proRateAdjustmentCredit: true,
      proRateAdjustmentDebit: true,
      proRateRunningTotal: true,
      runningTotalBillInAdvance: true,
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.counterPricings.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.counterPricings.retrieve('id', { orgId: 'orgId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.counterPricings.update('id', {
      orgId: 'orgId',
      counterId: 'x',
      pricingBands: [{ fixedPrice: 0, lowerLimit: 0, unitPrice: 0 }],
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
    const response = await client.counterPricings.update('id', {
      orgId: 'orgId',
      counterId: 'x',
      pricingBands: [{ fixedPrice: 0, lowerLimit: 0, unitPrice: 0, id: 'id', creditTypeId: 'creditTypeId' }],
      startDate: '2019-12-27T18:11:19.117Z',
      accountingProductId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      code: 'JS!?Q0]r] ]$]',
      cumulative: true,
      description: 'description',
      endDate: '2019-12-27T18:11:19.117Z',
      planId: 'planId',
      planTemplateId: 'planTemplateId',
      proRateAdjustmentCredit: true,
      proRateAdjustmentDebit: true,
      proRateRunningTotal: true,
      runningTotalBillInAdvance: true,
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.counterPricings.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.counterPricings.list({
      orgId: 'orgId',
      date: 'date',
      ids: ['string'],
      nextToken: 'nextToken',
      pageSize: 1,
      planId: 'planId',
      planTemplateId: 'planTemplateId',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.counterPricings.delete('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.counterPricings.delete('id', { orgId: 'orgId' });
  });
});
