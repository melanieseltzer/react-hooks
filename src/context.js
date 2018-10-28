import { createContext } from 'react';

export const AppContext = createContext({
  width: 320,
  height: 250,
  activeColor: '#F44336'
});
