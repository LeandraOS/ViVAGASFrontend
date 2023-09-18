import React from 'react'
import { Empty, Text, Wrapper } from './styles'

export const IsEmpty = () => {
  return (
    <Wrapper>
      <Empty />
      <Text>Por enquanto... nenhuma inscrição</Text>
    </Wrapper>
  )
}

