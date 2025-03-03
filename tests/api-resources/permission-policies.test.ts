// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource permissionPolicies', () => {
  test('create: only required params', async () => {
    const responsePromise = client.permissionPolicies.create({
      orgId: 'orgId',
      name: 'x',
      permissionPolicy: [{ action: ['ALL'], effect: 'ALLOW', resource: ['string'] }],
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
    const response = await client.permissionPolicies.create({
      orgId: 'orgId',
      name: 'x',
      permissionPolicy: [{ action: ['ALL'], effect: 'ALLOW', resource: ['string'] }],
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.permissionPolicies.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.permissionPolicies.retrieve('id', { orgId: 'orgId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.permissionPolicies.update('id', {
      orgId: 'orgId',
      name: 'x',
      permissionPolicy: [{ action: ['ALL'], effect: 'ALLOW', resource: ['string'] }],
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
    const response = await client.permissionPolicies.update('id', {
      orgId: 'orgId',
      name: 'x',
      permissionPolicy: [{ action: ['ALL'], effect: 'ALLOW', resource: ['string'] }],
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.permissionPolicies.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.permissionPolicies.list({
      orgId: 'orgId',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.permissionPolicies.delete('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.permissionPolicies.delete('id', { orgId: 'orgId' });
  });

  test('addToServiceUser: only required params', async () => {
    const responsePromise = client.permissionPolicies.addToServiceUser('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addToServiceUser: required and optional params', async () => {
    const response = await client.permissionPolicies.addToServiceUser('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
      version: 0,
    });
  });

  test('addToSupportUser: only required params', async () => {
    const responsePromise = client.permissionPolicies.addToSupportUser('permissionPolicyId', {
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

  test('addToSupportUser: required and optional params', async () => {
    const response = await client.permissionPolicies.addToSupportUser('permissionPolicyId', {
      orgId: 'orgId',
      version: 0,
    });
  });

  test('addToUser: only required params', async () => {
    const responsePromise = client.permissionPolicies.addToUser('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addToUser: required and optional params', async () => {
    const response = await client.permissionPolicies.addToUser('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
      version: 0,
    });
  });

  test('addToUserGroup: only required params', async () => {
    const responsePromise = client.permissionPolicies.addToUserGroup('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addToUserGroup: required and optional params', async () => {
    const response = await client.permissionPolicies.addToUserGroup('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
      version: 0,
    });
  });

  test('removeFromServiceUser: only required params', async () => {
    const responsePromise = client.permissionPolicies.removeFromServiceUser('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeFromServiceUser: required and optional params', async () => {
    const response = await client.permissionPolicies.removeFromServiceUser('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
      version: 0,
    });
  });

  test('removeFromSupportUser: only required params', async () => {
    const responsePromise = client.permissionPolicies.removeFromSupportUser('permissionPolicyId', {
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

  test('removeFromSupportUser: required and optional params', async () => {
    const response = await client.permissionPolicies.removeFromSupportUser('permissionPolicyId', {
      orgId: 'orgId',
    });
  });

  test('removeFromUser: only required params', async () => {
    const responsePromise = client.permissionPolicies.removeFromUser('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeFromUser: required and optional params', async () => {
    const response = await client.permissionPolicies.removeFromUser('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
      version: 0,
    });
  });

  test('removeFromUserGroup: only required params', async () => {
    const responsePromise = client.permissionPolicies.removeFromUserGroup('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeFromUserGroup: required and optional params', async () => {
    const response = await client.permissionPolicies.removeFromUserGroup('permissionPolicyId', {
      orgId: 'orgId',
      principalId: 'x',
      version: 0,
    });
  });
});
