import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
  const [ searchKeyword, setSearchKeyword ] = useState('');
  const [ search, setSearch ] = useState('');

  return (
    <SearchContext.Provider value={{ searchKeyword, setSearchKeyword, search, setSearch}}>
      {children}
    </SearchContext.Provider>
  );
}

