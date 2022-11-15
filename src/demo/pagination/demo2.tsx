import React from 'react';
import Pagination from '../../../packages/Pagination';

const Demo2 = () => {
  const handlePageChange = (page: number, pageSize: number) => {
    console.log('page', page, 'pageSize', pageSize);
  };
  const handlePageSizeChange = (pageSize: number) => {
    console.log('pageSize', pageSize);
  };
  return (
    <Pagination
      pageSize={20}
      onPageSizeChange={handlePageSizeChange}
      onPageChange={handlePageChange}
      total={100}
      pageSizeOptions={[5, 10, 20]}
      text={{
        nextPage: 'next',
        prevPage: 'prev',
        total: 'total',
        page: 'page',
        item: 'item',
      }}
    />
  );
};

export default Demo2;
