import React, { useState } from 'react';
import { Select, Tag } from 'antd';
import { Label, Wrapper } from './styles';

const categories = {
  tecnologias: ['Todas', 'React', 'Angular', 'Vue', 'Node.js', 'Python', 'Java', 'C#', 'Ruby', 'PHP', 'Swift'],
  laboratorios: ['Todas', 'splab', 'lsd', 'lacina'],
  areas: ['Todas', 'Frontend', 'Backend', 'Mobile', 'Data Science', 'DevOps', 'UX/UI'],
  niveis: ['Todas', 'Iniciante', 'Intermediário', 'Avançado'],
};

export const SelectFilter = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    vagas: [],
    tecnologias: [],
    laboratorios: [],
    areas: [],
    niveis: [],
  });

  const handleChange = (key, values) => {
    const lowercasedValues = values.map(value => value.toLowerCase());
    setSelectedFilters({ ...selectedFilters, [key]: lowercasedValues });
    onFilterChange({ ...selectedFilters, [key]: lowercasedValues });
  };

  const handleFilterChange = (key, values) => {
    if (values.includes('Todas')) {
      // Se "Todas" estiver selecionada, limpe o filtro
      handleChange(key, []);
    } else {
      handleChange(key, values);
    }
  };

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color="#C6E4FF"
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 3,
          color: '#2878BE',
          border: '1px solid #8FC9FC',
        }}
      >
        {label}
      </Tag>
    );
  };

  return (
    <>
      <Wrapper>
        <Label>Tecnologia:</Label>
        <Select
          mode="multiple"
          allowClear
          style={{
            width: '20%',
          }}
          placeholder="Selecione"
          onChange={(value) => handleFilterChange('tecnologias', value)}
          tagRender={tagRender}
          options={categories.tecnologias.map((option) => ({
            label: option,
            value: option,
          }))}
        />

        <Label>Laboratório:</Label>
        <Select
          mode="multiple"
          allowClear
          style={{
            width: '20%',
          }}
          placeholder="Selecione"
          onChange={(value) => handleFilterChange('laboratorios', value)}
          tagRender={tagRender}
          options={categories.laboratorios.map((option) => ({
            label: option,
            value: option,
          }))}
        />

        <Label>Área:</Label>
        <Select
          mode="multiple"
          allowClear
          style={{
            width: '20%',
          }}
          placeholder="Selecione"
          onChange={(value) => handleFilterChange('areas', value)}
          tagRender={tagRender}
          options={categories.areas.map((option) => ({
            label: option,
            value: option,
          }))}
        />

        <Label>Nível:</Label>
        <Select
          mode="multiple"
          allowClear
          style={{
            width: '20%',
          }}
          placeholder="Selecione"
          onChange={(value) => handleFilterChange('niveis', value)}
          tagRender={tagRender}
          options={categories.niveis.map((option) => ({
            label: option,
            value: option,
          }))}
        />
      </Wrapper>
    </>
  );
};
