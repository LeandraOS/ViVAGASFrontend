import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WomanCheck } from '../../assets/WomanCheck/WomanCheck';
import {
  Container, OutContainer, IconX, TextContainer, Text,
} from './styles';
import { Check } from '../../assets/WomanCheck/Check';

export function GoodLuck({ text }) {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(true);

  const handleIconXClick = () => {
    closeModal();
  };

  const closeModal = () => {
    navigate(-1); 
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 3000); 

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <OutContainer>
      {modalOpen && (
        <Container>
          <IconX onClick={handleIconXClick} />
          <WomanCheck />
          <TextContainer widthText="200px" padding="1.5rem">
            <Text textSize="16px" justify margin="0px">{text}</Text>
            <Text textSize="12px" justify margin="1.5rem">Boa sorte!</Text>
          </TextContainer>
          <Check />
        </Container>
      )}
    </OutContainer>
  );
}
