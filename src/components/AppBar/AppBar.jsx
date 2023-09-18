import React from 'react'
import { Container, LinksContainer, Links } from './styles'
import { LogoViVagas } from '../../assets/Logo/Logo'
import { ButtonCustom } from '../Button/Button'
//import { ProfileMenu } from '../ProfileMenu/ProfileMenu.jsx'

export const AppBar = () => {
  const pages = [
    { title: 'Inscrições', url: '/' },
    { title: 'Vagas', url: '/' },
    { title: 'Detalhes', url: '/' },
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
        {/*<ProfileMenu name='Leandra Silva' registros='Candidaturas'></ProfileMenu>*/}

      </LinksContainer>
    </Container>
  )
}

