import React, { useState } from 'react';
import { Select, Tag } from 'antd';
import { Label, Wrapper } from './styles';

const categories = {
  vagas: ['Todas'],
  tecnologias: [
    'React', 'Angular', 'Vue', 'Node.js', 'Python', 'Java', 'C#', 'Ruby', 'PHP', 'Swift',
  ],
  laboratorios: ['splab', 'lsd', 'lacina'],
  areas: ['Frontend', 'Backend', 'Mobile', 'Data Science', 'DevOps', 'UX/UI'],
  niveis: ['Iniciante', 'Intermediário', 'Avançado'],
};

export const SelectFilter = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (value) => {
    setSelectedFilters(value);
    onFilterChange(value); // Chama a função de retorno de chamada em Vagas
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
        <Label>Vagas:</Label>
        <Select
          mode="multiple"
          allowClear
          style={{
            width: '10%',
            borderColor: '#8FC9FC',
          }}
          placeholder="Selecione"
          onChange={handleChange}
          tagRender={tagRender}
          options={categories.vagas.map((option) => ({
            label: option,
            value: option,
          }))}
        />

        <Label>Tecnologia:</Label>
        <Select
          mode="multiple"
          allowClear
          style={{
            width: '20%',
          }}
          placeholder="Selecione"
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
          tagRender={tagRender}
          options={categories.areas.map((option) => ({
            label: option,
            value: option,
          }))}
        />
      </Wrapper>
    </>
  );
};
