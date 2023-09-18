import React from 'react'
import { TitlePage } from './styles'

export const TitlePages = ({title, align, margin}) => {
  return (
    <TitlePage align={align} margin={margin}>
      {title}
    </TitlePage>
  )
}

