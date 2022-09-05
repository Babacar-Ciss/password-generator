import React from 'react';
import BodyApp from './BodyApp';

import styled from 'styled-components';
import HeaderApp from './HeaderApp';

const HomeStyle = styled.div`
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -35%);
    min-width:  540px;
    height: 608px;


    @media (min-width: 375px) and (max-width : 768px) {
      min-width:  343px;
    }
`


export default function Home() {
  return (
    <HomeStyle>

        <HeaderApp />
        <BodyApp />

    </HomeStyle>
  )
}
