import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { GlobalContext } from '../App';

const StrengthLevelStyle = styled.div`
    width: 100%;
    height: 72px;
    background-color: #18171F;
    padding : 20.5px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;


    h1 {
        color: #817D92;
        font-size: 18px;
        line-height: 24px;
        font-weight: 700;
    }

    .level-container {
        color: #E6E5EA;
        font-size: 24px;
        line-height: 32px;
        display: flex;
        align-items: center;
    
        p {
            margin-right: 16px;
        }

        .levels {
            display: flex;
           

            .level:nth-child(-n + ${props => props.numberCheck}) {
                width: 10px;
                height: 28px;
                background-color: ${props => props.numberCheck === 1 ? "#F64A4A" : 
                                    props.numberCheck === 2 ? "#FB7C58" :
                                    props.numberCheck === 3 ? "#F8CD65" :
                                    props.numberCheck === 4 ? "#A4FFAF" : null} ;
                margin-right: 8px;

                &:last-child {
                    margin-right: 0; 
                }
            }

            .level:nth-last-child(-n + ${props => 4 - props.numberCheck }) {
                width: 10px;
                height: 28px;
                border: 2px solid #E6E5EA;
                background-color: black;
                margin-right: 8px;
            }

            /* .level:last-child {
                width: 10px;
                height: 28px;
                border: 2px solid #E6E5EA;
                background-color: black;
                margin-right: 8px;
            } */

            
        }
    }
`

export default function StrengthLevel() {
  
    const {numberCheck} = useContext(GlobalContext);


    const setLevelTitleHandler = (levelIndicator) => {
        switch(levelIndicator) {
            case 1 : {
                return "TOO WEAK!"
                break;
            }
            case 2 : {
                return "WEAK";
                break;
            }
            case 3 : {
                return "MEDIUM"
                break;
            }
            case 4 : {
                return "STRONG";
                break;
            }
        }
    }
  
  
  
    return (
    <StrengthLevelStyle numberCheck = {numberCheck}>
        <h1>STRENGTH</h1>
        <div className='level-container'>
            <p>{setLevelTitleHandler(+numberCheck)}</p>
            <div className='levels'>
                <div className='level'></div>
                <div className='level'></div>
                <div className='level'></div>
                <div className='level'></div>
            </div>
        </div>

    </StrengthLevelStyle>
  )
}
