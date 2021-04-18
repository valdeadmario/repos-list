import { BACKEND_URL, ITEMS_PER_PAGE, DEFAULT_SORT } from 'config/index';

export const getRepositories = async ({
  input,
  page,
  dir,
  sort = DEFAULT_SORT,
}) => {
  const url = `${BACKEND_URL}/search/repositories?q=${input}&per_page=${ITEMS_PER_PAGE}&page=${page}&order=${dir}&sort=${sort}`;

  const response = await fetch(url);

  const { items, total_count: totalCount } = await response.json();

  return { items, totalCount };
};
