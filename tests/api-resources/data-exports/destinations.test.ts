// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource destinations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.dataExports.destinations.create({
      orgId: 'orgId',
      bucketName: 'xxx',
      code: 'JS!?Q0]r] ]$]',
      iamRoleArn: 'arn:aws:iam::321669910225:role/z',
      name: 'x',
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
    const response = await client.dataExports.destinations.create({
      orgId: 'orgId',
      bucketName: 'xxx',
      code: 'JS!?Q0]r] ]$]',
      iamRoleArn: 'arn:aws:iam::321669910225:role/z',
      name: 'x',
      partitionOrder: 'TYPE_FIRST',
      prefix: 'prefix',
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.dataExports.destinations.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.dataExports.destinations.retrieve('id', { orgId: 'orgId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.dataExports.destinations.update('id', {
      orgId: 'orgId',
      bucketName: 'xxx',
      code: 'JS!?Q0]r] ]$]',
      iamRoleArn: 'arn:aws:iam::321669910225:role/z',
      name: 'x',
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
    const response = await client.dataExports.destinations.update('id', {
      orgId: 'orgId',
      bucketName: 'xxx',
      code: 'JS!?Q0]r] ]$]',
      iamRoleArn: 'arn:aws:iam::321669910225:role/z',
      name: 'x',
      partitionOrder: 'TYPE_FIRST',
      prefix: 'prefix',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.dataExports.destinations.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.dataExports.destinations.list({
      orgId: 'orgId',
      ids: ['string'],
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.dataExports.destinations.delete('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.dataExports.destinations.delete('id', { orgId: 'orgId' });
  });
});
