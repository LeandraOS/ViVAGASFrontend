import React from 'react'
import { CardTags, Date, Title, UnderlinedText, WrapperTitle } from './styles'
import { Tag } from '../Tag/Tag'


export const CardRegistrations = ({ title }) => {
  return (
    <CardTags>
      <WrapperTitle>
        <Title>{title}</Title>
      </WrapperTitle>
      <Tag text='Status: ANÁLISE DE CURRÍCULO'></Tag>
      <UnderlinedText>
        <Date>Data de atualização: --/--/--</Date>
      </UnderlinedText>
    </CardTags>
  )
}