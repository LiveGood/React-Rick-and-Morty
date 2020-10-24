import React from 'react'
import styled from 'styled-components'
import { FilterLabel, FilterInput } from '../../GlobalStyle'

const Select = styled.select`
  ${FilterInput}
`

const SelectComponent = ({ label, placeholder, options, ...restProps }) => {
  return (
    <div>
      <FilterLabel>{label}</FilterLabel>
      <Select {...restProps}>
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