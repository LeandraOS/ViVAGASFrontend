import React, { useContext } from 'react'
import { Button, Text } from './styles'
import { Google } from '../../assets/Google/Google'
import { AuthGoogleContext } from '../../contexts/authGoogle'

export const ButtonGoogle = () => {
  const {signInGoogle} = useContext(AuthGoogleContext)

  return (
    <Button onClick={signInGoogle}>
      <Google />
      <Text>Login com Google</Text>
    </Button>
  )
}