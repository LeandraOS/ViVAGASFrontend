'use client'

import React from 'react'
import { Container, Text } from './styles'

interface SubTitleProps {
    text: string;
  }

export const SubTitle = ({ text }: SubTitleProps) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  )
}