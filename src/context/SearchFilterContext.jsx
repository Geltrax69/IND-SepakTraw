import React, { createContext, useContext, useState } from 'react';

const SearchFilterContext = createContext();

export const SearchFilterProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSport, setSelectedSport] = useState('all');
  const [activeProductModal, setActiveProductModal] = useState(null);

  return (
    <SearchFilterContext.Provider value={{
      searchQuery,
      setSearchQuery,
      selectedCategory,
      setSelectedCategory,
      selectedSport,
      setSelectedSport,
      activeProductModal,
      setActiveProductModal
    }}>
      {children}
    </SearchFilterContext.Provider>
  );
};

export const useSearchFilter = () => useContext(SearchFilterContext);
