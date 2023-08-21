import React from 'react'
import { Card, Title, WrapperTitle } from './styles'


export const CardDetails = ({ icon: Icon, title, children }) => {
  return (
    <Card>
      <WrapperTitle>
        <Icon />
        <Title>{title}</Title>
      </WrapperTitle>
      {children}
    </Card>
  )
}