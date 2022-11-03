import { Route, Routes } from 'react-router-dom';
import Connexion from './pages/Connexion';
import Home from './pages/Home';
import Inscription from './pages/Inscription';


function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/connexion' element={ <Connexion /> } />
      <Route path='/inscription' element={ <Inscription /> } />
    </Routes>
  );
}

export default App;
