import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
  const [ searchKeyword, setSearchKeyword ] = useState('');
  const [ search, setSearch ] = useState('');
  const [ recentlyItems, setRecentlyItems  ] =useState([]);

  const debugSetRecentlyItems = (newItems) => {
    console.log("🔍 setRecentlyItems 호출됨! 새로운 값:", newItems);
    setRecentlyItems(newItems);
  };

  return (
    <SearchContext.Provider value={{ searchKeyword, setSearchKeyword, search, setSearch, recentlyItems, setRecentlyItems  }}>
      {children}
    </SearchContext.Provider>
  );
}

