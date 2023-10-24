import React, { useContext } from 'react';
import { Button, Logout, Text } from './styles';
import { Google } from '../../assets/Google/Google';
import { AuthGoogleContext } from '../../contexts/authGoogle';
import { Navigate } from 'react-router-dom';

export const ButtonGoogle = () => {
  const { signInGoogle, signed, user, signOut } = useContext(AuthGoogleContext);

  async function loginGoogle() {
    await signInGoogle();
  }

  function logout() {
    signOut(); // Chama a função de logout do contexto
  }

  if (!signed) {
    return (
      <Button onClick={() => loginGoogle()}>
        <Google />
        <Text>Login com Google</Text>
      </Button>
    );
  } else {
    return (
      <div>
        <Button onClick={logout}>
          <Logout />
          <Text>Logout do Google</Text>
        </Button>
        <Navigate to="/" />
      </div>
    );
  }
};
