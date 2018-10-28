import React, { useContext } from 'react';
import styled from 'styled-components';

import { StyleContext } from '../../context';

export default function Square() {
  const style = useContext(StyleContext);
  const { width, height, activeColor } = style;

  return (
    <SquareStyle width={width} height={height} activeColor={activeColor} />
  );
}

// Update the square styles based on the context using props
const SquareStyle = styled.div`
  background: ${props => props.activeColor};
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
`;
