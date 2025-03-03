// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource integrationConfigurations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.integrationConfigurations.create({
      orgId: 'orgId',
      configData: { foo: 'bar' },
      credentials: { type: 'HTTP_BASIC' },
      destination: 'destination',
      destinationId: 'destinationId',
      entityId: 'entityId',
      entityType: 'entityType',
      integrationCredentialsId: 'integrationCredentialsId',
      name: 'name',
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
    const response = await client.integrationConfigurations.create({
      orgId: 'orgId',
      configData: { foo: 'bar' },
      credentials: { type: 'HTTP_BASIC', destination: 'WEBHOOK', empty: true, name: 'name', version: 0 },
      destination: 'destination',
      destinationId: 'destinationId',
      entityId: 'entityId',
      entityType: 'entityType',
      integrationCredentialsId: 'integrationCredentialsId',
      name: 'name',
      version: 0,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.integrationConfigurations.retrieve('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.integrationConfigurations.retrieve('id', { orgId: 'orgId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.integrationConfigurations.update('id', {
      orgId: 'orgId',
      configData: { foo: 'bar' },
      credentials: { type: 'HTTP_BASIC' },
      destination: 'destination',
      destinationId: 'destinationId',
      entityId: 'entityId',
      entityType: 'entityType',
      integrationCredentialsId: 'integrationCredentialsId',
      name: 'name',
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
    const response = await client.integrationConfigurations.update('id', {
      orgId: 'orgId',
      configData: { foo: 'bar' },
      credentials: { type: 'HTTP_BASIC', destination: 'WEBHOOK', empty: true, name: 'name', version: 0 },
      destination: 'destination',
      destinationId: 'destinationId',
      entityId: 'entityId',
      entityType: 'entityType',
      integrationCredentialsId: 'integrationCredentialsId',
      name: 'name',
      version: 0,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.integrationConfigurations.list({ orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.integrationConfigurations.list({
      orgId: 'orgId',
      nextToken: 'nextToken',
      pageSize: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.integrationConfigurations.delete('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.integrationConfigurations.delete('id', { orgId: 'orgId' });
  });

  test('enable: only required params', async () => {
    const responsePromise = client.integrationConfigurations.enable('id', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enable: required and optional params', async () => {
    const response = await client.integrationConfigurations.enable('id', { orgId: 'orgId' });
  });

  test('getByEntity: only required params', async () => {
    const responsePromise = client.integrationConfigurations.getByEntity('entityType', { orgId: 'orgId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getByEntity: required and optional params', async () => {
    const response = await client.integrationConfigurations.getByEntity('entityType', {
      orgId: 'orgId',
      entityId: 'entityId',
    });
  });
});
