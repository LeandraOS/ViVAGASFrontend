import React from 'react'
import { Card, ContainerDescription, Date, Description, LinkDetails, Title, TitlePoint, Wrapper, WrapperButtons } from './styles'
import { Tag } from '../Tag/Tag'
import { ButtonCustom } from '../Button/Button'

export const CardProject = ({active}) => {
  return (

    <Card active={active}>
      <Title>Título do projeto</Title>
      <ContainerDescription>
        <Description>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard.
        </Description>
      </ContainerDescription>
      <Wrapper>
        <TitlePoint>Áreas do projeto</TitlePoint>
        <Tag text='Frontend'></Tag>
      </Wrapper>
      <Wrapper>
        <TitlePoint>Tecnologia(s)</TitlePoint>
        <Tag text='React'></Tag>
        <Tag text='Go'></Tag>
      </Wrapper>
      <Wrapper>
        <TitlePoint>Previsão de início(s)</TitlePoint>
        <Date>Agosto de 2023</Date>
      </Wrapper>
      <WrapperButtons>
        <LinkDetails active={active}>Detalhes</LinkDetails>
        <ButtonCustom text='Candidate-se' actived={active}></ButtonCustom>
      </WrapperButtons>
    </Card>
  )
}