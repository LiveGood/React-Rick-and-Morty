import { Concast } from '@apollo/client/utilities';
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components';
import episodesQuery from '../queries/Episodes'

function EpisodesList() {
  const [getEpisodes, { data }] = episodesQuery();
  const { results: episodes } = data?.episodes ?? []

  useEffect(()=> {
    getEpisodes()
  }, [getEpisodes])

  return (
    <div>
      {console.log(data)}
    </div>
  )
}

export default EpisodesList
