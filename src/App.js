import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AppBar } from './components/AppBar/AppBar'

import { AuthGoogleProvider } from './contexts/authGoogle';
import { AppRoutes } from './routes/routes';
import { Home } from './pages/Home/Home';
import { HelpModal } from './modals/TextImg/TextImg';

function App() {
  return (

    <BrowserRouter>
      <AuthGoogleProvider>
        <AppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ajuda' element={<HelpModal />} />
        </Routes>
        <AppRoutes />
      </AuthGoogleProvider>
    </BrowserRouter>

  )
}

export default App;
