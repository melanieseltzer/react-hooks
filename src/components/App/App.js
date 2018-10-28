import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { AppContextProvider } from '../../context';
import Controls from '../Controls';
import Square from '../Square';
import Footer from '../Footer';

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <AppStyle>
        <AppContextProvider>
          <Controls />
          <Square />
        </AppContextProvider>
      </AppStyle>
      <Footer />
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
