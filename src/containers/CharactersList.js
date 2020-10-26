import React, { useEffect } from 'react';
import { Row, Col } from 'react-grid-system';
import {usePagination} from '../hooks'
import { charactersQuery } from '../queries';
import Pagination from '../components/Pagination'

export default() => {
  const [getCharacters, { data, loading }] = charactersQuery();
  const { results: characters, info} = data?.characters ?? {};
  const { pages, next, prev } = info ?? {};
  const selectedPage = usePagination({ next, prev })
  const hasItems = Boolean(characters?.length)

  useEffect(() => {
    getCharacters();
  }, [getCharacters])

  return (
    <div>
      {!loading && hasItems && (
        <Row>
          {characters?.map(({ id, name, image, gender, status }) => (
            <Col key={`characters-${id}-${name}`} 
              style={{ marginBottom: 20 }}
              xs={12} sm={6} md={6} lg={3}
            > 
              <div>{name}</div>
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