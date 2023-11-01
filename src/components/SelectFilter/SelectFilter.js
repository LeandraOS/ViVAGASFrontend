import React, { useState, useEffect } from 'react';
import { Select, Tag } from 'antd';
import { Label, Wrapper } from './styles';

const categories = {
  tecnologias: ['React', 'Angular', 'Vue', 'Node.js', 'Python', 'Java', 'C#', 'Ruby', 'PHP', 'Swift'],
  laboratorio: ['SPLAB', 'LSD', 'lacina'],
  areaVaga: ['Frontend', 'Backend', 'Mobile', 'Data Science', 'DevOps', 'UX/UI'],
  nivel: ['Iniciante', 'Intermediário', 'Avançado'],
};

export const SelectFilter = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    tecnologias: [],
    laboratorio: [],
    areaVaga: [],
    nivel: [],
  });

  const handleChange = (key, values) => {
    const updatedFilters = { ...selectedFilters, [key]: values };
    setSelectedFilters(updatedFilters);

    onFilterChange(updatedFilters);
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
          onChange={(value) => handleChange('tecnologias', value)}
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
          onChange={(value) => handleChange('laboratorio', value)}
          tagRender={tagRender}
          options={categories.laboratorio.map((option) => ({
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
          onChange={(value) => handleChange('areaVaga', value)}
          tagRender={tagRender}
          options={categories.areaVaga.map((option) => ({
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
          onChange={(value) => handleChange('nivel', value)}
          tagRender={tagRender}
          options={categories.nivel.map((option) => ({
            label: option,
            value: option,
          }))}
        />
      </Wrapper>
    </>
  );
};
