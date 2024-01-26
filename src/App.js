import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';  // Corrigido
import Inserir from './pages/Inserir';  // Corrigido
import Listar from './pages/Listar';  // Corrigido
import NavBar from './Components/NavBar';

function App() {
  return (
   <Router>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/inserir" element={<Inserir />} />
      <Route exact path="/listar" element={<Listar />} />
    </Routes>
   </Router>
  )
}

export default App;
