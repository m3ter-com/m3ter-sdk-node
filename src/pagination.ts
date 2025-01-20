// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface CursorResponse<Item> {
  data: Array<Item>;

  nextToken: string | null;
}

export interface CursorParams {
  nextToken?: string;

  pageSize?: number;
}

export class Cursor<Item> extends AbstractPage<Item> implements CursorResponse<Item> {
  data: Array<Item>;

  nextToken: string | null;

  constructor(
    client: APIClient,
    response: Response,
    body: CursorResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.nextToken = body.nextToken || null;
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<CursorParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const cursor = this.nextToken;
    if (!cursor) {
      return null;
    }

    return {
      params: {
        nextToken: cursor,
      },
    };
  }
}
