import React, { useContext } from 'react';
import { Container, LinksContainer, Links } from './styles';
import { LogoViVagas } from '../../assets/Logo/Logo';
import { Link } from 'react-router-dom';
import { ButtonLogin } from '../ButtonLogin/ButtonLogin';
import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
import { AuthGoogleContext } from '../../contexts/authGoogle';

export const AppBar = () => {
  const { signed, user, userType } = useContext(AuthGoogleContext);
  
  // Verifique se o cadastro já foi realizado no localStorage
  const cadastroRealizadoAluno = localStorage.getItem('cadastroRealizadoAluno') === 'true';

  // Defina as páginas com base no tipo de usuário
  let pages;
  let profileMenuType; // Definindo o tipo do ProfileMenu

  if (userType === 'professor') {
    pages = [
      { title: 'Cadastro Vagas', url: '/cadastro-vaga' },
      { title: 'Vagas', url: '/vagas' },
      { title: 'Minhas Seleções', url: '/selecoes' },
    ];
    profileMenuType = 'Seleções'; // Define o tipo do ProfileMenu para "Seleções"

  } else if (userType === 'aluno') {
    if (!cadastroRealizadoAluno) {
      pages = [
        { title: 'Cadastro Aluno', url: '/cadastro-aluno' },
        { title: 'Vagas', url: '/vagas' },
        { title: 'Minhas Inscrições', url: '/inscricoes' },
      ];
    } else {
      pages = [
        { title: 'Vagas', url: '/vagas' },
        { title: 'Minhas Inscrições', url: '/inscricoes' },
      ];
    }
    profileMenuType = 'Inscrições'; // Define o tipo do ProfileMenu para "Inscrições"
  } else {
    pages = [];
    profileMenuType = ''; // Define o tipo do ProfileMenu para uma string vazia
  }

  return (
    <Container>
      <LinksContainer>
        <LogoViVagas />
        {pages.map((page) => (
          <Links key={page.title}>
            <Link to={page.url}>{page.title}</Link>
          </Links>
        ))}
        {signed ? (
          // Renderize o ProfileMenu quando o usuário estiver logado
          <ProfileMenu name={user.displayName} registros={profileMenuType} picture={user.photoURL} type={profileMenuType} />
        ) : (
          // Renderize o botão de login quando o usuário não estiver logado
          <ButtonLogin actived={true} text="Entrar" marginLeft="11.5rem" />
        )}
      </LinksContainer>
    </Container>
  );
};
