import React from 'react'
import { Button, Text } from './styles'
import { Google } from '../../assets/Google/Google'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../../services/firebaseConfig';


const provider = new GoogleAuthProvider();


export const ButtonGoogle = () => {
  const auth = getAuth(app);

  const signInGoogle = () =>{
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  return (
    <Button onClick={signInGoogle}>
      <Google />
      <Text>Login com Google</Text>
    </Button>
  )
}