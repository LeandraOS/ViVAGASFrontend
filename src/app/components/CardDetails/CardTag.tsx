import React from 'react'
import { CardTags, Date, Title, UnderlinedText, WrapperTitle } from './styles'
import { Tag } from '../Tag/Tag'

interface CardTagProps {
  title: string;
}

export const CardTag: React.FC<CardTagProps> = ({ title }: CardTagProps) => {
  return (
    <CardTags>
      <WrapperTitle>
        <Title>{title}</Title>
      </WrapperTitle>
      <Tag text='Status: ENTREVISTA'></Tag>
      <UnderlinedText>
        <Date>Data de atualização: 13/09/2023</Date>
      </UnderlinedText>
    </CardTags>
  )
}
