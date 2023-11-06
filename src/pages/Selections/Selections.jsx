import React, { useState, useEffect, useContext } from 'react';
import { TitlePages } from '../../components/TitlePages/TitlePages';
import { ContainerEmpty, Wrapper } from '../Registrations/styles';
import { IsEmpty } from '../../components/IsEmpty/IsEmpty';
import { CardSelect } from '../../components/CardDetails/CardSelect';
import { BackButton } from '../../components/BackButton/BackButton';
import { AuthGoogleContext } from '../../contexts/authGoogle';
import { db } from '../../services/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';


export const Selections = () => {
  const [userVagas, setUserVagas] = useState([]);
  const { signed, user } = useContext(AuthGoogleContext);

  useEffect(() => {
    if (signed && user) {
      const vagasCollection = collection(db, 'vaga');
      const q = query(vagasCollection, where('userId', '==', user.uid));
      
      getDocs(q)
        .then((querySnapshot) => {
          const userVagasData = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            userVagasData.push({ id: doc.id, ...data });
          });
          setUserVagas(userVagasData);
        })
        .catch((error) => {
          console.error('Erro ao buscar as vagas do usuário:', error);
        });
    }
  }, [user]);

  return (
    <>
      <BackButton />
      <TitlePages align="left" title="Minhas Seleções" margin="4rem" />
      {userVagas.length > 0 ? (
        <Wrapper>
          {userVagas.map((vaga) => (
            <CardSelect key={vaga.id} title={vaga.tituloProjeto} initialValue='Ativa' idVaga={vaga.id} />
          ))}
        </Wrapper>
      ) : (
        <ContainerEmpty>
          <IsEmpty />
        </ContainerEmpty>
      )}
    </>
  );
};
