import React from 'react'
import { Empty, Text, Wrapper } from './styles'

export const IsEmpty = ({text}) => {
  return (
    <Wrapper>
      <Empty />
      <Text>{text}</Text>
    </Wrapper>
  )
}

