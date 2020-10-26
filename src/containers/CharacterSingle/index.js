import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { characterSingleQuery, charactersQuery } from 'queries'
import { InfoIcon, EpisodeIcon, PlanetIcon, ExploreIcon } from 'assets/svg';


const Avatar = styled.div`
  overflow: hidden;
  border-radius: 100%;
  margin: 0 auto 30px auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ theme }) => css`
    @media ${theme.mediaQueries.xsOnly} {
      width: 140px;
      height: 140px;
    }

    @media ${theme.mediaQueries.smUp} {
      width: 180px;
      height: 180px;
    }
  `}
`;

const Name = styled.div`
  color: ${({ theme })=> theme.colors.text};
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 30px;

  ${({ theme }) => css`
    @media ${theme.mediaQueries.xsOnly} {
      font-size: 22px;
    }

    @media ${theme.mediaQueries.smUp} {
      font-size: 30px;
    }
  `}
`;

export default ({ match }) => {
  const [character, { data, loading }] = characterSingleQuery()
  const { name, image } = data?.character ?? {};
  const ID = match?.params.id

  useEffect(() => {
    character({variables: {id: ID}})
  }, [ID, character])

  return (
    <div>
      {!loading && (
        <Row justify='center'>
          <Col md={10} lg={7}>
            <Avatar>
              <img src={image} alt={name} />
            </Avatar>
            <Name>{name}</Name>
          </Col>
        </Row>
      )}
    </div>
  )
}
