import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { GlobalContext } from '../App';


const GenerateButtonStyle = styled.div`
    height: 65px;
    background-color: #A4FFAF;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    p {
        color: #24232C;
        font-size: 18px;
        line-height: 24px;
        font-weight: 700;
        margin-right: 24px;
    }
`


export default function GenerateButton() {

  const {GENERATEPASSWORD, characterLength} = useContext(GlobalContext)

  return (
    <GenerateButtonStyle onClick={() => {GENERATEPASSWORD(characterLength)}}>
        <p>GENERATE</p>
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>
    </GenerateButtonStyle>
  )
}
