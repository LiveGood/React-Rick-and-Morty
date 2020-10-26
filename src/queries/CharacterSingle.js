import { gql } from 'apollo-boost'
import { useLazyQuery } from '@apollo/react-hooks'

export default () => useLazyQuery(gql`
  query GetSingleCharacter($id: ID!) {
    character(
      id: $id
    ) {
			id
			name
			image
			status
			species
			type
			gender
			image
			episode {
				id
				name
				air_date
				created
			}
			location {
				name
				type
				dimension
			}
			origin {
				name
				type
				dimension
			}
    }
  }
`, { fetchPolicy: 'network-only' })
