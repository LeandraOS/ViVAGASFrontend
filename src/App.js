import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppBar } from './components/AppBar/AppBar'

import { AuthGoogleProvider } from './contexts/authGoogle';
import { AppRoutes } from './routes/routes';

function App() {
  return (

    <AuthGoogleProvider>
      <BrowserRouter>
        <AppBar />
        <AppRoutes />
      </BrowserRouter>
    </AuthGoogleProvider>

  )
}

export default App;
