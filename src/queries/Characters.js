import { gql } from 'apollo-boost'
import { useLazyQuery } from '@apollo/react-hooks'

export default () => useLazyQuery(gql`
query Characters($page: Int $filter: FilterCharacter) {
  characters(
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
      image
      gender
      status
    }
  }
}
`, { fetchPolicy: 'network-only' })
