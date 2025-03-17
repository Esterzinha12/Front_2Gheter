import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars, faPlus, faFile, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './Sidebar.css';

export function Sidebar({ activePage }) {
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
          <Link to="/home" className={activePage === "home" ? 'active' : ''}>
            <FontAwesomeIcon icon={faHouse} size="xl" className={`icone ${activePage === "home" ? 'hover' : ''}`} />
            {isExpanded && <span className="tab-name">Home</span>}
          </Link>
        </li>
        <li>
          <Link to="/meus-anuncios" className={activePage === "meus-anuncios" ? 'active' : ''}>
            <FontAwesomeIcon icon={faPlus} size="xl" className={`icone ${activePage === "meus-anuncios" ? 'hover' : ''}`} />
            {isExpanded && <span className="tab-name">Meus anúncios</span>}
          </Link>
        </li>
        <li>
          <Link to="/contratos" className={activePage === "contratos" ? 'active' : ''}>
            <FontAwesomeIcon icon={faFile} size="xl" className={`icone ${activePage === "contratos" ? 'hover' : ''}`} />
            {isExpanded && <span className="tab-name">Contratos</span>}
          </Link>
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
