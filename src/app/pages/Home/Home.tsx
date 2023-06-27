'use client'
import React from 'react'
import { Wrapper } from './styles'
import { TitleWelcome } from '@/app/components/TitleWelcome/TitleWelcome'
import { SubTitle } from '@/app/components/SubTitle/SubTitle'
import { ButtonGoogle } from '@/app/components/ButtonGoogle/ButtonGoogle'
import { Help } from '@/app/assets/Help/Help'

export const Home = () => {
  return (
    <Wrapper>
      <TitleWelcome />
      <SubTitle text='Faça login com a sua conta @ccc,
       @copins ou @computacao para 
       acessar nossa plataforma.'/>
      <ButtonGoogle></ButtonGoogle>
      <Help></Help>
    </Wrapper>
  )
}
