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

Item.Date = styled.span`
	color: ${({ theme })=> theme.colors.text};
  font-size: 14px;
  display: block;  
`;

Item.Characters = styled.div`
  position: relative;
  margin-top: 20px;
`;

Item.Character = styled.div`
  margin-right: 8px;
  margin-bottom: 8px;
  display: inline-block;
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.chip.background};
  color: ${({ theme }) => theme.colors.chip.color};
  font-size: 12px;
	cursor: pointer;
	border-radius: 30px;
`;

export default ({ episodeID, name, air_date, episode, characters }) => {
  return (
    <Item>
      <Item.Head>
        <Item.Title>{name}</Item.Title>
        <div><Item.Episode>{episode}</Item.Episode></div>
      </Item.Head>

      <Item.Date>{air_date}</Item.Date>
      <Item.Characters>
        {characters.map(({ id: characterId, name }, index) => (
          <Item.Character 
            key={`${name}-${index}`}
            // TODO: add onClick to go to new page for characters
          >
            {name}
          </Item.Character>
        ))}
      </Item.Characters>
    </Item>
  )
}