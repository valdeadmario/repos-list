import React from 'react';
import ReactPaginate from 'react-paginate';

import './style.scss';

const Pagination = ({ currentPage, totalPages, handleChangePage }) => {
  return (
    <ReactPaginate
      forcePage={currentPage}
      pageCount={totalPages}
      containerClassName={'pagination'}
      onPageChange={handleChangePage}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    />
  );
};

export default Pagination;
