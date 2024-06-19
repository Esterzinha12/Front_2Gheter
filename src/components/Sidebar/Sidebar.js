import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export function Sidebar() {
  return (
    <>
      <link rel="stylesheet" href="App.css"></link>
      <div class="sidebar" style={{backgroundColor: '#6049E8'}}>
        <ul>
            <li><a><FontAwesomeIcon icon={faBars} size="xl" style={{marginBottom: '7px', marginTop: '7px'}}/></a></li>
            <li><a><FontAwesomeIcon icon={faHouse} size="xl" style={{marginBottom: '7px', marginTop: '7px'}}/></a></li>
            <li><a><FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{marginBottom: '7px', marginTop: '7px'}}/></a></li>
            <li><a><FontAwesomeIcon icon={faSquarePlus} size="xl" style={{marginBottom: '7px', marginTop: '7px'}}/></a></li>
            <li><a><FontAwesomeIcon icon={faFileSignature} size="xl" style={{marginBottom: '7px', marginTop: '7px'}}/></a></li>
            <li><a><FontAwesomeIcon icon={faMessage} size="xl" style={{marginBottom: '7px', marginTop: '7px'}}/></a></li>
            <li><a><FontAwesomeIcon icon={faRightFromBracket} size="xl" style={{marginBottom: '7px', marginTop: '7px'}}/></a></li>
        </ul>
      </div>
    </>
  );
}