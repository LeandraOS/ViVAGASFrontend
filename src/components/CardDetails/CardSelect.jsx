import React, { useState, useEffect } from 'react';
import { CardTags, MenuCustom, Title, WrapperTitle } from './styles';
import { Select } from '@mui/material';
import { Link } from 'react-router-dom';

export const CardSelect = ({ title, initialValue }) => {
  const [age, setAge] = useState(() => {
    const storedValue = localStorage.getItem(`selectedValue-${title}`);
    return storedValue !== null ? storedValue : initialValue; // Use o valor inicial fornecido se não houver valor no localStorage
  });

  useEffect(() => {
    // Armazene o valor selecionado no localStorage sempre que ele for atualizado
    localStorage.setItem(`selectedValue-${title}`, age);
  }, [age, title]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setAge(selectedValue);
  };

  return (
    <Link to="/inscritos" style={{textDecoration: 'none'}}>
      <CardTags>
        <WrapperTitle>
          <Title>{title}</Title>
        </WrapperTitle>
        <Select
          sx={{
            color: '#2086B6',
            fontSize: '12px',
            border: 'solid 1px #2086B6',
            height: '36px',
            '&:hover': {
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: '#2086B6',
              },
            },
            '& svg': {
              color: '#2086B6',
            },
          }}
          value={age}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuCustom value={10}>Ativa</MenuCustom>
          <MenuCustom value={20}>Congelada</MenuCustom>
          <MenuCustom value={30}>Finalizada</MenuCustom>
        </Select>
      </CardTags>
    </Link>
  );
};
