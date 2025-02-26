import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
  const [ searchList, setSearchList ] = useState([]);

  return (
    <SearchContext.Provider value={{searchList, setSearchList}}>
      {children}
    </SearchContext.Provider>
  );
}

