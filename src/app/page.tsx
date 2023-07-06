
'use client'
import React from 'react'
import AppBar from './components/AppBar/AppBar'
import { Home } from './pages/Home/Home'
import { GoodLuck } from './modals/textImg/GoodLuck'

export default function Page() {
  return (
    <>
      <AppBar />
      <Home />
      <GoodLuck />
    </>


  )

}
