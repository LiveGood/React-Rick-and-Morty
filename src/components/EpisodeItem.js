import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowIcon } from '../assets/svg'

// TODO: Add Translation
// TODO: Add page change to Character page
const Item = styled.div`
  background: ${({ theme }) => theme.colors.card};
  box-shadow: ${({ theme }) => theme.materialShadow};
  border-radius: 5px;
	padding: 20px 20px 15px 20px;
	height: 100%;
`;

Item.Collapse = styled.div`
  max-height: ${({ isOpen }) => isOpen ? '1000px' : '60px' };
  overflow: hidden;
  transition: max-height 500ms;
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

Item.ExpandButton = styled.div`
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  cursor: pointer;

  svg {
    width: 12px;
    height: 12px;
    display: block; 
    margin-left: 8px;
    fill: ${({ theme }) => theme.colors.text};
    transition: transform ${({ theme }) => theme.transition.default};
    transform: ${({ isOpen }) => isOpen ? 'rotate(0deg)' : 'rotate(180deg)'};
  }
`;

export default ({ episodeID, name, air_date, episode, characters }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Item>
      <Item.Head>
        <Item.Title>{name}</Item.Title>
        <div><Item.Episode>{episode}</Item.Episode></div>
      </Item.Head>

      <Item.Date>{air_date}</Item.Date>

      <Item.Characters>
       <Item.Collapse {...{ isOpen}}>
        {characters.map(({ id: characterId, name }, index) => (
            <Item.Character 
              key={`${name}-${index}`}
              // TODO: add onClick to go to new page for characters
            >
              {name}
            </Item.Character>
          ))}
       </Item.Collapse>
      </Item.Characters>

      <div>
        <Item.ExpandButton {...{isOpen}} s onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'shrink' : 'expand'}
          <ArrowIcon />
        </Item.ExpandButton>
      </div>
    </Item>
  )
}