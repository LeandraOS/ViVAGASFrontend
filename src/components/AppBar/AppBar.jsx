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
  const cadastroRealizadoVaga= localStorage.getItem('cadastroRealizadoVaga') === 'true';


  // Defina as páginas com base no tipo de usuário
  let pages;

  if (userType === 'professor') {
    pages = [
      { title: 'Vagas', url: '/vagas' },
      { title: 'Seleções', url: '/selecoes' },
    ];
    
    if (!cadastroRealizadoVaga) {
      // Adicione o link "Cadastro Vaga" apenas se o cadastro não tiver sido realizado
      pages.push({ title: 'Cadastro Vagas', url: '/cadastro-vaga' });
    }
  } else if (userType === 'aluno') {
    if (!cadastroRealizadoAluno) {
      pages = [
        { title: 'Cadastro Aluno', url: '/cadastro-aluno' },
        { title: 'Vagas', url: '/vagas' },
        { title: 'Candidaturas', url: '/inscricoes' },
      ];
    } else {
      pages = [
        { title: 'Vagas', url: '/vagas' },
        { title: 'Candidaturas', url: '/inscricoes' },
      ];
    }
  } else {
    pages = [];
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
          <ProfileMenu name={user.displayName} registros="Candidaturas" picture={user.photoURL} />
        ) : (
          // Renderize o botão de login quando o usuário não estiver logado
          <ButtonLogin actived={true} text="Entrar" marginLeft="11.5rem" />
        )}
      </LinksContainer>
    </Container>
  );
};
