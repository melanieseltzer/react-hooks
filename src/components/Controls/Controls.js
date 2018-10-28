import React, { Fragment, useContext } from 'react';
import InputRange from 'react-input-range';
import { CirclePicker } from 'react-color';
import styled, { createGlobalStyle } from 'styled-components';

import { AppContext } from '../../context';

export default function Controls() {
  const styles = useContext(AppContext);
  const {
    width,
    setWidth,
    height,
    setHeight,
    activeColor,
    setActiveColor
  } = styles;

  const sizes = [
    {
      name: 'width',
      value: width
    },
    {
      name: 'height',
      value: height
    }
  ];

  return (
    <div className="controls">
      <GlobalControlStyle activeColor={activeColor} />
      {sizes.map(size => (
        <Fragment key={size.name}>
          <H2>{size.name}</H2>
          <InputRange
            maxValue={320}
            minValue={0}
            value={size.value}
            onChange={
              size.name === 'width'
                ? value => setWidth(value)
                : value => setHeight(value)
            }
            formatLabel={value => `${value}px`}
          />
        </Fragment>
      ))}

      <H2>background color:</H2>
      <CirclePicker
        color={activeColor}
        onChange={color => setActiveColor(color.hex)}
      />
    </div>
  );
}

const GlobalControlStyle = createGlobalStyle`
  .input-range {
    margin-bottom: 3rem;
  }
  .input-range__track--active,
  .input-range__slider {
    background: ${props => props.activeColor};
  }
  .input-range__slider {
    border-color: ${props => props.activeColor};
  }
  .input-range__label-container {
    left: 0;
  }
  .input-range__label.input-range__label--value .input-range__label-container {
    left: -50%;
  }
`;

const H2 = styled.h2`
  color: #575757;
  margin-bottom: 1.5rem;
`;
