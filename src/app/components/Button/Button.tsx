import { Button } from './styles'
import React from 'react'

interface ButtonProps {
    text: string;
}

export const ButtonCustom = ({ text }: ButtonProps) => {
  return <Button>{text}</Button>
}

