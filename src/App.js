import logo from './logo.svg';
import Home from './components/Home';
import styled from 'styled-components';
import { useState , createContext, useEffect } from 'react';

const AppStyle = styled.div`
  position : relative;
  width: 100%;
  height: 100vh;
  background-color: #08070B;
`
export const GlobalContext = createContext();

// CONSTANTES
const UPPERCASE_STRING = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const LOWERCASE_STRING = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const NUMBER = ['0','1','2','3','4','5','6','7','8','9'];
const SYMBOLS = ['`','~','!','@','#','$','%','^','&','*','(',')','–','=','[',']','{','}',';',':','<','>','?'];


function App() {

  const [characterLength, setCharacterLength] = useState(10);
  const [numberCheck, setNumberCheck] = useState(0);
  const [isUpperCaseChecked, setIsUpperCaseChecked] = useState(false);
  const [isLowerCaseChecked, setIsLowerCaseChecked] = useState(false);
  const [isNumberChecked, setIsNumberChecked] = useState(false);
  const [isSymbolChecked, setSymbolChecked] = useState(false);
  const [isClickedGenerateButton, setIsClickedGenerateButton] = useState(false)
  const [generatePassword, setGeneratePassword] = useState()
  const [isCopied, setIsCopied] = useState(false)

  const randomPassword = [];

  const passwordUpperCase = [];
  const passwordLowerCase = [];
  const passwordNumber= [];
  const passwordSymbols= [];
  let password = [];
 


  const GENERATEPASSWORD = (maxNumber) => {
    let modulo = (+maxNumber % numberCheck);

    // For UPPERCASE 
      if (isUpperCaseChecked) {
        for(let i = 0; i < (Math.floor(+maxNumber/numberCheck) + modulo  ) ; i++) {
          let randomNumber = Math.floor((Math.random()*26)); 
          passwordUpperCase.push(UPPERCASE_STRING[randomNumber]);
          }
      }
      
 
    //For LOWERCASE
    if (isLowerCaseChecked) {
    for(let i = 0; i < Math.floor(maxNumber/numberCheck) ; i++) {
    let randomNumber = Math.floor((Math.random()*26)); 
    passwordLowerCase.push(LOWERCASE_STRING[randomNumber])
      }
    }


    // //For NUMBER
    if (isNumberChecked) {
    for(let i = 0; i < Math.floor(maxNumber/numberCheck) ; i++) {
    let randomNumber = Math.floor((Math.random()*9)); 
    passwordNumber.push(NUMBER[randomNumber])
    }
    }


    // //For SYMBOL
    if (isSymbolChecked) {
    for(let i = 0; i < Math.floor(maxNumber/numberCheck) ; i++) {
    let randomNumber = Math.floor((Math.random()*23)); 
    passwordSymbols.push(SYMBOLS[randomNumber])
    }
    }

    password =[...passwordUpperCase, ...passwordLowerCase, ...passwordNumber, ...passwordSymbols];

    for(let i = 0; i < password.length ; i++) {
    let randomNumber = Math.floor((Math.random()*password.length)); 
    randomPassword.push(password[randomNumber])
   setGeneratePassword(randomPassword.join('')) ;
   setIsCopied(false);
  }
  }

  
  
  return (
    <GlobalContext.Provider value={{characterLength, isUpperCaseChecked, numberCheck, 
                                    randomPassword,
                                    isLowerCaseChecked, setIsLowerCaseChecked,
                                    isNumberChecked, setIsNumberChecked,
                                    isSymbolChecked, setSymbolChecked,
                                    generatePassword, setGeneratePassword,
                                    isCopied, setIsCopied,
                                    setNumberCheck, setCharacterLength,setIsUpperCaseChecked, GENERATEPASSWORD}}>
      <AppStyle>
          <Home />
      </AppStyle>   
    </GlobalContext.Provider>
  );
}

export default App;
