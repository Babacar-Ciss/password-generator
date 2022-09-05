import React from 'react';
import styled from 'styled-components';
import SlideBar from './SlideBar';
import FilterCheckBox from './FilterCheckbox';
import StrengthLevel from './StrengthLevel';
import GenerateButton from './GenerateButton';

const BodyAppStyle = styled.div`
    padding: 34px 32px;
    background-color: #24232C;
`

export default function BodyApp() {
  return (
    <BodyAppStyle>
        <SlideBar />
        <FilterCheckBox />
        <StrengthLevel />
        <GenerateButton />
    </BodyAppStyle>
  )
}
