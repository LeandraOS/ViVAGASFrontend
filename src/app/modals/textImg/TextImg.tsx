'use client'
import React from 'react'
import { Container, IconX, OutContainer, Text, TextContainer } from './styles'
import { ButtonCustom } from '@/app/components/Button/Button'

interface TextImgProps {
  iconComponent: React.ReactNode;
  textSize?: string;
  buttonText: string;
  text: string;
  widthText: string;
  justify: boolean;

}

export const TextImg = ({ iconComponent, textSize, buttonText, text, justify, widthText }: TextImgProps) => {
  return (
    <OutContainer>
      <Container>
        <IconX></IconX>
        <>{iconComponent}</>
        <TextContainer widthText={widthText} >
          <Text textSize={textSize} justify={justify}>{text}</Text>
        </TextContainer>
        <ButtonCustom text={buttonText} marginLeft="0" />
      </Container>
    </OutContainer>
  )
}
