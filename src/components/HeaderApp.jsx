import React from 'react'
import styled from 'styled-components';
import copyLogo from "../assets/icon-copy.svg";
import { useState, useContext, useRef } from 'react';
import { GlobalContext } from '../App';

const HeaderAppStyle = styled.div`
    
    background-color: #08070B;
    
    .HeaderApp-title {
        color: #817D92; 
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        text-align: center;
        margin-bottom: 31px;

        @media (min-width: 375px) and (max-width : 768px) {
            font-size: 16px;
            line-height: 21px;
            margin-bottom: 16px;
        }

    }

    .Password-view {
        position: relative;
        margin-bottom: 24px;

        @media (min-width: 375px) and (max-width : 768px) {
            margin-bottom: 16px;
        }

        input {
        color: #E6E5EA;
        font-family: "JetBrainsMono";
        border: none;
        background-color: #24232C;
        width: 100%;
        height: 80px;
        font-weight: 700;
        font-size: 32px;
        line-height: 42px;
        padding : 19px 0 19px 32px;

        @media (min-width: 375px) and (max-width : 768px) {
            height: 64px;
            font-size: 24px;
            line-height: 32px;
            padding : 17px 0 15px 16px;
        }

        &::placeholder {
        color: #E6E5EA;
        opacity: 0.25;
        font-family: "JetBrainsMono";
        border: none;
        background-color: #24232C;
        width: 100%;
        height: 80px;
        font-weight: 700;
        font-size: 32px;
        line-height: 42px;
        padding : 19px 0 19px 32px;

        @media (min-width: 375px) and (max-width : 768px) {
            height: 64px;
            font-size: 24px;
            line-height: 32px;
            padding : 17px 0 15px 16px;
        }
        }

        &:focus {
            outline: none;
        }
    
        }

        label {
            position: absolute;
            top: 28px;
            right: 32px;
            display: flex;

            @media (min-width: 375px) and (max-width : 768px) {
                top: 22px;
                right: 22px;
            }

            img {
                    @media (min-width: 375px) and (max-width : 768px) {
                        width: 17.5px;
                        height: 20px;
                    }
            }

            span {
                color: #A4FFAF;
                margin-right: 16px;
                font-size: 18px;
                line-height: 24px;
                font-weight: 700;

                @media (min-width: 375px) and (max-width : 768px) {
                        font-size: 16px;
                }
            }

            img:hover {
                cursor: pointer;
                filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7491%) hue-rotate(330deg) brightness(102%) contrast(101%);
            }
        }
    }
`

export default function HeaderApp() {


    const {isCopied, setIsCopied, generatePassword, numberCheck} = useContext(GlobalContext)


  return (
    <HeaderAppStyle>
        <h2 className='HeaderApp-title'>
            Password Generator
        </h2>
        <div className='Password-view'>
            <label htmlFor='password'>  
                {isCopied ? <span> COPIED </span> : null}
                <img src={copyLogo} 
                     alt="copy logo" 
                     onClick = {() => {
                        setIsCopied(true)
                        console.log(navigator.clipboard.writeText(generatePassword));
                        }}/>
            </label>
            <input type="text" 
                   name='password' 
                   placeholder='P4$5W0rD!'
                   value={numberCheck != "" ? generatePassword : ""}
                   readOnly />
        </div>


    </HeaderAppStyle>
  )
}
