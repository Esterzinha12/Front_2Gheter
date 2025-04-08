import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import "./Contratos.css";

export function Contratos() {
  const [contratos, setContratos] = useState([
    { id: 1, nome: "contrato_weg_07-23" },
    { id: 2, nome: "contrato_prefeitura_04-23" },
    { id: 3, nome: "contrato_duasRodas_01-23" },
  ]);

  return (
    <div className="body">
      <Navbar />
      <div className="layout">
        <Sidebar isHome={false} />
        <div className="conteudo-principal">
          <div className="header">
            <h1>Contratos</h1>
            <button className="adicionar-button" type="button">
              + Adicionar
            </button>
          </div>
          <table className="tabela-contratos">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {contratos.map((contrato) => (
                <tr key={contrato.id}>
                  <td>{contrato.nome}</td>
                  <td className="acoes">
                    <FontAwesomeIcon icon={faEye} className="icone visualizar" />
                    <FontAwesomeIcon icon={faTrash} className="icone excluir" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}