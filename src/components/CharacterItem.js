import React from 'react';
import styled from 'styled-components';

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

export default ({ id, name, image, gender, status }) => {

  return (
    <Item>
      <Item.Image>
        <img src={image} alt={name} />
      </Item.Image>
    </Item>
  )
}