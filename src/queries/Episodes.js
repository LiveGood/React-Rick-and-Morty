import { gql } from 'apollo-boost'
import { useLazyQuery } from '@apollo/react-hooks'

export default () => {
  return useLazyQuery(gql`
  query Episodes($page: Int $filter: FilterEpisode) {
    episodes(
      page: $page
      filter: $filter
    ) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        characters {
          id
          name
        }
      }
    }
  }  
  `, { fetchPolicy: 'network-only' })
}