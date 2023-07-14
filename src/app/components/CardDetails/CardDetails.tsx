import React, { ReactElement, ComponentType } from 'react'
import { Card, Title, WrapperTitle } from './styles'

interface CardDetailsProps {
  icon: ComponentType
  title: string
}

const CardDetails: React.FC<CardDetailsProps> = ({ icon: Icon, title }: CardDetailsProps): ReactElement => {
  return (
    <Card>
      <WrapperTitle>
        <Icon />
        <Title>{title}</Title>
      </WrapperTitle>
    </Card>
  )
}

export default CardDetails
