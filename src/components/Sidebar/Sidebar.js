import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars, faMagnifyingGlass, faSquarePlus, faFileSignature, faMessage, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

export function Sidebar({ isHome }) {
  return (
    <div className="barra-lateral">
      <ul>
        <li><a href="#"><FontAwesomeIcon icon={faBars} size="xl" className="icone" /></a></li>
        <li>
          <a href="#" className={isHome ? 'active' : ''}>
            <FontAwesomeIcon icon={faHouse} size="xl" className={`icone ${isHome ? 'hover' : ''}`} />
          </a>
        </li>
        <li><a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className="icone" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquarePlus} size="xl" className="icone" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faFileSignature} size="xl" className="icone" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faMessage} size="xl" className="icone" /></a></li>
      </ul>
      <div className="logout-container">
        <a href="#"><FontAwesomeIcon icon={faRightFromBracket} size="xl" className="icone icone-logout" /></a>
      </div>
    </div>
  );
}
