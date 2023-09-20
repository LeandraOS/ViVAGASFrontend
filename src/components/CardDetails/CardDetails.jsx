import React from 'react'
import { Card, Title, WrapperTitle } from './styles'

export const CardDetails = ({ icon: Icon, title, children, width, marginBottom }) => {
  return (
    <Card width={width} marginBottom={marginBottom}>
      <WrapperTitle>
        <Icon />
        <Title>{title}</Title>
      </WrapperTitle>
      {children}
    </Card>
  )
}