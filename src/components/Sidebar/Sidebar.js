import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars, faMagnifyingGlass, faSquarePlus, faFileSignature, faMessage, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

export function Sidebar({ isHome }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`barra-lateral ${isExpanded ? 'expanded' : ''}`}>
      <ul>
        <li>
          <a href="#" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} size="xl" className="icone" />
          </a>
        </li>
        <li>
          <a href="#" className={isHome ? 'active' : ''}>
            <FontAwesomeIcon icon={faHouse} size="xl" className={`icone ${isHome ? 'hover' : ''}`} />
            {isExpanded && <span className="tab-name">Home</span>}
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faSquarePlus} size="xl" className="icone" />
            {isExpanded && <span className="tab-name">Meus anúncios</span>}
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faFileSignature} size="xl" className="icone" />
            {isExpanded && <span className="tab-name">Contratos</span>}
          </a>
        </li>
      </ul>
      <div className="logout-container">
        <a href="#">
          <FontAwesomeIcon icon={faRightFromBracket} size="xl" className="icone" />
          {isExpanded && <span className="tab-name">Sair</span>}
        </a>
      </div>
    </div>
  );
}
