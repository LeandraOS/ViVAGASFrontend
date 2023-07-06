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
  padding: string;
  margin: string;

}

export const TextImg = ({ iconComponent, textSize, buttonText, text, justify, widthText, padding, margin }: TextImgProps) => {
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