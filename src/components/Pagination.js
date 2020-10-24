import React from 'react'
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

const PaginationWrapper = styled.div`
  margin: 20px 0 30px 0;
  display: flex;
  justify-content: center;
  width: 100%;

  ul {
    display: block;
		text-align: center;

    li {
      display: inline-block;
			margin-right: 8px;
			margin-bottom: 8px;

      a {
        display: block;
        padding: 8px;
        background: ${({ theme }) => theme.colors.pagination.background};
				color: ${({ theme }) => theme.colors.pagination.color};
        min-width: 32px;
        text-align: center;
        cursor: pointer;
        line-height: 1;
        box-shadow: 0 0 10px -5px rgba(0,0,0,0.2);

        &:focus {
          
        }
      }

      &.previous,
      &.next {
        a {
					background: transparent;
					box-shadow: none;
				}

        &.disabled {
					display: none;
				}
      }

      &.active {
				a {
					background: ${({ theme }) => theme.colors.pagination.activeBackground};
					color: ${({ theme }) => theme.colors.pagination.activeColor};
					cursor: default;
				}
			}
    }
  }
`;

function Pagination({ pages, currentPage, onChange }) {
  return (
    <PaginationWrapper>
      <ReactPaginate 
        pageCount={pages}
        forcePage={currentPage - 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        disableInitialCallback
        activeClassName='active'
        previousLabel='Prev'
        nextLabel='Next'
        breakLabel='...'
        onPageChange={({ selected }) => onChange(selected + 1)}
      />
    </PaginationWrapper>
  )
}

export default Pagination
