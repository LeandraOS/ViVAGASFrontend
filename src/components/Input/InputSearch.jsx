
import React, { useState } from 'react';
import { SearchContainer, SearchInput, SearchButton, SearchIcon } from './styles';

export const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchText);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Pesquisar..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>
        <SearchIcon />
      </SearchButton>
    </SearchContainer>
  );
};
