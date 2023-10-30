import React from 'react';
import { Wrapper } from './styles';
import { TitleWelcome } from '../../components/TitleWelcome/TitleWelcome';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { ButtonGoogle } from '../../components/ButtonGoogle/ButtonGoogle';
import { Help } from '../../assets/Help/Help';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

export const Home = () => {
  // Função para salvar os dados do professor no banco de dados
  const saveProfessorData = async (uid, email) => {
    const db = getFirestore();

    try {
      const professorRef = doc(db, 'professor', uid); // Substitua 'professores' pelo nome da sua coleção de professores
      const professorData = {
        email: email,
        uid: uid
      };

      await setDoc(professorRef, professorData);
      console.log('Dados do professor salvos com sucesso.');
    } catch (error) {
      console.error('Erro ao salvar dados do professor:', error);
    }
  };

  // Adicione um observador de alteração de autenticação para verificar o login
  const auth = getAuth();
  onAuthStateChanged(auth, (professor) => {
    if (professor) {
      // O professor está autenticado, então podemos salvar seus dados
      saveProfessorData(professor.uid, professor.email);
    }
  });

  return (
    <Wrapper>
      <TitleWelcome />
      <SubTitle text={'Faça login com a sua conta @ccc, @copins ou @computacao para acessar nossa plataforma.'} />
      <ButtonGoogle />
      <Link to="/ajuda" style={{ textDecoration: 'none' }}>
        <Help />
      </Link>
    </Wrapper>
  );
};
