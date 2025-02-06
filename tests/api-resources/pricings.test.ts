// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pricings', () => {
  test('create: only required params', async () => {
    const responsePromise = client.pricings.create('orgId', {
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
    const response = await client.pricings.create('orgId', {
      pricingBands: [{ fixedPrice: 0, lowerLimit: 0, unitPrice: 0, id: 'id', creditTypeId: 'creditTypeId' }],
      startDate: '2019-12-27T18:11:19.117Z',
      aggregationId: 'aggregationId',
      code: 'JS!?Q0]r] ]$]',
      compoundAggregationId: 'compoundAggregationId',
      cumulative: true,
      description: 'description',
      endDate: '2019-12-27T18:11:19.117Z',
      minimumSpend: 0,
      minimumSpendBillInAdvance: true,
      minimumSpendDescription: 'minimumSpendDescription',
      overagePricingBands: [
        { fixedPrice: 0, lowerLimit: 0, unitPrice: 0, id: 'id', creditTypeId: 'creditTypeId' },
      ],
      planId: 'planId',
      planTemplateId: 'planTemplateId',
      segment: { foo: 'string' },
      tiersSpanPlan: true,
      type: 'DEBIT',
      version: 0,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.pricings.retrieve('orgId', 'id');
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
      client.pricings.retrieve('orgId', 'id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.pricings.update('orgId', 'id', {
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
    const response = await client.pricings.update('orgId', 'id', {
      pricingBands: [{ fixedPrice: 0, lowerLimit: 0, unitPrice: 0, id: 'id', creditTypeId: 'creditTypeId' }],
      startDate: '2019-12-27T18:11:19.117Z',
      aggregationId: 'aggregationId',
      code: 'JS!?Q0]r] ]$]',
      compoundAggregationId: 'compoundAggregationId',
      cumulative: true,
      description: 'description',
      endDate: '2019-12-27T18:11:19.117Z',
      minimumSpend: 0,
      minimumSpendBillInAdvance: true,
      minimumSpendDescription: 'minimumSpendDescription',
      overagePricingBands: [
        { fixedPrice: 0, lowerLimit: 0, unitPrice: 0, id: 'id', creditTypeId: 'creditTypeId' },
      ],
      planId: 'planId',
      planTemplateId: 'planTemplateId',
      segment: { foo: 'string' },
      tiersSpanPlan: true,
      type: 'DEBIT',
      version: 0,
    });
  });

  test('list', async () => {
    const responsePromise = client.pricings.list('orgId');
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
    await expect(client.pricings.list('orgId', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      M3ter.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.pricings.list(
        'orgId',
        {
          date: 'date',
          ids: ['string'],
          nextToken: 'nextToken',
          pageSize: 1,
          planId: 'planId',
          planTemplateId: 'planTemplateId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.pricings.delete('orgId', 'id');
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
    await expect(client.pricings.delete('orgId', 'id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      M3ter.NotFoundError,
    );
  });
});
