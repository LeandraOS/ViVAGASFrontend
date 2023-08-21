import './App.css';
import { Home } from './pages/Home/Home';
import { AppBar } from './components/AppBar/AppBar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Vagas } from './pages/Vacancy/Vagas';

function App() {
  return (
    <>
    <AppBar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/vagas' element={<Vagas />}/>
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App;
