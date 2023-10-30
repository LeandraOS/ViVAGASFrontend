import React, { useContext } from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
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
import { Help } from '../assets/Help/Help';

export const AppRoutes = () => {
  const { userType } = useContext(AuthGoogleContext);
  const navigate = useNavigate();
  
  const cadastroRealizado = localStorage.getItem('cadastroRealizado') === 'true';

  return userType ? (
    <Routes>
      <Route path='/vagas' element={<Vagas />} />
      <Route path='/detalhes' element={<Details />} />
      <Route path='/ajuda' element={<Help />} />

      {userType === 'aluno' && (
        <>
          {cadastroRealizado ? (
            <Route path='/cadastro-aluno' element={<Navigate to='/inscricoes' />} />
          ) : (
            <Route path='/cadastro-aluno' element={<CadastroAluno />} />
          )}
          <Route path='/inscricoes' element={<Registrations />} />
        </>
      )}

      {userType === 'professor' && (
        <>
          <Route path='/cadastro-vaga' element={<CadastroVagas />} />
          <Route path='/selecoes' element={<Selections />} />
          <Route path='/inscritos' element={<Subscribers />} />
        </>
      )}

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

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  ) : null; 
};
