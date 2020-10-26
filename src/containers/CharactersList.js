import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-grid-system';
import {usePagination} from '../hooks'
import { charactersQuery } from '../queries';
import Pagination from '../components/Pagination'
import CharacterItem from 'components/CharacterItem';
import { debounce } from 'lodash';

// TODO: Add character Filter by name
export default() => {
  const [getCharacters, { data, loading }] = charactersQuery();
  const { results: characters, info} = data?.characters ?? {};
  const { pages, next, prev } = info ?? {};
  const selectedPage = usePagination({ next, prev })
  const [filters, setFilters] = useState(null);
  const hasItems = Boolean(characters?.length)

  useEffect(() => {
    getCharacters();
  }, [getCharacters])

  useEffect(()=> {
    if(filters) {
      getCharacters({ variables: { filter: filters } })
    }
  }, [filters, getCharacters])

  const changeInputFilter = debounce(({ target }) => {
    setFilters({ name: target.value })
  }, 600)

  return (
    <div>
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
					onChange={(page)=> getCharacters(
						{
							variables: {
								page: page,
							}
						}
					)}
				/>
			)}
    </div>
  )
}