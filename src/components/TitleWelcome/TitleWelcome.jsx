import React, { useEffect, useState } from 'react';
import { Title } from './styles';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const TitleWelcome = () => {
  const [userName, setUserName] = useState('');

  const fetchUserName = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const name = user.displayName || 'Usuário';
        setUserName(name);
      }
    });
  };

  useEffect(() => {
    fetchUserName();
  }, []);

  return (
    <Title>
      Bem-vindo(a), {userName}
    </Title>
  );
};
