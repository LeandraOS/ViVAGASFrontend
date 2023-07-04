'use client'
import React from 'react'
import { Button, Text } from './styles'
import { Google } from '@/app/assets/Google/Google'

export const ButtonGoogle = () => {
  return (
    <Button>
      <Google />
      <Text>Login com Google</Text>
    </Button>
  )
}

