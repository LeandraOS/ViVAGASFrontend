import React, { useState } from 'react';
import { CardProject } from '../../components/CardProject/CardProject';
import { Wrapper } from './styles';
import { SearchComponent } from '../../components/Input/InputSearch';
import { SelectFilter } from '../../components/SelectFilter/SelectFilter';
import { BackButton } from '../../components/BackButton/BackButton';

const YourData = [
  {
    title: 'NuFuturo',
    description: 'Trata-se de uma cooperação entre Computação@UFCG e o Nubank, uma das maiores plataformas de serviços financeiros do mundo com mais 70 milhões de clientes na América Latina. Estudantes de graduação e pós-graduação terão a oportunidade de desenvolver conhecimento técnicos e metodologias inovadoras, em um ambiente de inovação com desafios reais de grande porte e impacto de negócio.',
    areas: ['backend', 'frontend', 'segurança', 'teste de stress'],
    technologies: ['react', 'clojure', 'python'],
    startDate: '10/10/2023',
    active: true,
    level: 'Iniciante',
    laboratory: 'SPLab e LSD',
  },
  {
    title: 'CodeSQ',
    description: 'Trata-se de ferramenta para gerenciamento e controle de qualidade dos projetos da empresa HP(E)',
    areas: ['Frontend', 'Backend'],
    technologies: ['Golang'],
    startDate: '01/11/2023',
    active: true,
    level: 'Iniciante',
    laboratory: 'SPLab',
  },
  {
    title: 'Dell AI Channels',
    description: 'Projeto da UFCG em parceria com a Dell EMC que utiliza técnicas de Processamento de Linguagem Natural(NLP) e Aprendizagem de Máquina (IML) e tem como objetivo a criação de um sistema de resposta automática, buscando aprimorar a experiência do consumidor.',
    areas: ['Inteligência Artificial'],
    technologies: ['python', 'SKLearn', 'Pandas', 'NumPy'],
    startDate: '08/10/2023',
    active: true,
    level: 'Iniciante',
    laboratory: 'LSD e LMD',
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
      <BackButton />
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
