'use client'
import React from 'react'
import { Container, LinksContainer, Links } from './styles'
import { LogoViVagas } from '@/app/assets/Logo/Logo'
import { ButtonCustom } from '../Button/Button'

const AppBar = () => {
  const pages = [
    { title: 'Vagas', url: '/' },

  ]

  return (
    <Container>
      <LogoViVagas></LogoViVagas>
      <LinksContainer>
        {pages.map((page) => (
          <Links key={page.title}>
            {page.title}
          </Links>
        ))}
      </LinksContainer>
      <ButtonCustom text='Login' />
    </Container>
  )
}

export default AppBar
