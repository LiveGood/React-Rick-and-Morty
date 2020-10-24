import { Concast } from '@apollo/client/utilities';
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components';
import { Row, Col } from 'react-grid-system';

import episodesQuery from '../queries/Episodes'
import EpisodeItem from '../components/EpisodeItem'
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
			width: 50%;
		}
  `}
`;

const Filter = function({ filters, setFilters }) {
  const [getEpisodes, { data }] = episodesQuery();
  const { results: episodes } = data?.episodes ?? []

  useEffect(() => {
    getEpisodes()
  }, [getEpisodes])

  return (
    <PageHead>  
      <PageHead.Filter>
        <Row>
          <Col>
            <Input 
              name="name"
              label="name"
              placeHolder='Filter By name'
              defaultValue={filters?.name}
            />
          </Col>
          <Col>
            <Select
              label="Episode"
              placeholder="Select Episode"
              value={filters?.episode}
              options={episodes?.map(({ episode })=> 
                ({ name: episode, value: episode })
              )}
            />
          </Col>
        </Row>
      </PageHead.Filter>
    </PageHead>
  )
}

export default () => {
  const [getEpisodes, { data, loading }] = episodesQuery()
  const {results: episodes, info} = data?.episodes ?? {};
  const [filters, setFilters] = useState(null);
  const hasItems = Boolean(episodes?.length);

  useEffect(()=> {
    getEpisodes()
  }, [getEpisodes])

  useEffect(()=> {
    if(filters) {
      getEpisodes({ variables: { filter: filters } })
    }
  }, [filters, getEpisodes])

  return (
    <div>
      <Filter {... {filters, setFilters}} />
      {!loading && hasItems && (
        <Row>
          {episodes?.map(({ id, episodeID, name, air_date, episode, characters }) => (
            <Col key={`episode-${id}-${name}`} xs={12} sm={6} lg={3} style={{ marginBottom: 20 }}>
              <EpisodeItem {...{ episodeID, name, air_date, episode, characters }}/>
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}


