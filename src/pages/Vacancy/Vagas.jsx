// Vagas.jsx

import React, { useState } from 'react';
import { CardProject } from '../../components/CardProject/CardProject';
import { Wrapper } from './styles';
import { SearchComponent } from '../../components/Input/InputSearch';
import { SelectFilter } from '../../components/SelectFilter/SelectFilter';

const YourData = [
  {
    title: 'Título do Projeto 1',
    description: 'Descrição do Projeto 1...',
    areas: ['Frontend', 'Outra Área'],
    technologies: ['React', 'Outra Tecnologia'],
    startDate: 'Agosto de 2023',
    active: true,
  },
  {
    title: 'Título do Projeto 2',
    description: 'Descrição do Projeto 2...',
    areas: ['Outra Área'],
    technologies: ['Outra Tecnologia'],
    startDate: 'Setembro de 2023',
    active: true,
  },
  // Adicione mais objetos de dados conforme necessário
];

export const Vagas = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleFilterChange = (selectedFilters) => {
    setSelectedFilters(selectedFilters);
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const filteredCards = YourData.filter((card) => {
    const filtersMatch = selectedFilters.every((filter) =>
      card.areas.includes(filter) || card.technologies.includes(filter)
    );

    const searchTextMatch =
      card.title.toLowerCase().includes(searchText.toLowerCase()) ||
      card.description.toLowerCase().includes(searchText.toLowerCase()) ||
      card.startDate.toLowerCase().includes(searchText.toLowerCase());

    return filtersMatch && searchTextMatch;
  });

  return (
    <>
      <SearchComponent onSearchTextChange={handleSearchTextChange} />
      <SelectFilter onFilterChange={handleFilterChange} />
      <Wrapper>
        {filteredCards.map((card, index) => (
          <CardProject key={index} data={card} />
        ))}
      </Wrapper>
    </>
  );
};
