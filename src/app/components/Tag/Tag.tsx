import React from 'react'
import { Container } from './styles'

interface TagProps{
    text: string
}

export const Tag = ({text}:TagProps) => {
  return (
    <Container>
      {text}
    </Container>
  )
}

