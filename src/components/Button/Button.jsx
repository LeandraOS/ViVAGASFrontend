import { StyledButton } from './styles'
import React from 'react'

export const ButtonCustom = ({ text, marginLeft, actived }) => {
  return (
    <StyledButton marginLeft={marginLeft} active={actived}>{text}</StyledButton>
  )
}