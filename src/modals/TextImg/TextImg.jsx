
import React, { useEffect } from 'react'
import { Container, IconX, OutContainer, Text, TextContainer } from './styles'
import { ButtonCustom } from '../../components/Button/Button'
import { Learning } from '../../assets/Woman/Learning'
import { useNavigate } from 'react-router-dom';



export const TextImg = ({ iconComponent, textSize, buttonText, text, justify, widthText, padding, margin }) => {
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
        <IconX onClick={handleIconXClick}></IconX>
        <>{iconComponent}</>
        <TextContainer widthText={widthText} padding={padding}>
          <Text textSize={textSize} justify={justify} margin={margin}>{text}</Text>
        </TextContainer>
        <ButtonCustom text={buttonText} marginLeft="0" actived={true}/>
      </Container>
    </OutContainer>
  )
}

export const HelpModal = () =>{
  return(
    <TextImg iconComponent={<Learning />} textSize="14px" buttonText="Login" text="As vagas em projetos são destinadas aos alunos matriculados ou formados no curso de Ciência da Computação na UFCG. E estes, possuem o email institucional, sendo assim, para realizar o login e acessar o sistema, faça login com o google usando esse email."
    justify="left" widthText="20rem" padding="2rem" margin="0" />
  )
}
/*      <TextImg
        iconComponent={<Check />}
        textSize={'18px'}
        buttonText="Conhecer vagas"
        text="Cadastro realizado com sucesso!"
        justify={false} widthText={'150px'} />
    </>
    */