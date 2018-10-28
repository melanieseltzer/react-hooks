import React, { useContext, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { AppContext } from '../../context';
import Controls from '../Controls';
import Square from '../Square';

export default function App() {
  const style = useContext(AppContext);
  const [width, setWidth] = useState(style.width);
  const [height, setHeight] = useState(style.height);
  const [activeColor, setActiveColor] = useState(style.activeColor);

  return (
    <Container>
      <GlobalStyle />
      <AppStyle>
        <AppContext.Provider
          value={{
            width,
            setWidth,
            height,
            setHeight,
            activeColor,
            setActiveColor
          }}
        >
          <Controls />
          <Square />
        </AppContext.Provider>
      </AppStyle>
    </Container>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
  #root {
    margin: 1rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: auto;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
`;

const AppStyle = styled.div`
  display: grid;
  grid-template-columns: 320px;
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 320px 320px;
  }
`;
