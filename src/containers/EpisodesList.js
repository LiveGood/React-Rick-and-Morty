import { Concast } from '@apollo/client/utilities';
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components';
import { Row, Col } from 'react-grid-system';

import episodesQuery from '../queries/Episodes'
import { Select } from '../components/common/'

const PageHead = styled.div`
	margin-bottom: 30px;
`

PageHead.Filter = styled.div`
  ${({ theme }) => css`
    @media ${theme.mediaQueries.xsOnly} {
      width: 100%;
    }

    @media ${theme.mediaQueries.smUp} {
			width: 50%;
		}
  `}
`;


const Filter = function({ filters, setFilters }) {
  const [getEpisodes, { data }] = episodesQuery();
  const { results: episodes } = data?.episodes ?? []

  useEffect(()=> {
    getEpisodes()
  }, [getEpisodes])

  return (
    <PageHead>
      <PageHead.Filter>
        <Row>
          <Col>
            <Select
              label="episode"
              placeholder="selectEpisode"
              value={filters?.episode}
              
            />
          </Col>
          <Col></Col>
        </Row>
      </PageHead.Filter>
    </PageHead>
  )
}

export default () => {
  return (
    <div>
      <Filter />
    </div>
  )
}


