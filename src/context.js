import React, { createContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  width: 320,
  height: 250,
  activeColor: '#F44336'
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'width':
      return { ...state, width: action.payload };
    case 'height':
      return { ...state, height: action.payload };
    case 'activeColor':
      return { ...state, activeColor: action.payload };
    default:
      return initialState;
  }
};

const AppContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  const { children } = props;

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
