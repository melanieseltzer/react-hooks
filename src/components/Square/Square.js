import React from 'react';
import styled from 'styled-components';

export default function Square(props) {
  const { width, height } = props;
  return <SquareStyle height={height} width={width} />;
}

const SquareStyle = styled.div`
  background: tomato;
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
`;
