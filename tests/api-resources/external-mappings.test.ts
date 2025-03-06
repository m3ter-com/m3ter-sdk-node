// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource externalMappings', () => {
  test('create: only required params', async () => {
    const responsePromise = client.externalMappings.create({
      orgId: 'orgId',
      externalId: 'JS!?Q0]r] ]$]',
      externalSystem: 'JS!?Q0]r] ]$]',
      externalTable: 'JS!?Q0]r] ]$]',
      m3terEntity: 'JS!?Q0]r] ]$]',
      m3terId: 'JS!?Q0]r] ]$]',
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
    const response = await client.externalMappings.create({
      orgId: 'orgId',
      externalId: 'JS!?Q0]r] ]$]',
      externalSystem: 'JS!?Q0]r] ]$]',
      externalTable: 'JS!?Q0]r] ]$]',
      m3terEntity: 'JS!?Q0]r] ]$]',
      m3terId: 'JS!?Q0]r] ]$]',
      integrationConfigId: 'integrationConfigId',
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.externalMappings.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.externalMappings.retrieve('id', { orgId: 'orgId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.externalMappings.update('id', {
      orgId: 'orgId',
      externalId: 'JS!?Q0]r] ]$]',
      externalSystem: 'JS!?Q0]r] ]$]',
      externalTable: 'JS!?Q0]r] ]$]',
      m3terEntity: 'JS!?Q0]r] ]$]',
      m3terId: 'JS!?Q0]r] ]$]',
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
    const response = await client.externalMappings.update('id', {
      orgId: 'orgId',
      externalId: 'JS!?Q0]r] ]$]',
      externalSystem: 'JS!?Q0]r] ]$]',
      externalTable: 'JS!?Q0]r] ]$]',
      m3terEntity: 'JS!?Q0]r] ]$]',
      m3terId: 'JS!?Q0]r] ]$]',
      integrationConfigId: 'integrationConfigId',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.externalMappings.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.externalMappings.list({
      orgId: 'orgId',
      externalSystemId: 'externalSystemId',
      integrationConfigId: 'integrationConfigId',
      m3terIds: ['string'],
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.externalMappings.delete('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.externalMappings.delete('id', { orgId: 'orgId' });
  });

  test('listByExternalEntity: only required params', async () => {
    const responsePromise = client.externalMappings.listByExternalEntity(
      'system',
      'externalTable',
      'externalId',
      { orgId: 'orgId' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listByExternalEntity: required and optional params', async () => {
    const response = await client.externalMappings.listByExternalEntity(
      'system',
      'externalTable',
      'externalId',
      { orgId: 'orgId', nextToken: 'nextToken', pageSize: 1 },
    );
  });

  test('listByM3terEntity: only required params', async () => {
    const responsePromise = client.externalMappings.listByM3terEntity('entity', 'm3terId', {
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

  test('listByM3terEntity: required and optional params', async () => {
    const response = await client.externalMappings.listByM3terEntity('entity', 'm3terId', {
      orgId: 'orgId',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });
});
