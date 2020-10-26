import React from 'react'
import styled from 'styled-components'
import { FilterLabel, FilterInput } from '../../GlobalStyle'

const Input = styled.input`
  ${FilterInput}

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }

  &::placeholder {
    font-size: 16px;
    color: ${({ theme })=> theme.colors.field.color};
  }
`

const InputComponent = ({ label, ...restProps }) => {
  return (
    <div>
      <FilterLabel>{label}</FilterLabel>
      <Input 
        {... restProps} 
      />
    </div>
  )
}

InputComponent.defaultProps = {
  label: ''
}

export default InputComponent
