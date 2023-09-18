'use client'
import React from 'react'
import { Container, IconX, OutContainer, Text, TextContainer } from './styles'
import { ButtonCustom } from '@/app/components/Button/Button'


export const TextImg = ({ iconComponent, textSize, buttonText, text, justify, widthText, padding, margin }) => {
  return (
    <OutContainer>
      <Container>
        <IconX></IconX>
        <>{iconComponent}</>
        <TextContainer widthText={widthText} padding={padding}>
          <Text textSize={textSize} justify={justify} margin={margin}>{text}</Text>
        </TextContainer>
        <ButtonCustom text={buttonText} marginLeft="0" />
      </Container>
    </OutContainer>
  )
}

/*      <TextImg
        iconComponent={<Check />}
        textSize={'18px'}
        buttonText="Conhecer vagas"
        text="Cadastro realizado com sucesso!"
        justify={false} widthText={'150px'} />
    </>
    */