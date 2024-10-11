import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './Login.css'; 
import logo from '../../images/LOGO.svg'; 

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <div className="login-pagina">
      <div className="login-container">
        <div className="login-lado-esquerdo">
          <div className="login-container-logo">
            <img src={logo} alt="Logo" className="login-logo-nav" />
          </div>
          <div className="login-caixa">
            <form onSubmit={handleLogin}>
              <h2 className="login-titulo">Bem-vindo</h2>
              <div className="login-grupo-input">
                <label htmlFor="username">Usuário</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="login-grupo-input">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <a href="#" className="login-senha-esquecida">Esqueceu a senha?</a>
              </div>
              <div className="login-acoes">
                <button type="submit" className="login-botao">Entrar</button>
                <a href="#" className="login-link-cadastrar">Cadastrar-se</a>
              </div>
            </form>
          </div>
        </div>
        <div className="login-container-slogan">
          <p className="login-texto-slogan">Unindo Necessidades, Concretizando Parcerias.</p>
        </div>
      </div>
    </div>
  );
}
