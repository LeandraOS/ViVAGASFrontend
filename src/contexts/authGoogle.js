import { createContext, useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../services/firebaseConfig';
import { Navigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const AuthGoogleContext = createContext({});

// ...

export const AuthGoogleProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const loadStoreAuth = () => {
      const sessionToken = sessionStorage.getItem('@AuthFirebase:token');
      const sessionUser = sessionStorage.getItem('@AuthFirebase:user');
      if (sessionToken && sessionUser) {
        const storedUser = JSON.parse(sessionUser);
        setUser(storedUser);
        setUserType(getUserTypeFromEmail(storedUser.email));
      }
    }
    loadStoreAuth();
  }, []);

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        // Analise o e-mail do usuário para determinar o tipo
        const userEmail = user.email;
        const userType = getUserTypeFromEmail(userEmail);

        if (userType) {
          setUser(user);
          setUserType(userType);
          sessionStorage.setItem('@AuthFirebase:token', token);
          sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user));
        } else {
          // Usuário com domínio não autorizado
          signOut(); // Desconecta o usuário
          alert('Domínio de e-mail não autorizado. Faça login com um domínio autorizado.');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error('Erro ao autenticar com o Google:', error);
      });
  }

  function signOut() {
    sessionStorage.clear();
    setUser(null);
    setUserType(null);
    return <Navigate to='/' />;
  }

  // Função para determinar o tipo com base no e-mail
  const getUserTypeFromEmail = (email) => {
    const allowedDomains = ['computacao', 'ccc', 'copins'];

    const domain = email.split('@')[1];
    if (allowedDomains.includes(domain)) {
      return 'aluno';
    } else if (domain === 'computacao') {
      return 'professor';
    } else {
      return null; // Domínio não autorizado
    }
  }

  return (
    <AuthGoogleContext.Provider value={{ signInGoogle, signed: !!user, user, userType, signOut }}>
      {children}
    </AuthGoogleContext.Provider>
  )
}
