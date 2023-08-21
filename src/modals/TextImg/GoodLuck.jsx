/* eslint-disable react/jsx-no-comment-textnodes */
import { WomanCheck } from '@/app/assets/WomanCheck/WomanCheck'
import React from 'react'
import { Container, OutContainer, IconX, TextContainer, Text } from './styles'
import { Check } from '@/app/assets/WomanCheck/Check'

export const GoodLuck = () => {
  return (
    <OutContainer>
      <Container>
        <IconX></IconX>
        <WomanCheck />
        <TextContainer widthText={'200px'} padding='1.5rem' >
          <Text textSize={'16px'} justify={true} margin='0px'>Candidatura enviada!</Text>
          <Text textSize={'12px'} justify={true} margin='1.5rem'>Boa sorte!</Text>
        </TextContainer>
        <Check />
      </Container>
    </OutContainer>
  )
}