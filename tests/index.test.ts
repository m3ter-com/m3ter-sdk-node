// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import M3ter from 'm3ter-sdk';
import { APIUserAbortError } from 'm3ter-sdk';
import { Headers } from 'm3ter-sdk/core';
import defaultFetch, { Response, type RequestInit, type RequestInfo } from 'node-fetch';

describe('instantiate client', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };

    console.warn = jest.fn();
  });

  afterEach(() => {
    process.env = env;
  });

  describe('defaultHeaders', () => {
    const client = new M3ter({
      baseURL: 'http://localhost:5000/',
      defaultHeaders: { 'X-My-Default-Header': '2' },
      apiKey: 'My API Key',
      apiSecret: 'My API Secret',
      token: 'My Token',
      orgId: 'My Org ID',
    });

    test('they are used in the request', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post' });
      expect((req.headers as Headers)['x-my-default-header']).toEqual('2');
    });

    test('can ignore `undefined` and leave the default', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': undefined },
      });
      expect((req.headers as Headers)['x-my-default-header']).toEqual('2');
    });

    test('can be removed with `null`', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': null },
      });
      expect(req.headers as Headers).not.toHaveProperty('x-my-default-header');
    });
  });

  describe('defaultQuery', () => {
    test('with null query params given', () => {
      const client = new M3ter({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo' },
        apiKey: 'My API Key',
        apiSecret: 'My API Secret',
        token: 'My Token',
        orgId: 'My Org ID',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo');
    });

    test('multiple default query params', () => {
      const client = new M3ter({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo', hello: 'world' },
        apiKey: 'My API Key',
        apiSecret: 'My API Secret',
        token: 'My Token',
        orgId: 'My Org ID',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo&hello=world');
    });

    test('overriding with `undefined`', () => {
      const client = new M3ter({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { hello: 'world' },
        apiKey: 'My API Key',
        apiSecret: 'My API Secret',
        token: 'My Token',
        orgId: 'My Org ID',
      });
      expect(client.buildURL('/foo', { hello: undefined })).toEqual('http://localhost:5000/foo');
    });
  });

  test('custom fetch', async () => {
    const client = new M3ter({
      baseURL: 'http://localhost:5000/',
      apiKey: 'My API Key',
      apiSecret: 'My API Secret',
      token: 'My Token',
      orgId: 'My Org ID',
      fetch: (url) => {
        return Promise.resolve(
          new Response(JSON.stringify({ url, custom: true }), {
            headers: { 'Content-Type': 'application/json' },
          }),
        );
      },
    });

    const response = await client.get('/foo');
    expect(response).toEqual({ url: 'http://localhost:5000/foo', custom: true });
  });

  test('explicit global fetch', async () => {
    // make sure the global fetch type is assignable to our Fetch type
    const client = new M3ter({
      baseURL: 'http://localhost:5000/',
      apiKey: 'My API Key',
      apiSecret: 'My API Secret',
      token: 'My Token',
      orgId: 'My Org ID',
      fetch: defaultFetch,
    });
  });

  test('custom signal', async () => {
    const client = new M3ter({
      baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
      apiKey: 'My API Key',
      apiSecret: 'My API Secret',
      token: 'My Token',
      orgId: 'My Org ID',
      fetch: (...args) => {
        return new Promise((resolve, reject) =>
          setTimeout(
            () =>
              defaultFetch(...args)
                .then(resolve)
                .catch(reject),
            300,
          ),
        );
      },
    });

    const controller = new AbortController();
    setTimeout(() => controller.abort(), 200);

    const spy = jest.spyOn(client, 'request');

    await expect(client.get('/foo', { signal: controller.signal })).rejects.toThrowError(APIUserAbortError);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('normalized method', async () => {
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: RequestInfo, init: RequestInit = {}): Promise<Response> => {
      capturedRequest = init;
      return new Response(JSON.stringify({}), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new M3ter({
      baseURL: 'http://localhost:5000/',
      apiKey: 'My API Key',
      apiSecret: 'My API Secret',
      token: 'My Token',
      orgId: 'My Org ID',
      fetch: testFetch,
    });

    await client.patch('/foo');
    expect(capturedRequest?.method).toEqual('PATCH');
  });

  describe('baseUrl', () => {
    test('trailing slash', () => {
      const client = new M3ter({
        baseURL: 'http://localhost:5000/custom/path/',
        apiKey: 'My API Key',
        apiSecret: 'My API Secret',
        token: 'My Token',
        orgId: 'My Org ID',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    test('no trailing slash', () => {
      const client = new M3ter({
        baseURL: 'http://localhost:5000/custom/path',
        apiKey: 'My API Key',
        apiSecret: 'My API Secret',
        token: 'My Token',
        orgId: 'My Org ID',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    afterEach(() => {
      process.env['M3TER_BASE_URL'] = undefined;
    });

    test('explicit option', () => {
      const client = new M3ter({
        baseURL: 'https://example.com',
        apiKey: 'My API Key',
        apiSecret: 'My API Secret',
        token: 'My Token',
        orgId: 'My Org ID',
      });
      expect(client.baseURL).toEqual('https://example.com');
    });

    test('env variable', () => {
      process.env['M3TER_BASE_URL'] = 'https://example.com/from_env';
      const client = new M3ter({
        apiKey: 'My API Key',
        apiSecret: 'My API Secret',
        token: 'My Token',
        orgId: 'My Org ID',
      });
      expect(client.baseURL).toEqual('https://example.com/from_env');
    });

    test('empty env variable', () => {
      process.env['M3TER_BASE_URL'] = ''; // empty
      const client = new M3ter({
        apiKey: 'My API Key',
        apiSecret: 'My API Secret',
        token: 'My Token',
        orgId: 'My Org ID',
      });
      expect(client.baseURL).toEqual('https://api.m3ter.com');
    });

    test('blank env variable', () => {
      process.env['M3TER_BASE_URL'] = '  '; // blank
      const client = new M3ter({
        apiKey: 'My API Key',
        apiSecret: 'My API Secret',
        token: 'My Token',
        orgId: 'My Org ID',
      });
      expect(client.baseURL).toEqual('https://api.m3ter.com');
    });
  });

  test('maxRetries option is correctly set', () => {
    const client = new M3ter({
      maxRetries: 4,
      apiKey: 'My API Key',
      apiSecret: 'My API Secret',
      token: 'My Token',
      orgId: 'My Org ID',
    });
    expect(client.maxRetries).toEqual(4);

    // default
    const client2 = new M3ter({
      apiKey: 'My API Key',
      apiSecret: 'My API Secret',
      token: 'My Token',
      orgId: 'My Org ID',
    });
    expect(client2.maxRetries).toEqual(2);
  });

  test('with environment variable arguments', () => {
    // set options via env var
    process.env['M3TER_API_KEY'] = 'My API Key';
    process.env['M3TER_API_SECRET'] = 'My API Secret';
    process.env['M3TER_API_TOKEN'] = 'My Token';
    process.env['M3TER_ORG_ID'] = 'My Org ID';
    const client = new M3ter();
    expect(client.apiKey).toBe('My API Key');
    expect(client.apiSecret).toBe('My API Secret');
    expect(client.token).toBe('My Token');
    expect(client.orgId).toBe('My Org ID');
  });

  test('with overridden environment variable arguments', () => {
    // set options via env var
    process.env['M3TER_API_KEY'] = 'another My API Key';
    process.env['M3TER_API_SECRET'] = 'another My API Secret';
    process.env['M3TER_API_TOKEN'] = 'another My Token';
    process.env['M3TER_ORG_ID'] = 'another My Org ID';
    const client = new M3ter({
      apiKey: 'My API Key',
      apiSecret: 'My API Secret',
      token: 'My Token',
      orgId: 'My Org ID',
    });
    expect(client.apiKey).toBe('My API Key');
    expect(client.apiSecret).toBe('My API Secret');
    expect(client.token).toBe('My Token');
    expect(client.orgId).toBe('My Org ID');
  });
});

describe('request building', () => {
  const client = new M3ter({
    apiKey: 'My API Key',
    apiSecret: 'My API Secret',
    token: 'My Token',
    orgId: 'My Org ID',
  });

  describe('Content-Length', () => {
    test('handles multi-byte characters', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post', body: { value: '—' } });
      expect((req.headers as Record<string, string>)['content-length']).toEqual('20');
    });

    test('handles standard characters', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post', body: { value: 'hello' } });
      expect((req.headers as Record<string, string>)['content-length']).toEqual('22');
    });
  });

  describe('custom headers', () => {
    test('handles undefined', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        body: { value: 'hello' },
        headers: { 'X-Foo': 'baz', 'x-foo': 'bar', 'x-Foo': undefined, 'x-baz': 'bam', 'X-Baz': null },
      });
      expect((req.headers as Record<string, string>)['x-foo']).toEqual('bar');
      expect((req.headers as Record<string, string>)['x-Foo']).toEqual(undefined);
      expect((req.headers as Record<string, string>)['X-Foo']).toEqual(undefined);
      expect((req.headers as Record<string, string>)['x-baz']).toEqual(undefined);
    });
  });
});

describe('retries', () => {
  test('retry on timeout', async () => {
    let count = 0;
    const testFetch = async (url: RequestInfo, { signal }: RequestInit = {}): Promise<Response> => {
      if (count++ === 0) {
        return new Promise(
          (resolve, reject) => signal?.addEventListener('abort', () => reject(new Error('timed out'))),
        );
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new M3ter({
      apiKey: 'My API Key',
      apiSecret: 'My API Secret',
      token: 'My Token',
      orgId: 'My Org ID',
      timeout: 10,
      fetch: testFetch,
    });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });

  test('retry count header', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: RequestInfo, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new M3ter({
      apiKey: 'My API Key',
      apiSecret: 'My API Secret',
      token: 'My Token',
      orgId: 'My Org ID',
      fetch: testFetch,
      maxRetries: 4,
    });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });

    expect((capturedRequest!.headers as Headers)['x-stainless-retry-count']).toEqual('2');
    expect(count).toEqual(3);
  });

  test('omit retry count header', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: RequestInfo, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };
    const client = new M3ter({
      apiKey: 'My API Key',
      apiSecret: 'My API Secret',
      token: 'My Token',
      orgId: 'My Org ID',
      fetch: testFetch,
      maxRetries: 4,
    });

    expect(
      await client.request({
        path: '/foo',
        method: 'get',
        headers: { 'X-Stainless-Retry-Count': null },
      }),
    ).toEqual({ a: 1 });

    expect(capturedRequest!.headers as Headers).not.toHaveProperty('x-stainless-retry-count');
  });

  test('omit retry count header by default', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: RequestInfo, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };
    const client = new M3ter({
      apiKey: 'My API Key',
      apiSecret: 'My API Secret',
      token: 'My Token',
      orgId: 'My Org ID',
      fetch: testFetch,
      maxRetries: 4,
      defaultHeaders: { 'X-Stainless-Retry-Count': null },
    });

    expect(
      await client.request({
        path: '/foo',
        method: 'get',
      }),
    ).toEqual({ a: 1 });

    expect(capturedRequest!.headers as Headers).not.toHaveProperty('x-stainless-retry-count');
  });

  test('overwrite retry count header', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: RequestInfo, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };
    const client = new M3ter({
      apiKey: 'My API Key',
      apiSecret: 'My API Secret',
      token: 'My Token',
      orgId: 'My Org ID',
      fetch: testFetch,
      maxRetries: 4,
    });

    expect(
      await client.request({
        path: '/foo',
        method: 'get',
        headers: { 'X-Stainless-Retry-Count': '42' },
      }),
    ).toEqual({ a: 1 });

    expect((capturedRequest!.headers as Headers)['x-stainless-retry-count']).toBe('42');
  });

  test('retry on 429 with retry-after', async () => {
    let count = 0;
    const testFetch = async (url: RequestInfo, { signal }: RequestInit = {}): Promise<Response> => {
      if (count++ === 0) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new M3ter({
      apiKey: 'My API Key',
      apiSecret: 'My API Secret',
      token: 'My Token',
      orgId: 'My Org ID',
      fetch: testFetch,
    });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });

  test('retry on 429 with retry-after-ms', async () => {
    let count = 0;
    const testFetch = async (url: RequestInfo, { signal }: RequestInit = {}): Promise<Response> => {
      if (count++ === 0) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After-Ms': '10',
          },
        });
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new M3ter({
      apiKey: 'My API Key',
      apiSecret: 'My API Secret',
      token: 'My Token',
      orgId: 'My Org ID',
      fetch: testFetch,
    });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });
});
