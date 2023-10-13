import React from 'react';
import { Card, ContainerDescription, Date, Description, LinkDetails, Title, TitlePoint, Wrapper, WrapperButtons } from './styles';
import { Tag } from '../Tag/Tag';
import { ButtonCustom } from '../Button/Button';
import { Link } from 'react-router-dom';

export const CardProject = ({ data }) => {
  const { title, description, areas, technologies, startDate, active } = data;

  return (
    <Card active={active}>
      <Title>{title}</Title>
      <ContainerDescription>
        <Description>{description}</Description>
      </ContainerDescription>
      <Wrapper>
        <TitlePoint>Áreas do projeto</TitlePoint>
        {areas.map((area, index) => (
          <Tag key={index} text={area} />
        ))}
      </Wrapper>
      <Wrapper>
        <TitlePoint>Tecnologia(s)</TitlePoint>
        {technologies.map((tech, index) => (
          <Tag key={index} text={tech} />
        ))}
      </Wrapper>
      <Wrapper>
        <TitlePoint>Previsão de início(s)</TitlePoint>
        <Date>{startDate}</Date>
      </Wrapper>
      <WrapperButtons>
        <Link to="/detalhes">
          <LinkDetails active={active}>Detalhes</LinkDetails>
        </Link>
        <Link to="/cadastro-aluno" style={{ textDecoration: 'none' }}>
          <ButtonCustom text='Candidate-se' actived={active}></ButtonCustom>
        </Link>
      </WrapperButtons>
    </Card>
  );
};
 
