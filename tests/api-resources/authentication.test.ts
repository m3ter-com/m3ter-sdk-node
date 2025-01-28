// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { Response } from 'node-fetch';

const client = new M3ter({
  apiKey: 'My API Key',
  apiSecret: 'My API Secret',
  token: 'My Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource authentication', () => {
  // example missing required scope property
  test.skip('getBearerToken: only required params', async () => {
    const responsePromise = client.authentication.getBearerToken({ grant_type: 'client_credentials' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // example missing required scope property
  test.skip('getBearerToken: required and optional params', async () => {
    const response = await client.authentication.getBearerToken({
      grant_type: 'client_credentials',
      scope: 'scope',
    });
  });
});
