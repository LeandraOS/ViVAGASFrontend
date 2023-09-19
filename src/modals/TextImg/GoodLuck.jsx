import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { WomanCheck } from '../../assets/WomanCheck/WomanCheck';
import {
  Container, OutContainer, IconX, TextContainer, Text,
} from './styles';
import { Check } from '../../assets/WomanCheck/Check';

export function GoodLuck() {
  const navigate = useNavigate();

  const handleIconXClick = () => {
    closeModal();
  };

  const closeModal = () => {
    navigate(-1); // Volte para a página anterior
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    // Adicione um ouvinte de evento para a tecla Esc
    window.addEventListener('keydown', handleKeyDown);

    // Remova o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return (
    <OutContainer>
      <Container>
        <IconX onClick={handleIconXClick} />
        <WomanCheck />
        <TextContainer widthText="200px" padding="1.5rem">
          <Text textSize="16px" justify margin="0px">Candidatura enviada!</Text>
          <Text textSize="12px" justify margin="1.5rem">Boa sorte!</Text>
        </TextContainer>
        <Check />
      </Container>
    </OutContainer>
  );
}
