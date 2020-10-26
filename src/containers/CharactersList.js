import React, { createContext, useEffect, useState } from 'react';
import { Row, Col } from 'react-grid-system';

import CharacterItem from 'components/CharacterItem';
import {usePagination} from '../hooks'
import Pagination from '../components/Pagination'
import { charactersQuery } from '../queries';
import Filter from '../components/Filter'
import NotFoundItem from 'components/NotFoundItem';

// TODO: Add character Filter by name
const FilterContext = createContext();
export default() => {
  const [getCharacters, { data, loading }] = charactersQuery();
  const { results: characters, info} = data?.characters ?? {};
  const { pages, next, prev } = info ?? {};
  const selectedPage = usePagination({ next, prev });
  const [filters, setFilters] = useState(null);
  const hasItems = Boolean(characters?.length);
  const propName = 'characters';

  useEffect(() => {
    getCharacters();
  }, [getCharacters])

  useEffect(()=> {
    if(filters) {
      getCharacters({ variables: { filter: filters } })
    }
  }, [filters, getCharacters])

  return (
    <div>
      <FilterContext.Provider value={{
        items: characters, 
        queryCall: charactersQuery, 
        propName,
        filters, 
        setFilters, 
        inputValues: {
          label: "Name", 
          placeholder: "Filter by name"
        }
      }}>
        <Filter context={FilterContext}/>
      </FilterContext.Provider>

      {!loading && hasItems && (
        <Row>
          {characters?.map(({ id, name, image, gender, status }) => (
            <Col key={`characters-${id}-${name}`} 
              style={{ marginBottom: 20 }}
              xs={12} sm={6} md={6} lg={3}
            > 
              <CharacterItem  {...{ id, name, image, gender, status }} />
            </Col>
          ))}
        </Row>
      )}

      {hasItems && (
				<Pagination
          {...{ pages }}
          currentPage={selectedPage}
					onChange={(page)=> getCharacters({variables: { page }})}
				/>
			)}

      {!loading && !hasItems && (
        <NotFoundItem {...{ propName }}/>
      )}
    </div>
  )
}