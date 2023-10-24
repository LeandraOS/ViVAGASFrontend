import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Registrations } from '../pages/Registrations/Registrations';
import { Home } from '../pages/Home/Home';
import { Vagas } from '../pages/Vacancy/Vagas';
import { Details } from '../pages/Details/Details';
import { ButtonCustom } from '../components/Button/Button';
import { Selections } from '../pages/Selections/Selections';
import { HelpModal } from '../modals/TextImg/TextImg';
import { CadastroAluno } from '../pages/CadastroAluno/CadastroAluno';
import CadastroVagas from '../pages/CadastroVagas/CadastroVagas';
import { Subscribers } from '../pages/Subscribers/Subscribers';
import { AuthGoogleContext } from '../contexts/authGoogle';
import { useContext } from 'react';
import { Help } from '../assets/Help/Help';

export const AppRoutes = () => {
  const { userType } = useContext(AuthGoogleContext);
  console.log('userType:', userType);

  return userType ? ( // Verifique se userType está definido
    <Routes>
      <Route path='/vagas' element={<Vagas />} />
      <Route path='/detalhes' element={<Details />} />
      <Route path='/ajuda' element={<Help />} />


      {/* Verifica se o usuário é um aluno para permitir o acesso a estas rotas */}
      {userType === 'aluno' && (
        <>
          <Route path='/cadastro-aluno' element={<CadastroAluno />} />
          <Route path='/inscricoes' element={<Registrations />} />

        </>
      )}

      {/* Verifica se o usuário é um professor para restringir o acesso ao cadastro de aluno */}
      {userType === 'professor' && (
        <>
          <Route path='/cadastro-vaga' element={<CadastroVagas />} />
          <Route path='/selecoes' element={<Selections />} />
          <Route path='/inscritos' element={<Subscribers />} />
        </>
      )}

      {/* Adicionando um botão para ir para a página de cadastro */}
      <Route
        path='/forms2'
        element={
          <div>
            <h2>Outra Tela com Formulários</h2>
            <Link to="/cadastro">
              <ButtonCustom>Ir para Cadastro</ButtonCustom>
            </Link>
          </div>
        }
      />

      {/* Redireciona para a página inicial se o usuário não tiver permissão para acessar */}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  ) : null; // Renderize null se userType não estiver definido
};
