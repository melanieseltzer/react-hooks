import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Style from '../Style';

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Style />
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
    margin: 4rem 2rem;
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
