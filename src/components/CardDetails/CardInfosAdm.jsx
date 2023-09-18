import React from 'react'
import { CardDetails } from './CardDetails'
import { IconInfos, ItemList, TextArea } from './styles'

export const CardInfosAdm = () => {
  return (
    <CardDetails width="350px" marginBottom="2rem" icon={IconInfos} title='Informações administrativas'>
      <TextArea>
        <ItemList fontWeight={700}>Valor da bolsa:</ItemList>
        <TextArea>
          <ItemList>Estudantes de graduação: R$ 1200,00</ItemList>
          <ItemList>Estudantes de pós-graduação: R$ 4033,00</ItemList>
        </TextArea>
        <ItemList fontWeight={700}>Carga horária: </ItemList>
        <TextArea>
          <ItemList>Estudantes de graduação: R$ 1200,00</ItemList>
          <ItemList>Estudantes de pós-graduação: R$ 4033,00</ItemList>
        </TextArea>

        <ItemList >Tempo de duração do projeto: 15 meses</ItemList>
        <ItemList>Formato de execução: presencial</ItemList>
      </TextArea>
      
    </CardDetails>
  )
}