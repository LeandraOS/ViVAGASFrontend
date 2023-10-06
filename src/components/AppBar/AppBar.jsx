import React from 'react'
import { Container, LinksContainer, Links } from './styles'
import { LogoViVagas } from '../../assets/Logo/Logo'
import { ButtonCustom } from '../Button/Button'
import { Link } from 'react-router-dom'; // Importe o Link

export const AppBar = () => {
  const pages = [
    { title: 'Inscrições', url: '/inscricoes' }, // Atualize os URLs correspondentes
    { title: 'Vagas', url: '/vagas' },
  ]

  return (
    <Container>
      <LinksContainer>
        <LogoViVagas />
        {pages.map((page) => (
          <Links key={page.title}>
            <Link to={page.url}>{page.title}</Link>
          </Links>
        ))}
        <ButtonCustom actived={true} text='Login' marginLeft='11.5rem' />
        {/*<ProfileMenu name='Leandra Silva' registros='Candidaturas'></ProfileMenu>*/}

      </LinksContainer>
    </Container>
  )
}
