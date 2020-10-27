import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { useTranslation } from 'react-i18next';``

import { characterSingleQuery, charactersQuery } from 'queries'
import { InfoIcon, EpisodeIcon, PlanetIcon, ExploreIcon } from 'assets/svg';
import TabContent from 'components/TabContent'

const Avatar = styled.div`
  overflow: hidden;
  border-radius: 100%;
  margin: 10px auto 30px auto;

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
  const { t } = useTranslation()    
  const [character, { data, loading }] = characterSingleQuery()
  const { 
    name, 
    image, 
    status,
    species,
    type,
    gender,
    episode,
    location,
    origin
  } = data?.character ?? {};
  const ID = match?.params.id

  const TAB_CONTENT = [
    {
      id: 1,
      label: t('generalInfo'),
      component: () => <div>General info</div>,
      icon: InfoIcon,
      componentProps: {
        data: {
          status,
          species,
          type,
          gender
        }
      }
    },
    {
      id: 2,
      label: t('episode'),
      component: () => <div>Episode tab</div>,
      icon: EpisodeIcon,
      componentProps: {
        data: episode
      }
    },
    {
      id: 3,
      label: t('origin'),
      component: () => <div>Origin tab</div>,
      icon: PlanetIcon,
      componentProps: {
        data: origin
      }
    },
    {
      id: 4,
      label: t('location'),
      component: () => <div>Location tab</div>,
      icon: ExploreIcon,
      componentProps: {
        data: location
      }
    }
  ]

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

            <TabContent items={TAB_CONTENT} />
          </Col>
        </Row>
      )}
    </div>
  )
}
