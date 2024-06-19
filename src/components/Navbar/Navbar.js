import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTimes } from '@fortawesome/free-solid-svg-icons'; 
import logo from '../Navbar/LOGO.svg';
import './Navbar.css';

export function Navbar() {
  return (
    <nav className="barra-navegacao">
      <div className="conteudo-nav">
        <img src={logo} alt="Logo" className="logo-nav" />
        <div className="caixa-pesquisa">
          <form>
            <div className="campo-pesquisa">
              <input type="search" placeholder="Pesquisar anúncios" style= {{margin: '0px'}} />
              <FontAwesomeIcon icon={faTimes} className="icone-fechar" /> 
            </div>

          </form>
        </div>
        <ul className="menu-direita">
          <li>
            <a href="/home">Olá usuário</a>
          </li>
          <FontAwesomeIcon icon={faUser} className="icone-usuario" />
        </ul>
      </div>
    </nav>
  );
}

