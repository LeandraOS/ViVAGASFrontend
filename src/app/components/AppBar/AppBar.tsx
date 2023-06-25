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
      <LinksContainer>
        <LogoViVagas />
        {pages.map((page) => (
          <Links key={page.title}>
            {page.title}
          </Links>
        ))}
        <ButtonCustom text='Login' />
      </LinksContainer>
    </Container>
  )
}

export default AppBar
