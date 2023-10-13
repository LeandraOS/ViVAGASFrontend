// SearchComponent.jsx

import React, { useState } from 'react';
import { SearchContainer, SearchInput, SearchButton, SearchIcon } from './styles';

export const SearchComponent = ({ onSearchTextChange }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearchTextChange(searchText);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Pesquisar..."
        value={searchText}
        onChange={(e) => {
          const newText = e.target.value;
          setSearchText(newText);
          onSearchTextChange(newText);
        }}
      />
      <SearchButton onClick={handleSearch}>
        <SearchIcon />
      </SearchButton>
    </SearchContainer>
  );
};
