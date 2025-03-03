// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jobs', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.dataExports.jobs.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.dataExports.jobs.retrieve('id', { orgId: 'orgId' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.dataExports.jobs.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.dataExports.jobs.list({
      orgId: 'orgId',
      dateCreatedEnd: 'dateCreatedEnd',
      dateCreatedStart: 'dateCreatedStart',
      ids: ['string'],
      nextToken: 'nextToken',
      pageSize: 1,
      scheduleId: 'scheduleId',
      status: 'PENDING',
    });
  });

  test('getDownloadURL: only required params', async () => {
    const responsePromise = client.dataExports.jobs.getDownloadURL('jobId', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getDownloadURL: required and optional params', async () => {
    const response = await client.dataExports.jobs.getDownloadURL('jobId', { orgId: 'orgId' });
  });
});
