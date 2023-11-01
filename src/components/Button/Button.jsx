import { StyledButton } from './styles'
import React from 'react'

export const ButtonCustom = ({ text, marginLeft, actived, ...props }) => {
  return (
    <StyledButton marginLeft={marginLeft} active={actived} {...props}>{text}</StyledButton>
  )
}