import { createContext, useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut as firebaseSignOut } from 'firebase/auth';
import { app } from '../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const AuthGoogleContext = createContext({});

export const AuthGoogleProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadStoredAuth = () => {
      const sessionToken = sessionStorage.getItem('@AuthFirebase:token');
      const sessionUser = sessionStorage.getItem('@AuthFirebase:user');
      if (sessionToken && sessionUser) {
        const storedUser = JSON.parse(sessionUser);
        setUser(storedUser);
        setUserType(getUserTypeFromEmail(storedUser.email));
      }
    }
    loadStoredAuth();
  }, []);

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const userEmail = user.email;
        const userType = getUserTypeFromEmail(userEmail);

        if (userType) {
          setUser(user);
          setUserType(userType);
          sessionStorage.setItem('@AuthFirebase:token', token);
          sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user));
          navigate('/vagas');
        } else {
          const confirmed = window.confirm('Domínio de e-mail não autorizado. Deseja fazer logout?');
          if (confirmed) {
            performLogout();
          } else {
            alert('As vagas em projetos são destinadas aos alunos matriculados ou formados no curso de Ciência da Computação na UFCG. E estes, possuem o email institucional (@ccc, @copin ou @computacao). Portanto, faça login com o Google usando esse email.');
          }
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error('Erro ao autenticar com o Google:', error);
        alert('Erro ao fazer login.');
      });
  }

  const performLogout = () => {
    firebaseSignOut(auth)
      .then(() => {
        sessionStorage.clear();
        setUser(null);
        setUserType(null);
        navigate('/'); 
      })
      .catch((error) => {
        console.error('Erro ao fazer logout:', error);
      });
  }

  const getUserTypeFromEmail = (email) => {
    const allowedDomains = ['bemobi', 'ccc', 'copin', 'computacao'];
    const domain = email.split('@')[1].split('.')[0];

    if (allowedDomains.includes(domain)) {
      if (domain === 'bemobi' || domain === 'computacao') {
        return 'professor';
      } else {
        return 'aluno';
      }
    } else {
      return '';
    }
  }

  return (
    <AuthGoogleContext.Provider value={{ signInGoogle, signOut: performLogout, signed: !!user, user, userType }}>
      {children}
    </AuthGoogleContext.Provider>
  )
}
