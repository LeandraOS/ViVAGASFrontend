
'use client'
import React from 'react'
import AppBar from './components/AppBar/AppBar'
import { Home } from './pages/Home/Home'
import { TextImg } from './modals/textImg/TextImg'
import { Check } from './assets/Check/Check'

export default function Page() {
  return (
    <>
      <AppBar />
      <Home />
      <TextImg
        iconComponent={<Check />}
        textSize={'18px'}
        buttonText="Conhecer vagas"
        text="Cadastro realizado com sucesso!"
        justify={false} widthText={'150px'} />
    </>

  )

}
