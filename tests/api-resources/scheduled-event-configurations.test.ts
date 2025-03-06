// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scheduledEventConfigurations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.scheduledEventConfigurations.create({
      orgId: 'orgId',
      entity: 'Bill',
      field: 'endDate',
      name: 'scheduled.bill.enddateEvent',
      offset: 5,
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
    const response = await client.scheduledEventConfigurations.create({
      orgId: 'orgId',
      entity: 'Bill',
      field: 'endDate',
      name: 'scheduled.bill.enddateEvent',
      offset: 5,
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.scheduledEventConfigurations.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.scheduledEventConfigurations.retrieve('id', { orgId: 'orgId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.scheduledEventConfigurations.update('id', {
      orgId: 'orgId',
      entity: 'Bill',
      field: 'endDate',
      name: 'scheduled.bill.enddateEvent',
      offset: 5,
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
    const response = await client.scheduledEventConfigurations.update('id', {
      orgId: 'orgId',
      entity: 'Bill',
      field: 'endDate',
      name: 'scheduled.bill.enddateEvent',
      offset: 5,
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.scheduledEventConfigurations.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.scheduledEventConfigurations.list({
      orgId: 'orgId',
      ids: ['string'],
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.scheduledEventConfigurations.delete('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.scheduledEventConfigurations.delete('id', { orgId: 'orgId' });
  });
});
