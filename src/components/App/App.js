import React, { Fragment, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import Square from '../Square';

export default function App() {
  const [width, setWidth] = useState(320);
  const [height, setHeight] = useState(200);

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <h2>Width:</h2>
        <InputRange
          maxValue={320}
          minValue={0}
          value={width}
          onChange={value => setWidth(value)}
          formatLabel={value => `${value}px`}
        />
        <h2>Height:</h2>
        <InputRange
          maxValue={320}
          minValue={0}
          value={height}
          onChange={value => setHeight(value)}
          formatLabel={value => `${value}px`}
        />
        <Square width={width} height={height} />
      </Container>
    </Fragment>
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
  h2 {
    color: #575757;
    margin-bottom: 1rem;
  }
  .input-range {
    margin-bottom: 3rem;
  }
  .input-range__track--active,
  .input-range__slider {
    background: tomato;
  }
  .input-range__slider {
    border-color: tomato;
  }
`;

const Container = styled.div`
  height: auto;
  margin: 0 auto;
  max-width: 320px;
  width: 100%;
`;
