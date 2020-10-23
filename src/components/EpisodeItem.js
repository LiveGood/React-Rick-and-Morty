import React, { useState } from 'react';
import styled from 'styled-components';

const Item = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 11px -5px rgba(0,0,0,0.3);
  border-radius: 5px;
	padding: 20px 20px 15px 20px;
	height: 100%;
`;

Item.Head = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  padding-bottom: 10px;
	margin-bottom: 15px;
`;

Item.Title = styled.h4`
  font-weight: 600;
	font-size: 14px;
	letter-spacing: 0.5px;
	font-weight: 700;
	text-transform: uppercase;
	color: ${({ theme })=> theme.colors.title};
	line-height: 1.2;
`;

Item.Episode = styled.div`
  font-size: 13px;
  padding: 4px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.label.background};
  color: ${({ theme }) => theme.colors.label.color};
`;

export default ({ episodeID, name, air_date, episode, characters }) => {
  return (
    <Item>
      <Item.Head>
        <Item.Title>{name}</Item.Title>
        <Item.Episode>{episode}</Item.Episode>
      </Item.Head>
    </Item>
  )
}