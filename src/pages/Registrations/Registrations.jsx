import React, { useState, useEffect, useContext } from 'react';
import { Spin } from 'antd'; // Importe o Spin do Ant Design
import { TitlePages } from '../../components/TitlePages/TitlePages';
import { CardRegistrations } from '../../components/CardDetails/CardRegistrations';
import { ContainerEmpty, Wrapper } from './styles';
import { IsEmpty } from '../../components/IsEmpty/IsEmpty';
import { BackButton } from '../../components/BackButton/BackButton';
import { AuthGoogleContext } from '../../contexts/authGoogle';
import { db } from '../../services/firebaseConfig';
import { collection, query, where, getDocs, getDoc, doc } from 'firebase/firestore';

export const Registrations = () => {
  const [registrations, setRegistrations] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado para indicar se está carregando

  const { user } = useContext(AuthGoogleContext);

  useEffect(() => {
    if (user) {
      const fetchRegistrations = async () => {
        setIsLoading(true); // Define isLoading para true durante a busca

        const inscricoesRef = collection(db, 'inscricao');
        const querySnapshot = await getDocs(query(inscricoesRef, where('idAluno', '==', user.uid)));

        const registrationData = [];

        for (const docSnapshot of querySnapshot.docs) {
          const data = docSnapshot.data();
          // Recupere os detalhes da vaga usando o idVaga
          const vagaDoc = await getDoc(doc(db, 'vaga', data.idVaga));
          const vagaData = vagaDoc.data();
          console.log(vagaData);

          if (vagaData) {
            registrationData.push({
              id: docSnapshot.id,
              tituloProjeto: vagaData.tituloProjeto, // Supondo que o título do projeto está em vagaData
              // Outros dados da inscrição ou vaga que você deseja incluir
            });
          }
        }

        setRegistrations(registrationData);
        setIsLoading(false); // Define isLoading para false após a busca
      };

      fetchRegistrations();
    }
  }, [user]);

  return (
    <>
      <BackButton />
      <TitlePages align="left" title="Minhas Inscrições" margin="4rem" />
      {isLoading ? (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Spin size="large" />
        </div>
      ) : registrations.length > 0 ? (
        <Wrapper>
          {registrations.map((registration) => (
            <CardRegistrations key={registration.id} title={registration.tituloProjeto} />
          ))}
        </Wrapper>
      ) : (
        <ContainerEmpty>
          <IsEmpty text="Nenhuma inscrição..." />
        </ContainerEmpty>
      )}
    </>
  );
};
