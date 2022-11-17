import { Route, Routes } from 'react-router-dom';
import Connexion from './pages/Connexion';
import Home from './pages/Home';
import Inscription from './pages/Inscription';
import Pr from './pages/Pr';
import Question from './pages/Question';


function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/connexion' element={ <Connexion /> } />
      <Route path='/inscription' element={ <Inscription /> } />
      <Route path='/question' element={ <Question /> } />
      <Route path='/pr' element={ <Pr /> } />
    </Routes>
  );
}

export default App;
