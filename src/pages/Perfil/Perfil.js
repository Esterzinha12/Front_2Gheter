import React from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import "./Perfil.css";
import { FaUserCircle } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";


export function Perfil() {
  return (
    <div className="body">
      <Navbar />
      <div className="layout">
        <Sidebar isHome={false} />
        <div className="conteudo-principal perfil-container">
          <div className="perfil-header">
            <FaUserCircle className="perfil-avatar" />
            <div className="perfil-nome-container">
              <h1 className="perfil-nome">EFG PINTURAS</h1>
              <FiEdit2 className="perfil-edit-icon" />
            </div>
            <div className="perfil-cnpj">
              <label>CNPJ</label>
              <input type="text" value="40028922000196" disabled />
            </div>
          </div>


          <div className="perfil-form">
            <div className="perfil-campo">
              <label>Login</label>
              <input type="text" value="efgpinturas@gmail.com" disabled />
              <button className="btn-acao">Alterar senha</button>
            </div>


            <div className="perfil-campo">
              <label>Localização</label>
              <input type="text" value="Av. Pref. Waldemar Grubba, 3300, Vila..." disabled />
            </div>


            <div className="perfil-campo">
              <label>Telefone</label>
              <input type="text" value="(47) 3276-4000" disabled />
            </div>


            <div className="perfil-campo">
              <label>Prestador</label>
              <input type="text" value="É PRESTADOR" disabled />
              <button className="btn-acao">Alterar descrição</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
