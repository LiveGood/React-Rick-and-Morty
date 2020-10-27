import React, { useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { debounce } from 'lodash';
import { useTranslation } from 'react-i18next';
import { Select, Input } from '../components/common/'

const PageHead = styled.div`
	margin-bottom: 30px;
`
PageHead.Filter = styled.div`
  ${({ theme }) => css`
      @media ${theme.mediaQueries.xsOnly} {
        width: 100%;
      }

      @media ${theme.mediaQueries.smUp} {
        width: ${({ showSelect }) => showSelect ? '50%' : '25%'};
      }

      @media ${theme.mediaQueries.smOnly} {
        width: 100%;
      }
    `}
`;

const InputFilter = ({ context }) => {
  const { t } = useTranslation()    
  const { filters, setFilters, inputValues } = useContext(context)

  const changeInputFilter = debounce(({ target }) => {
    setFilters({ name: target.value })
  }, 600)

  return <Input
    name="name"  // change later if needed
    label={t('name')}
    placeholder={t('filterByName')}
    defaultValue={filters?.name}
    onChange={ev => {
      ev.persist();
      changeInputFilter(ev);
    }}
  />
}

const SelectFilter = ({ context }) => {
  const {items, propNameSingle, propNamePlural, filters, setFilters, selectValues} = useContext(context)
  const { t } = useTranslation()    
  
  return (
    <Select
      label={t('episode')} 
      placeholder={t('selectEpisode')}
      value={filters && filters[propNamePlural]}
      defaultValue={'default'}
      onChange={ev => setFilters({ [propNamePlural]: ev.target.value })}
      options={items?.map((item) => {
        return { name: item[propNameSingle], value: item[propNameSingle] }
      })}
    />
  )
}

const Filter = function({ context }) {
  const {filters, queryCall, showSelect } = useContext(context)
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
      <PageHead.Filter {...{showSelect}} >
        <Row>
          <Col>
            <InputFilter {...{ context }}/>
          </Col>
          {showSelect && (
            <Col>
              <SelectFilter {...{ context }}/>
            </Col>
          )}
        </Row>
      </PageHead.Filter>
    </PageHead>
  )
}

export default Filter;