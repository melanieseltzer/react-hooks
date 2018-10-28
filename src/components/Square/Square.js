import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../../context';

export default function Square() {
  const styles = useContext(AppContext);
  const { width, height, activeColor } = styles;

  return (
    <SquareStyle
      className="square"
      width={width}
      height={height}
      activeColor={activeColor}
    />
  );
}

// Update the square styles based on the context using props
const SquareStyle = styled.div`
  background: ${props => props.activeColor};
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
`;
