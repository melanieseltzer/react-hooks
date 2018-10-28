import React, { useContext } from 'react';
import styled from 'styled-components';

import { StyleContext } from '../../context';

export default function Square() {
  const style = useContext(StyleContext);
  const { width, height } = style;

  return <SquareStyle width={width} height={height} />;
}

const SquareStyle = styled.div`
  background: tomato;
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
`;
