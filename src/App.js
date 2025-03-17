import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { MeusAnuncios } from "./pages/MeusAnuncios/MeusAnuncios";

function App() {
  return (
   <Router>
    <Routes>
      <Route path ="/" element={<Login />} />
      <Route path ="/home" element={<Home />} />
      <Route path ="/meus-anuncios" element={<MeusAnuncios />} />
    </Routes>
   </Router>
  );
}

export default App;
