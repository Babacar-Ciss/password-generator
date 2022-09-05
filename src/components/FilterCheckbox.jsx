import React from 'react';
import styled from 'styled-components';
import CheckBox from './Checkbox';
import { useEffect, useRef } from 'react';


const FilterCheckBoxStyle = styled.div`
    margin-bottom: 32px;
`

export default function FilterCheckBox() {

  return (
    <FilterCheckBoxStyle>
        <CheckBox checkBoxName = "uppercase" title = "Include Uppercase Letters" />
        <CheckBox checkBoxName = "lowercase" title = "Include Lowercase Letters" />
        <CheckBox checkBoxName = "number" title = "Include Numbers" />
        <CheckBox checkBoxName = "symbol" title = "Include Symbols" />
    </FilterCheckBoxStyle>
  )
}
