import { Routes, Route, Link } from 'react-router-dom';
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

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/vagas' element={<Vagas />} />
      <Route path='/detalhes' element={<Details />} />
      <Route path='/cadastro-aluno' element={<CadastroAluno />} />
      <Route path='/cadastro-vaga' element={<CadastroVagas />} />
      <Route path='/inscricoes' element={<Registrations />} />
      <Route path='/selecoes' element={<Selections />} />
      <Route path='/ajuda' element={<HelpModal />} />
      <Route path='/inscritos' element={<Subscribers />} />
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
    </Routes>
  )
}