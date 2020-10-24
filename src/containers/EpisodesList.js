import { Concast } from '@apollo/client/utilities';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { debounce } from 'lodash';


import { usePagination } from '../components/hooks'
import episodesQuery from '../queries/Episodes'
import EpisodeItem from '../components/EpisodeItem'
import NotFoundItem from '../components/NotFoundItem'
import Pagination from '../components/Pagination'
import { Select, Input } from '../components/common/'

const PageHead = styled.div`
	margin-bottom: 30px;
`
// TODO: Add Translation
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
  const { results: episodes } = data?.episodes ?? [];

  useEffect(() => {
    getEpisodes()
  }, [getEpisodes])

  useEffect(() => {
    if (filters) {
      getEpisodes({ vriables: {filter: filters} })
    }
  }, [filters, getEpisodes])

  const changeInputFilter = debounce(({ target }) => {
    setFilters({ name: target.value })
  }, 600)

  return (
    <PageHead>  
      <PageHead.Filter>
        <Row>
          <Col>
            <Input 
              name="name"
              label="name"
              placeholder='Filter by name'
              defaultValue={filters?.name}
              onChange={ev => {
                ev.persist();
                changeInputFilter(ev);
              }}
            />
          </Col>
          <Col>
            <Select
              label="Episode"
              placeholder="Select episode"
              value={filters?.episode}
              defaultValue={'default'}
              options={episodes?.map(({ episode }) => ({ name: episode, value: episode }))}
              onChange={ev => setFilters({ episode: ev.target.value })}
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
  const {pages, next, prev} = info ?? {};
  const selectedPage = usePagination({ next, prev })
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

      {hasItems && (
        <Pagination 
          pages={pages}
          currentPage={selectedPage}
          onChange={(page) => getEpisodes({ variables: {page} })}
        />
      )

      }

      {!loading && !hasItems && (
        <NotFoundItem/>
      )}
    </div>
  )
}


