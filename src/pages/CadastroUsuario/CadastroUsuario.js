import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CadastroUsuario.css";
import logo from "../../images/LOGO.svg";

export function Cadastro() {
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCadastro = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3030/usuario/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, cnpj, email, senha, telefone }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/");
      } else {
        setError(data.message || "Erro desconhecido ao tentar cadastrar.");
      }
    } catch (error) {
      setError("Erro ao conectar com o servidor. Tente novamente.");
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <div className="cadastro-pagina">
      <div className="cadastro-container">
        <div className="cadastro-lado-direito">
          <div className="cadastro-caixa">
            <h2 className="cadastro-titulo">Criar Conta</h2>
            <form onSubmit={handleCadastro}>
              <div className="cadastro-linha">
                <div className="cadastro-grupo-input">
                  <label htmlFor="nome">Nome</label>
                  <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>
                <div className="cadastro-grupo-input">
                  <label htmlFor="cnpj">CNPJ</label>
                  <input type="text" id="cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} required />
                </div>
              </div>
              <div className="cadastro-linha">
                <div className="cadastro-grupo-input">
                  <label htmlFor="telefone">Telefone</label>
                  <input type="text" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                </div>
              </div>
              <div className="cadastro-linha">
                <div className="cadastro-grupo-input">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="cadastro-grupo-input">
                  <label htmlFor="senha">Senha</label>
                  <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                </div>
              </div>
              <div className="cadastro-acoes">
                <button type="submit" className="cadastro-botao">Salvar Cadastro</button>
                <button type="button" className="cadastro-botao voltar" onClick={() => navigate("/")}>Voltar para Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}