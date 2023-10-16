import React, { useState } from 'react';
import { CardProject } from '../../components/CardProject/CardProject';
import { Wrapper } from './styles';
import { SearchComponent } from '../../components/Input/InputSearch';
import { SelectFilter } from '../../components/SelectFilter/SelectFilter';

const YourData = [
  {
    title: 'NuFuturo',
    description: 'Descrição do projeto',
    areas: ['data science', 'frontend'],
    technologies: ['react', 'Tecnologia 2'],
    startDate: '01/01/2023',
    active: true,
    level: 'Intermediário',
    laboratory: 'splab',
  },
  {
    title: 'Nome do Projeto',
    description: 'Descrição do projeto',
    areas: ['Área 1', 'Área 2'],
    technologies: ['Tecnologia 1', 'Tecnologia 2'],
    startDate: '01/01/2023',
    active: true,
    level: 'Iniciante',
    laboratory: 'Lsd',
  },
  {
    title: 'Nome do Projeto',
    description: 'Descrição do projeto',
    areas: ['Área 1'],
    technologies: ['Tecnologia 1', 'Tecnologia 2'],
    startDate: '01/01/2023',
    active: true,
    level: 'Iniciante',
    laboratory: 'Lsd',
  },
  // Adicione mais objetos de dados conforme necessário
];

export const Vagas = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    vagas: [],
    tecnologias: [],
    laboratorios: [],
    areas: [],
    niveis: [],
  });
  const [searchText, setSearchText] = useState('');

  const handleFilterChange = (selectedFilters) => {
    setSelectedFilters(selectedFilters);
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const isMatch = (card) => {
    if (!card.title || !card.description) {
      return false;
    }
  
    const filterMatch =
      (selectedFilters.vagas.length === 0 || selectedFilters.vagas.includes('Todas') || selectedFilters.vagas.includes(card.title)) &&
      (selectedFilters.tecnologias.length === 0 || selectedFilters.tecnologias.some(tech => card.technologies.includes(tech))) &&
      (selectedFilters.laboratorios.length === 0 || selectedFilters.laboratorios.some(lab => card.laboratory.toLowerCase() === lab.toLowerCase())) &&
      (selectedFilters.areas.length === 0 || selectedFilters.areas.some(area => card.areas.includes(area))) &&
      (selectedFilters.niveis.length === 0 || selectedFilters.niveis.some(nivel => card.level.toLowerCase() === nivel.toLowerCase()));
  
    const searchMatch =
      card.title.toLowerCase().includes(searchText.toLowerCase()) ||
      card.description.toLowerCase().includes(searchText.toLowerCase()) ||
      (card.areas &&
        card.areas.some((area) =>
          area.toLowerCase().includes(searchText.toLowerCase())
        )) ||
      (card.technologies &&
        card.technologies.some((tech) =>
          tech.toLowerCase().includes(searchText.toLowerCase())
        )) ||
      (card.startDate &&
        card.startDate.toLowerCase().includes(searchText.toLowerCase())) ||
      (card.level &&
        card.level.toLowerCase().includes(searchText.toLowerCase())) ||
      (card.laboratory &&
        card.laboratory.toLowerCase().includes(searchText.toLowerCase()));
  
    return filterMatch && searchMatch;
  };
  
  const filteredCards = YourData.filter(isMatch);

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
