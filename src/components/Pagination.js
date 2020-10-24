import React from 'react'
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

const PaginationWrapper = styled.div`
  margin: 20px 0 30px 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

function Pagination({ pages, currentPage, onChange }) {
  return (
    <PaginationWrapper>
      <ReactPaginate 

      />
    </PaginationWrapper>
  )
}

export default Pagination
