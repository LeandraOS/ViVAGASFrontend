'use client'
import { StyledButton } from './styles'
import React from 'react'

interface ButtonProps {
  text: string;
  marginLeft?: string;
}

export const ButtonCustom = ({ text, marginLeft }: ButtonProps) => {
  return (
    <StyledButton marginLeft={marginLeft}>{text}</StyledButton>
  )
}
