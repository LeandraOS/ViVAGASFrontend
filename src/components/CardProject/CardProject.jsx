import React, { useContext } from 'react';
import { Card, ContainerDescription, DateStyled, Description, LinkDetails, Title, TitlePoint, Wrapper, WrapperButtons } from './styles';
import { Tag } from '../Tag/Tag';
import { ButtonCustom } from '../Button/Button';
import { Link } from 'react-router-dom';
import { AuthGoogleContext } from '../../contexts/authGoogle';
import { db } from '../../services/firebaseConfig';
import { getDoc, doc, collection, addDoc } from 'firebase/firestore';

export const CardProject = ({ data }) => {
  const { signed, user } = useContext(AuthGoogleContext);

  const formatarData = (data) => {
    const dataFormatada = new Date(data);
    const dia = dataFormatada.getDate().toString().padStart(2, '0');
    const mes = (dataFormatada.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataFormatada.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  const handleApply = async () => {
    if (signed) {
      console.log('Função handleApply chamada.'); 

      const inscriptionData = {
        idAluno: user.uid, 
        idVaga: data.id,
        status: 'active', 
      };


      const userDoc = await getDoc(doc(db, 'aluno', user.uid));
      if (userDoc.exists() && userDoc.data().dadosEnviados) {
        const inscricoesRef = collection(db, 'inscricao'); 

        await addDoc(inscricoesRef, inscriptionData);
  
        console.log('Inscrição salva com sucesso.'); 
      } else {
        console.log('Erro: usuário não enviou dados de cadastro.'); 
        alert('Você deve enviar seus dados de cadastro antes de se inscrever em uma vaga.');
      }
    } else {
      console.log('Erro: usuário não autenticado.'); 
      alert('Você precisa fazer login para se inscrever em uma vaga.');
    }
  };

  return (
    <Card active={true}>
      <Title>{data.tituloProjeto}</Title>
      <ContainerDescription>
        <Description>{data.descricaoProjeto}</Description>
      </ContainerDescription>
      <Wrapper>
        <TitlePoint>Áreas do projeto</TitlePoint>
        {data.areaVaga.map((area, index) => (
          <Tag key={index} text={area} />
        ))}
      </Wrapper>

      <Wrapper>
        <TitlePoint>Tecnologia(s)</TitlePoint>
        {data.tecnologias.map((tech, index) => (
          <Tag key={index} text={tech} />
        ))}
      </Wrapper>

      <Wrapper>
        <TitlePoint>Previsão de início(s)</TitlePoint>
        <DateStyled>{formatarData(data.previsaoInicio)}</DateStyled>
      </Wrapper>

      <Wrapper>
        <TitlePoint>Nível da Vaga</TitlePoint>
        {data.nivel.map((nivel, index) =>(
          <Tag key={index} text={nivel} />

        ))}
      </Wrapper>
      <Wrapper>
        <TitlePoint>Laboratório(s)</TitlePoint>
        {data.laboratorio.map((lab, index) => (
          <Tag key={index} text={lab} />
        ))}
      </Wrapper>
      <WrapperButtons>
        <Link to="/detalhes">
          <LinkDetails active={true}>Detalhes</LinkDetails>
        </Link>
        <ButtonCustom onClick={() => handleApply(data.idVaga)} actived={true} text='Candidatar-se'/>
      </WrapperButtons>
    </Card>
  );
};
