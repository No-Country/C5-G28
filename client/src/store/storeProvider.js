

import React, { createContext, useReducer, useEffect } from 'react';
import { storeReducer } from './storeReducer';

export const StoreContext = createContext();

const StoreProvider = (props) => {
  const [user, dispatch] = useReducer(storeReducer, [], () => {
    const localData = localStorage.getItem('user');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  return (
    <StoreContext.Provider value={{ user, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
}
 
export default StoreProvider;