'use client'
import React from 'react'
import { Wrapper } from './styles'
import { TitleWelcome } from '@/app/components/TitleWelcome/TitleWelcome'
import { SubTitle } from '@/app/components/SubTitle/SubTitle'

export const Home = () => {
  return (
    <Wrapper>
      <TitleWelcome />
      <SubTitle text='Faça login com a sua conta @ccc,
       @copins ou @computacao para 
       acessar nossa plataforma.'/>
    </Wrapper>
  )
}
