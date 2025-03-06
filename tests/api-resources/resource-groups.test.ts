// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource resourceGroups', () => {
  test('create: only required params', async () => {
    const responsePromise = client.resourceGroups.create('type', { orgId: 'orgId', name: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.resourceGroups.create('type', { orgId: 'orgId', name: 'x', version: 0 });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.resourceGroups.retrieve('type', 'id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.resourceGroups.retrieve('type', 'id', { orgId: 'orgId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.resourceGroups.update('type', 'id', { orgId: 'orgId', name: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.resourceGroups.update('type', 'id', {
      orgId: 'orgId',
      name: 'x',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.resourceGroups.list('type', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.resourceGroups.list('type', {
      orgId: 'orgId',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.resourceGroups.delete('type', 'id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.resourceGroups.delete('type', 'id', { orgId: 'orgId' });
  });

  test('addResource: only required params', async () => {
    const responsePromise = client.resourceGroups.addResource('type', 'resourceGroupId', {
      orgId: 'orgId',
      targetId: '06f6b50c-a868-4ca6-XXXX-448e507d5248',
      targetType: 'ITEM',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addResource: required and optional params', async () => {
    const response = await client.resourceGroups.addResource('type', 'resourceGroupId', {
      orgId: 'orgId',
      targetId: '06f6b50c-a868-4ca6-XXXX-448e507d5248',
      targetType: 'ITEM',
      version: 0,
    });
  });

  test('listContents: only required params', async () => {
    const responsePromise = client.resourceGroups.listContents('type', 'resourceGroupId', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listContents: required and optional params', async () => {
    const response = await client.resourceGroups.listContents('type', 'resourceGroupId', {
      orgId: 'orgId',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('listPermissions: only required params', async () => {
    const responsePromise = client.resourceGroups.listPermissions('type', 'resourceGroupId', {
      orgId: 'orgId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listPermissions: required and optional params', async () => {
    const response = await client.resourceGroups.listPermissions('type', 'resourceGroupId', {
      orgId: 'orgId',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('removeResource: only required params', async () => {
    const responsePromise = client.resourceGroups.removeResource('type', 'resourceGroupId', {
      orgId: 'orgId',
      targetId: '06f6b50c-a868-4ca6-XXXX-448e507d5248',
      targetType: 'ITEM',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeResource: required and optional params', async () => {
    const response = await client.resourceGroups.removeResource('type', 'resourceGroupId', {
      orgId: 'orgId',
      targetId: '06f6b50c-a868-4ca6-XXXX-448e507d5248',
      targetType: 'ITEM',
      version: 0,
    });
  });
});
