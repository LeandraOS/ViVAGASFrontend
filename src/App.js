import './App.css';
import { AppBar } from './components/AppBar/AppBar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Vagas } from './pages/Vacancy/Vagas';
import { Details } from './pages/Details/Details';
import Cadastro from './pages/Cadastro/Cadastro';
import { ButtonCustom } from './components/Button/Button';

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
