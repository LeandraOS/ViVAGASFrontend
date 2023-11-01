
import React, { useEffect } from 'react'
import { Container, IconX, OutContainer, Text, TextContainer } from './styles'
import { Learning } from '../../assets/Woman/Learning'
import { useNavigate } from 'react-router-dom';
import { ButtonLogin } from '../../components/ButtonLogin/ButtonLogin';

export const TextImg = ({ iconComponent, textSize, buttonText, text, justify, widthText, padding, margin }) => {
  const navigate = useNavigate();

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

  return (
    <OutContainer>
      <Container>
        <IconX onClick={handleIconXClick}></IconX>
        <>{iconComponent}</>
        <TextContainer widthText={widthText} padding={padding}>
          <Text textSize={textSize} justify={justify} margin={margin}>{text}</Text>
        </TextContainer>
        <ButtonLogin text={buttonText} marginLeft="0" actived={true}/>
      </Container>
    </OutContainer>
  )
}

export const HelpModal = () =>{
  return(
    <TextImg iconComponent={<Learning />} textSize="14px" buttonText="Login" text="As vagas em projetos são destinadas aos alunos matriculados ou formados no curso de Ciência da Computação na UFCG. E estes, possuem o email institucional, faça login com a sua conta @ccc, @copins ou @computacao para acessar nossa plataforma."
      justify="left" widthText="20rem" padding="2rem" margin="0" />
  )
}
