import {
  BACKEND_URL,
  ITEMS_PER_PAGE,
  DEFAULT_SORT,
  LIMIT_CACHE_ITEMS,
} from 'config/index';

const cache = {};

let cancelController = null;

export const getRepositories = async ({
  input,
  page,
  dir,
  sort = DEFAULT_SORT,
}) => {
  const url = `${BACKEND_URL}/search/repositories?q=${input}&per_page=${ITEMS_PER_PAGE}&page=${page}&order=${dir}&sort=${sort}`;

  if (cache[url]) {
    return cache[url];
  }

  if (cancelController) {
    cancelController.abort();
  }

  const controller = new AbortController();

  cancelController = controller;

  const response = await fetch(url, { signal: controller.signal });

  const { items, total_count: totalCount } = await response.json();

  cancelController = null;

  if (Object.keys(cache).length > LIMIT_CACHE_ITEMS) {
    for (const prop of Object.getOwnPropertyNames(cache)) {
      delete cache[prop];
    }
  }

  cache[url] = { items, totalCount };

  return { items, totalCount };
};
