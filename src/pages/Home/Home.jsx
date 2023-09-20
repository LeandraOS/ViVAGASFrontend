import React from 'react'
import { Wrapper } from './styles'
import { TitleWelcome } from '../../components/TitleWelcome/TitleWelcome'
import { SubTitle } from '../../components/SubTitle/SubTitle'
import { ButtonGoogle } from '../../components/ButtonGoogle/ButtonGoogle'
import { Help } from '../../assets/Help/Help'
import { Link } from 'react-router-dom'


export const Home = () => {
  return (
    <Wrapper>
      <TitleWelcome />
      <SubTitle text={'Faça login com a sua conta @ccc, @copins ou @computacao para acessar nossa plataforma.'} />
      <ButtonGoogle />
      <Link to="/ajuda" style={{ textDecoration: 'none' }}>
        <Help />
      </Link>
        
    </Wrapper>
  )
}