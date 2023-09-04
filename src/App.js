import './App.css';
import { Home } from './pages/Home/Home';
import { AppBar } from './components/AppBar/AppBar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Vagas } from './pages/Vacancy/Vagas';
import { Details } from './pages/Details/Details';

function App() {
  return (
    <>
    <AppBar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/vagas' element={<Vagas />}/>
        <Route path='/detalhes' element={<Details />}/>

      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App;
