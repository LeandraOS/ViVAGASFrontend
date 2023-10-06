import React from 'react'
import { CardDetails } from './CardDetails'
import { IconCalendar, TextArea, ItemList, InputDate, TextDate, DateContainer } from './styles'
import { Input } from 'antd'

export const Calendar = () => {
  const dates = [
    { label: 'Abertura de inscrições', date: '13/10/2023' },
    { label: 'Término de inscrições', date: '18/10/2023' },
    { label: 'Entrevistas', date: '09/10/2023' },
    { label: 'Resultado', date: '25/10/2023' },
  ];

  const formatarData = (dataString) => {
    const [dia, mes, ano] = dataString.split('/');
    return `${ano}-${mes}-${dia}`;
  };

  return (
    <CardDetails width="360px" title="Cronograma" icon={IconCalendar}> 
      {dates.map((date, index) => (
        <DateContainer key={index}>
          <TextDate>{date.label}: </TextDate>
          <InputDate value={formatarData(date.date)} type='date' />
        </DateContainer>
      ))}

    </CardDetails>
  )
}

