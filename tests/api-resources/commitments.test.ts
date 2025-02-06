// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource commitments', () => {
  test('create: only required params', async () => {
    const responsePromise = client.commitments.create('orgId', {
      accountId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      amount: 1,
      currency: 'x',
      endDate: '2019-12-27',
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
    const response = await client.commitments.create('orgId', {
      accountId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      amount: 1,
      currency: 'x',
      endDate: '2019-12-27',
      startDate: '2019-12-27',
      accountingProductId: 'accountingProductId',
      amountFirstBill: 0,
      amountPrePaid: 0,
      billEpoch: '2019-12-27',
      billingInterval: 1,
      billingOffset: 0,
      billingPlanId: 'billingPlanId',
      childBillingMode: 'PARENT_SUMMARY',
      commitmentFeeBillInAdvance: true,
      commitmentFeeDescription: 'commitmentFeeDescription',
      commitmentUsageDescription: 'commitmentUsageDescription',
      contractId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      feeDates: [
        {
          amount: 1,
          date: '2019-12-27',
          servicePeriodEndDate: '2019-12-27T18:11:19.117Z',
          servicePeriodStartDate: '2019-12-27T18:11:19.117Z',
        },
      ],
      lineItemTypes: ['STANDING_CHARGE'],
      overageDescription: 'overageDescription',
      overageSurchargePercent: 0,
      productIds: ['string'],
      separateOverageUsage: true,
      version: 0,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.commitments.retrieve('orgId', 'id');
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
      client.commitments.retrieve('orgId', 'id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.commitments.update('orgId', 'id', {
      accountId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      amount: 1,
      currency: 'x',
      endDate: '2019-12-27',
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
    const response = await client.commitments.update('orgId', 'id', {
      accountId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      amount: 1,
      currency: 'x',
      endDate: '2019-12-27',
      startDate: '2019-12-27',
      accountingProductId: 'accountingProductId',
      amountFirstBill: 0,
      amountPrePaid: 0,
      billEpoch: '2019-12-27',
      billingInterval: 1,
      billingOffset: 0,
      billingPlanId: 'billingPlanId',
      childBillingMode: 'PARENT_SUMMARY',
      commitmentFeeBillInAdvance: true,
      commitmentFeeDescription: 'commitmentFeeDescription',
      commitmentUsageDescription: 'commitmentUsageDescription',
      contractId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      feeDates: [
        {
          amount: 1,
          date: '2019-12-27',
          servicePeriodEndDate: '2019-12-27T18:11:19.117Z',
          servicePeriodStartDate: '2019-12-27T18:11:19.117Z',
        },
      ],
      lineItemTypes: ['STANDING_CHARGE'],
      overageDescription: 'overageDescription',
      overageSurchargePercent: 0,
      productIds: ['string'],
      separateOverageUsage: true,
      version: 0,
    });
  });

  test('list', async () => {
    const responsePromise = client.commitments.list('orgId');
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
    await expect(client.commitments.list('orgId', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      M3ter.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.commitments.list(
        'orgId',
        {
          accountId: 'accountId',
          contractId: 'contractId',
          date: 'date',
          endDateEnd: 'endDateEnd',
          endDateStart: 'endDateStart',
          ids: ['string'],
          nextToken: 'nextToken',
          pageSize: 1,
          productId: 'productId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.commitments.delete('orgId', 'id');
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
    await expect(
      client.commitments.delete('orgId', 'id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(M3ter.NotFoundError);
  });

  test('search', async () => {
    const responsePromise = client.commitments.search('orgId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.commitments.search('orgId', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      M3ter.NotFoundError,
    );
  });

  test('search: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.commitments.search(
        'orgId',
        {
          fromDocument: 0,
          operator: 'AND',
          pageSize: 1,
          searchQuery: 'searchQuery',
          sortBy: 'sortBy',
          sortOrder: 'ASC',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(M3ter.NotFoundError);
  });
});
