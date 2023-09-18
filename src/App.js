import './App.css';
import { AppBar } from './components/AppBar/AppBar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Vagas } from './pages/Vacancy/Vagas';
import { Details } from './pages/Details/Details';
import Cadastro from './pages/Cadastro/Cadastro';
import { ButtonCustom } from './components/Button/Button';
import { Registrations } from './pages/Registrations/Registrations';
import { Selections } from './pages/Selections/Selections';

function App() {
  return (
    <>
      <AppBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/vagas' element={<Vagas />} />
          <Route path='/detalhes' element={<Details />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/inscricoes' element={<Registrations />} />
          <Route path='/selecoes' element={<Selections />} />




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
      </BrowserRouter>
    </>
  )
}

export default App;
