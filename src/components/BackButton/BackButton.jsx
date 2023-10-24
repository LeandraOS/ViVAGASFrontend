import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, IconBack } from './styles';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <Button onClick={handleGoBack}>
      <IconBack />
      Voltar
    </Button>
  );
};
