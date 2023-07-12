'use client'
import React from 'react'
import { Container, LinksContainer, Links } from './styles'
import { LogoViVagas } from '@/app/assets/Logo/Logo'
import { ButtonCustom } from '../Button/Button'
import { ProfileMenu } from '../ProfileMenu/ProfileMenu'

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
        <ButtonCustom actived={true} text='Login' marginLeft='11.5rem' />
        <ProfileMenu name='Leandra Silva' registros='Candidaturas'></ProfileMenu>

      </LinksContainer>
    </Container>
  )
}

export default AppBar
