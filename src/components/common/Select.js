import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  margin-bottom: 8px;
  padding: 0 5px;
  color: ${( { theme } ) => theme.colors.text};
  text-transform: 12px;
  display: block;
`;

const SelectComponent = ({ label, placeholder, options, ...restProps }) => {

  return (
    <div>
      {label && (
        <Label>{label}</Label>
      )}
    </div>
  )
}

export default SelectComponent;