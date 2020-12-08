import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const CustomPagination = ({ activePage, total_pages, onChange }) => {
  const setPage = (page) => {
    onChange(page);
  };
  return (
    <div className="pagination justify-content-center mt-5">
      <Pagination>
        <Pagination.First
          onClick={() => setPage(1)}
          disabled={activePage <= 1 ? true : false}
        />
        <Pagination.Prev
          onClick={() => setPage(activePage - 1)}
          disabled={activePage <= 1 ? true : false}
        />
        <Pagination.Item
          onClick={() => setPage(activePage - 1)}
          className={activePage === 1 && `d-none`}
        >
          {activePage - 1}
        </Pagination.Item>
        <Pagination.Item active>{activePage}</Pagination.Item>
        <Pagination.Item
          onClick={() => setPage(activePage + 1)}
          className={activePage === total_pages && `d-none`}
        >
          {activePage + 1}
        </Pagination.Item>
        <Pagination.Next
          onClick={() => setPage(activePage + 1)}
          disabled={activePage === total_pages ? true : false}
        />
        <Pagination.Last
          onClick={() => setPage(total_pages)}
          disabled={activePage === total_pages ? true : false}
        />
      </Pagination>
    </div>
  );
};

export default CustomPagination;
