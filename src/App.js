import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Inserir from './pages/Inserir';
import Listar from './pages/Listar';
import NavBar from './Components/layout/NavBar';
import Container from "./Components/layout/Container";
import Footer from "./Components/layout/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass = "min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inserir" element={<Inserir />} />
          <Route path="/listar" element={<Listar />} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
