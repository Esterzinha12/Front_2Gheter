import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './Login.css'; 
import logo from '../../images/LOGO.svg'; 

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/usuario/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("usuario", JSON.stringify(data));
        navigate("/home");
      } else {
        setError(data.message || "Erro desconhecido ao tentar login.");
      }
    } catch (error) {
      setError("Erro ao conectar com o servidor. Tente novamente.");
      console.error("Erro na requisição:", error);
    }
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="login-grupo-input">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
                <a href="#" className="login-senha-esquecida">Esqueceu a senha?</a>
              </div>
              <div className="login-acoes">
                <button type="submit" className="login-botao">Entrar</button>
                <button className="login-link-cadastrar" onClick={() => navigate("/cadastroUsuario")}>Cadastrar-se</button>
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