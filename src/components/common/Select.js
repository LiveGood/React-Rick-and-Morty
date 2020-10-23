import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
  overflow: hidden;
  overflow: hidden;
  border-style: solid;
  display: block;
  width: 100%;
  font-size: 16px;
  background: ${({ theme })=> theme.colors.field.background};
  color: ${({ theme })=> theme.colors.field.color};
  border: 1px solid ${({ theme })=> theme.colors.field.borderColor};
  height: 45px;
  padding: 0 15px;
  border-radius: 3px;
  appearance: none;

  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  margin-bottom: 8px;
  padding: 0 5px;
  color: ${({ theme })=> theme.colors.text};
  text-transform: uppercase;
  font-size: 12px;
  display: block;
`;

const SelectComponent = ({ label, placeholder, options, ...restProps }) => {
  
  return (
    <div>
      <Label>{label}</Label>
      <Select defaultValue={'default'}>
        <option value='default' disabled>{placeholder}</option>
        <option value=''>none</option>
        {options.map(({ value, name }) => (
          <option key={`${value}-${name}`} value={value}>{name}</option>
        ))}
      </Select>
    </div>
  )
}

SelectComponent.defaultProps = {
  label: '',
  placeholder: '',
  options: [],
}

export default SelectComponent;