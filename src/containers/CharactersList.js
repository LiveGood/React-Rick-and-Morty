import React, { createContext, useEffect, useState } from 'react';
import { Row, Col } from 'react-grid-system';

import CharacterItem from 'components/CharacterItem';
import Pagination from '../components/Pagination'
import Filter from '../components/Filter'
import NotFoundItem from 'components/NotFoundItem';
import {usePagination} from '../hooks'
import { charactersQuery } from '../queries';

const FilterContext = createContext();
export default() => {
  const [getCharacters, { data, loading }] = charactersQuery();
  const { results: characters, info} = data?.characters ?? {};
  const { pages, next, prev } = info ?? {};
  const selectedPage = usePagination({ next, prev });
  const [filters, setFilters] = useState(null);
  const hasItems = Boolean(characters?.length);
  const propNamePlural = 'characters';

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
        propNamePlural,
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
        <NotFoundItem propName={propNamePlural} />
      )}
    </div>
  )
}