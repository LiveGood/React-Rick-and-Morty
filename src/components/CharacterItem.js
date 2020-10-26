import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Item = styled.div`
  background: ${({ theme }) => theme.colors.card};
  box-shadow: ${({ theme }) => theme.materialShadow};
  border-radius: 5px;
  height: 100%;
  display: flex;
  overflow: hidden;
  cursor: pointer;
`;

Item.Image = styled.div`
  width: 40%;
  display: block;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

Item.Content = styled.div`
  padding: 15px;
  width: 60%;
`;

Item.Name = styled.h1`
  color: ${({ theme })=> theme.colors.title};
  font-size: 18px;
  font-weight: 600;
`;

Item.Gender = styled.div`
  color: ${({ theme }) => theme.colors.text};
  margin-top: 10px;
`;

Item.Status = styled.span`
  font-size: 13px;
  padding: 6px 8px;
  border-radius: 3px;
  background: ${({ theme })=> theme.colors.label.background};
  color: ${({ theme })=> theme.colors.label.color};
  margin-top: 15px;
  display: inline-block;
`;

export default ({ id, name, image, gender, status }) => {
  let history = useHistory();

  return (
    <Item onClick={() => history.push(`/characters/${id}`)}>
      <Item.Image>
        <img src={image} alt={name} />
      </Item.Image>
      <Item.Content>
        <Item.Name>{name}</Item.Name>
        <Item.Gender>{gender}</Item.Gender>
        <Item.Status>{status}</Item.Status>
      </Item.Content>
    </Item>
  )
}