import { useMemo, useState } from 'react';

import { ITEMS_PER_PAGE } from '../config';

export const usePagination = (totalItems, itemsPerPage = ITEMS_PER_PAGE) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = useMemo(() => Math.ceil(totalItems / itemsPerPage), [
    totalItems,
    itemsPerPage,
  ]);

  return {
    totalPages,
    currentPage,
    setCurrentPage,
  };
};
