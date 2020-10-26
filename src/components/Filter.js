import React, { useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Select, Input } from '../components/common/'
import { FilterContext } from '../containers/EpisodesList'

const PageHead = styled.div`
	margin-bottom: 30px;
`
PageHead.Filter = styled.div`
  ${({ theme }) => css`
    @media ${theme.mediaQueries.xsOnly} {
      width: 100%;
    }
  `}
`;

const InputFilter = () => {
  const { filters, changeInputFilter } = useContext(FilterContext)

  return <Input
    name="name"
    label="name" 
    defaultValue={filters?.name}
    onChange={ev => {
      ev.persist();
      changeInputFilter(ev);
    }}
  />
}

const SelectFilter = () => {
  const {items, propName, filters, setFilters, selectValues} = useContext(FilterContext)
  
  return (
    <Select
      label={selectValues.label} 
      placeholder={selectValues.placeholder}
      value={filters && filters[propName]}
      defaultValue={'default'}
      options={items?.map((item) => ({ name: item[propName], value: item[propName] }))}
      onChange={ev => setFilters({ [propName]: ev.target.value })}
    />
  )
}

const Filter = function() {
  const {filters, queryCall, showSelect } = useContext(FilterContext)
  const [getData, { data }] = queryCall();
  
  useEffect(() => {
    getData()
  }, [getData])

  useEffect(() => {
    if (filters) {
      getData({ vriables: {filter: filters} })
    }
  }, [filters, getData])

  return (
    <PageHead>  
      <PageHead.Filter>
        <Row>
          <Col>
            <InputFilter />
          </Col>
          {showSelect && (
            <Col>
              <SelectFilter />
            </Col>
          )}
        </Row>
      </PageHead.Filter>
    </PageHead>
  )
}

export default Filter;