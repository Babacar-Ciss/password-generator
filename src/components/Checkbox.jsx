import React from 'react';
import styled from 'styled-components';
import logoCheck from "../assets/images/icon-check.svg";
import { useRef, useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../App';


const CheckBoxStyle = styled.div`
    display: flex;
    margin-bottom: 19px;

    @media (min-width: 375px) and (max-width : 768px) {
        margin-bottom: 16px;
    }

    &:last-child {
        margin-bottom: 0;
    }

    .container {
     position: relative;
     cursor: pointer;
     font-size: 22px;
     -webkit-user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     user-select: none;

    input[type=checkbox] {
        position: absolute;
        opacity: 1;
        cursor: pointer;
        visibility: hidden;


        &:checked ~ .checkmark {
            border: none;
            background-color: #A4FFAF;


            &:after  {
                display: block;
                background-image: url(${logoCheck});
                background-repeat: no-repeat;
            }    
        }
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        border: 2px solid #E6E5EA;
        transition: all 0.2s;
        
        &:hover {
            border: 2px solid #A4FFAF;
        }

        &:after {
            content : "";
            position: absolute;
            display: none;
        }
    }

    .checkmark:after {
            left: 18%;
            top: 27%;
            width: 100%; 
            height: 100%;
        }
    }
   

    .label-checkbox {
        display: block;
        color: #E6E5EA;
        font-size: 18px;
        line-height: 24px;
        font-weight: 700;
        margin-left: 44px ;

        @media (min-width: 375px) and (max-width : 768px) {
        font-size: 16px;
        line-height: 21px;
        }
    }
`
let count = 0;

export default function CheckBox(props) {
    
    let {setNumberCheck, 
        isUpperCaseChecked, setIsUpperCaseChecked,
        isLowerCaseChecked, setIsLowerCaseChecked,
        isNumberChecked, setIsNumberChecked,
        isSymbolChecked, setSymbolChecked,
    } = useContext(GlobalContext);
     
    const ref = useRef();

    // console.log(isUpperCaseChecked);

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {

        if(ref.current.checked) {
            count = count + 1
        }
            else if(count <= 0) {
            count = 0;
        }
            else if(!ref.current.checked) {
            count = count - 1;
        }
       setNumberCheck(count)
        
    },[isChecked])

    
        // const checkedBoxNameHandler = (checkboxName) => {
        //     if(checkboxName === "uppercase") {
        //         setIsUpperCaseChecked(!isUpperCaseChecked)
            
        //     }else if(checkboxName === "lowercase") {
        //         setIsLowerCaseChecked(!isLowerCaseChecked)
            
        //     }else if(checkboxName === "number") {
        //         setIsNumberChecked(!isNumberChecked)
                
        //     }else if(checkboxName === "symbol") {
        //         setSymbolChecked(!isSymbolChecked)
        //     }
        // }


  return (
    <CheckBoxStyle>
        <label className='container' >
            <input ref={ref} 
                   type="checkbox"
                //    defaultChecked = {true}
                   readOnly = {false} 
                   name={props.checkBoxName} 
                   checked={isChecked}  
                   onChange={() => {

                        // if(props.checkBoxName === "uppercase") {
                        //     setIsUpperCaseChecked(!isUpperCaseChecked)
                        // }

                        // checkedBoxNameHandler(props.checkBoxName);

                                if(props.checkBoxName === "uppercase") {
                                    setIsUpperCaseChecked(!isUpperCaseChecked)
                                    console.log("uppercase");
                                }else if(props.checkBoxName === "lowercase") {
                                    setIsLowerCaseChecked(!isLowerCaseChecked)
                                
                                }else if(props.checkBoxName === "number") {
                                    setIsNumberChecked(!isNumberChecked)
                                    
                                }else if(props.checkBoxName === "symbol") {
                                    setSymbolChecked(!isSymbolChecked)
                                }
                        
                        setIsChecked(!isChecked)
                    }} 
                />
            
            <span className='checkmark'></span>
        </label>
        
        <label className='label-checkbox' htmlFor={props.checkBoxName}>{props.title}</label>
    </CheckBoxStyle>
  )
}
