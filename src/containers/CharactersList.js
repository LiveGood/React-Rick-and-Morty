import React, { useEffect } from 'react';
import { Row, Col } from 'react-grid-system';
import {usePagination} from '../hooks'
import { charactersQuery } from '../queries';

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
      <h1>Characters Page</h1>
    </div>
  )
}