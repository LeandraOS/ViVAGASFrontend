import React, { useState, useEffect } from 'react';
import { CardTags, MenuCustom, Title, WrapperTitle } from './styles';
import { Select } from '@mui/material';
import { Link } from 'react-router-dom';
import { ButtonCustom } from '../Button/Button';
import { LinkDetails } from '../CardProject/styles';

export const CardSelect = ({ title, initialValue, idVaga }) => {
  const [age, setAge] = useState(() => {
    const storedValue = localStorage.getItem(`selectedValue-${title}`);
    return storedValue !== null ? storedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(`selectedValue-${title}`, age);
  }, [age, title]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setAge(selectedValue);
  };

  return (
    
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
        <MenuCustom value="active">Ativa</MenuCustom>
        <MenuCustom value="frozen">Congelada</MenuCustom>
        <MenuCustom value="finish">Finalizada</MenuCustom>
      </Select>
      <Link to={`/inscritos/${idVaga}`} style={{ textDecoration: 'none' }}>
        <LinkDetails active={true}>Ver inscritos</LinkDetails>
      </Link>
    </CardTags>
  );
};
