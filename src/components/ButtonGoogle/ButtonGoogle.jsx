import React, { useContext } from 'react'
import { Button, Text } from './styles'
import { Google } from '../../assets/Google/Google'
import { AuthGoogleContext } from '../../contexts/authGoogle'
import { Navigate } from 'react-router-dom'

export const ButtonGoogle = () => {
  const {signInGoogle, signed, user} = useContext(AuthGoogleContext)

  async function loginGoogle(){
    await signInGoogle()
  }

  if(!signed){
    
    return (
      <Button onClick={() => loginGoogle()}>
        <Google />
        <Text>Login com Google</Text>
      </Button>
    )
  }else{
    return <Navigate to='/'/>
  }
}