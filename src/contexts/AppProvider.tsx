import { useReducer, } from 'react';
import type { ReactNode } from 'react';
import { initialState } from './constants';
import { appReducer } from './reducer';
import { AppContext } from './AppContext';


export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}