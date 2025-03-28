import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { MeusAnuncios } from "./pages/MeusAnuncios/MeusAnuncios";
import { Cadastro } from "./pages/CadastroUsuario/CadastroUsuario.js";

function App() {
  return (
   <Router>
    <Routes>
      <Route path ="/" element={<Login />} />
      <Route path ="/home" element={<Home />} />
      <Route path ="/meus-anuncios" element={<MeusAnuncios />} />
      <Route path="/cadastroUsuario" element={<Cadastro />} />
    </Routes>
   </Router>
  );
}

export default App;
