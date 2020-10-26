import React, { useEffect, useState, createContext } from 'react';
import { Row, Col } from 'react-grid-system';
import { debounce } from 'lodash';

import { usePagination } from '../hooks'
import { episodesQuery } from '../queries'
import EpisodeItem from '../components/EpisodeItem'
import NotFoundItem from '../components/NotFoundItem'
import Pagination from '../components/Pagination'
import Filter from '../components/Filter'

// Bit components: trial
// import Pagination from '../components/Pagination'
// TOO: try another time
// import Pagination from '@bit/livegood.basic-react-components.pagination';
// TODO: Add Translation

export const FilterContext = createContext();

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

  const changeInputFilter = debounce(({ target }) => {
    setFilters({ name: target.value })
  }, 600)

  return (
    <div>
      <FilterContext.Provider value={{
        items: episodes, 
        queryCall: episodesQuery, 
        propName: 'episode',
        filters, 
        setFilters, 
        changeInputFilter,
        showSelect: true,
        selectValues: {
          label: "Episode", 
          placeholder: "Select episode"
        },
        inputValues: {
          label: "Name", 
          placeholder: "Filter by name"
        }
      }}>
        <Filter />
      </FilterContext.Provider>
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


