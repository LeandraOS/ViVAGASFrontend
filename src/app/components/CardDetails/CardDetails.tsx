import React, { ComponentType, ReactNode } from 'react'
import { Card, Title, WrapperTitle } from './styles'

interface CardDetailsProps {
  icon: ComponentType;
  title: string;
  children: ReactNode;
}

export const CardDetails: React.FC<CardDetailsProps> = ({ icon: Icon, title, children }: CardDetailsProps) => {
  return (
    <Card>
      <WrapperTitle>
        <Icon />
        <Title>{title}</Title>
      </WrapperTitle>
      {children} {/* Render the children prop here */}
    </Card>
  )
}
