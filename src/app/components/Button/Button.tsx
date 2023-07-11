'use client'
import { StyledButton } from './styles'
import React from 'react'

interface ButtonProps {
  text: string;
  marginLeft?: string;
  actived: boolean
}

export const ButtonCustom = ({ text, marginLeft, actived }: ButtonProps) => {
  return (
    <StyledButton marginLeft={marginLeft} active={actived}>{text}</StyledButton>
  )
}
