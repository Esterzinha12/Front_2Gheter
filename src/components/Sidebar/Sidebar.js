import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars, faMagnifyingGlass, faSquarePlus, faFileSignature, faMessage, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

export function Sidebar() {
  return (
    <div className="barra-lateral">
      <ul>
        <li><a href="#"><FontAwesomeIcon icon={faBars} size="xl" className="icone" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faHouse} size="xl" className="icone" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className="icone" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquarePlus} size="xl" className="icone" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faFileSignature} size="xl" className="icone" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faMessage} size="xl" className="icone" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faRightFromBracket} size="xl" className="icone icone-logout" /></a></li>
      </ul>
    </div>
  );
}
