import React from 'react'
import styled from 'styled-components';
import { useContext } from 'react';
import { GlobalContext } from '../App';

const SlideBarStyle = styled.div`
    margin-bottom: 32px;

    .Slide-bar-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;

        @media (min-width: 375px) and (max-width : 768px) {
            margin-bottom: 14px;
        }
    
        p {
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            color: #E6E5EA;

            @media (min-width: 375px) and (max-width : 768px) {
            font-size: 16px;
            line-height: 21px;
            }
        }

        h2 {
            color: #A4FFAF;
            font-size: 32px;
            line-height: 42px;
            font-weight: 700;

            @media (min-width: 375px) and (max-width : 768px) {
            font-size: 24px;
            line-height: 32px;
            }
        }
    }

    input[type=range] {
        width: 100%;
        -webkit-appearance : none;
        background: transparent;
    
        // FireFox
    &::-moz-range-thumb {
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 50%;
        background: #E6E5EA;
        cursor: grab;
    }

    &:hover::-moz-range-thumb {
        border: 2px solid #A4FFAF;
        background: #18171F;
    }

    &:active::-moz-range-thumb {
        cursor: grabbing;
    }

    &::-moz-range-track {
        height: 8px;
        background-color: #18171F;
    }

    &::-moz-range-progress{
        background-color: #18171F;
        background: #A4FFAF;
        height: 8px;
    }

    // Chrome
    &::-webkit-slider-thumb  {
        -webkit-appearance : none;
        transform: translateY(-10px);
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 50%;
        background: #E6E5EA;
        cursor: grab;
    }

    &::-webkit-slider-runnable-track {
        height: 8px;
        background-color: #18171F;
    }


  }
`

export default function SlideBar() {

    const {characterLength, setCharacterLength} = useContext(GlobalContext);

    const setSlideCharacterHandler = (e) => {
        setCharacterLength(e.target.value)
    } 

  return (
    <SlideBarStyle>
        <div className='Slide-bar-title'>
            <p>Character Length</p>
            <h2>{characterLength}</h2>
        </div>
        <input type="range" max={20} step={1}  value={characterLength} onChange={setSlideCharacterHandler}   />
    </SlideBarStyle>
  )
}
