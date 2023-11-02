import React, { useContext, useState, useEffect } from 'react';
import { Card, ContainerDescription, DateStyled, Description, LinkDetails, Title, TitlePoint, Wrapper, WrapperButtons } from './styles';
import { Tag } from '../Tag/Tag';
import { ButtonCustom } from '../Button/Button';
import { Link } from 'react-router-dom';
import { AuthGoogleContext } from '../../contexts/authGoogle';
import { getDoc, doc, collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import FullScreenModal from '../../modals/TextImg/FullScreen';
import { GoodLuck } from '../../modals/TextImg/GoodLuck';
import { db } from '../../services/firebaseConfig';

export const CardProject = ({ data }) => {
  const { signed, user } = useContext(AuthGoogleContext);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [isAlreadyApplied, setIsAlreadyApplied] = useState(false);

  const formatarData = (data) => {
    const dataFormatada = new Date(data);
    const dia = dataFormatada.getDate().toString().padStart(2, '0');
    const mes = (dataFormatada.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataFormatada.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  useEffect(() => {
    const checkIfAlreadyApplied = async () => {
      if (signed) {
        const userDoc = await getDoc(doc(db, 'aluno', user.uid));
        if (userDoc.exists()) {
          const inscricoesRef = collection(db, 'inscricao');
          const querySnapshot = await getDocs(query(inscricoesRef, where('idAluno', '==', user.uid), where('idVaga', '==', data.id)));
          if (querySnapshot.size > 0) {
            setIsAlreadyApplied(true);
          }
        }
      }
    };

    checkIfAlreadyApplied();
  }, [signed, user, data.id]);

  const handleApply = async () => {
    console.log(isAlreadyApplied);
    if (signed) {
      console.log('Função handleApply chamada.');

      if (isAlreadyApplied) {
        console.log('Erro: o usuário já se inscreveu nesta vaga.');
        alert('Você já se inscreveu nesta vaga.');
        return;
      }

      const inscriptionData = {
        idAluno: user.uid,
        idVaga: data.id,
        status: 'active',
      };

      const userDoc = await getDoc(doc(db, 'aluno', user.uid));
      if (userDoc.exists()) {
        const inscricoesRef = collection(db, 'inscricao');

        try {
          await addDoc(inscricoesRef, inscriptionData);
          console.log('Inscrição salva com sucesso.');
          setShowSuccessPopup(true);
          setIsAlreadyApplied(true);
        } catch (error) {
          console.log('Erro ao salvar a inscrição:', error);
          setShowErrorAlert(true);
        }
      } else {
        console.log('Erro: usuário não enviou dados de cadastro.');
        setShowErrorAlert(true);
      }
    } else {
      console.log('Erro: usuário não autenticado.');
      alert('Você precisa fazer login para se inscrever em uma vaga.');
    }
  };

  const renderTags = (items) => {
    return items
      .filter((item) => item.trim() !== '') // Filtra elementos vazios
      .map((item, index) => (
        <Tag key={index} text={item} />
      ));
  };

  return (
    <>
      <Card active={true}>
        <Title>{data.tituloProjeto}</Title>
        <ContainerDescription>
          <Description>{data.descricaoProjeto}</Description>
        </ContainerDescription>
        <Wrapper>
          <TitlePoint>Áreas do projeto</TitlePoint>
          {renderTags(data.areaVaga)}
        </Wrapper>
        <Wrapper>
          <TitlePoint>Tecnologia(s)</TitlePoint>
          {renderTags(data.tecnologias)}
        </Wrapper>
        <Wrapper>
          <TitlePoint>Previsão de início(s)</TitlePoint>
          <DateStyled>{formatarData(data.previsaoInicio)}</DateStyled>
        </Wrapper>
        <Wrapper>
          <TitlePoint>Nível da Vaga</TitlePoint>
          {renderTags(data.nivel)}
        </Wrapper>
        <Wrapper>
          <TitlePoint>Laboratório(s)</TitlePoint>
          {renderTags(data.laboratorio)}
        </Wrapper>
        <WrapperButtons>
          <Link to="/detalhes">
            <LinkDetails active={true}>Detalhes</LinkDetails>
          </Link>
          <ButtonCustom onClick={handleApply} actived={true} text='Candidatar-se' />
        </WrapperButtons>
      </Card>
      {showSuccessPopup && (
        <FullScreenModal>
          <GoodLuck text="Inscrição enviada com sucesso!" onClose={() => setShowSuccessPopup(false)} />
        </FullScreenModal>
      )}
      {showErrorAlert && (
        alert('Ocorreu um erro ao enviar a inscrição. Por favor, tente novamente mais tarde.')
      )}
    </>
  );
};
