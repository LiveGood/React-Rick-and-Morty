import React from 'react'
import styled from 'styled-components'
import { FilterLabel, FilterInput } from '../../GlobalStyle'
import { useTranslation } from 'react-i18next';

const Select = styled.select`
  ${FilterInput}
`

const SelectComponent = ({ label, placeholder, options, ...restProps }) => {
  const { t } = useTranslation()    

  return (
    <div>
      <FilterLabel>{label}</FilterLabel>
      <Select {...restProps}>
        <option value='default' disabled>{placeholder}</option>
        <option value=''>{t('none')}</option>
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