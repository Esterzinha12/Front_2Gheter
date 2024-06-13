import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../Navbar/LOGO.svg'

export function Navbar() {
  return (
    <>
      <nav style={{backgroundColor: '#6049E8', height: 75}}>
        <div class="nav-wrapper" style={{margin: '0px 30px 0px 30px', display: 'flex'}}>
          <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto', margin: '10px 350px 0px 0px'}} />
          <nav style={{backgroundColor: '#6049E8', borderRadius: '50px', width: '40%', margin: '0px 425px 0px 0px'}}>
            <div class="nav-wrapper">
              <form>
                <div class="input-field" style={{backgroundColor: 'white', borderRadius: '50px', margin: '5px 0px 0px 0px'}}>
                  <input id="search" type="search" placeholder="Pesquisar anúncios"></input>
                  <i class="material-icons">x</i>
                </div>
              </form>
            </div>
          </nav>
          <ul id="nav-mobile" class="right hide-on-med-and-down" style={{margin: '5px 0px 0px 0px'}}>
            <li>
              <a href="/home">Olá usuário</a>
            </li>
            <FontAwesomeIcon icon={faUser} />
          </ul>
        </div>
      </nav>
    </>
  );
}
