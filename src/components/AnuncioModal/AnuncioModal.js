import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./AnuncioModal.css";

export function AnuncioModal({ anuncio, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2>{anuncio.titulo}</h2>
        <p>{anuncio.descricao}</p>

        <div className="modal-info">
          <strong>Localização:</strong> {anuncio.localizacao}
        </div>
        <div className="modal-info">
          <strong>Oferecido por:</strong> {anuncio.oferecidoPor}
        </div>
        <div className="modal-info">
          <strong>E-mail:</strong> {anuncio.email}
        </div>
        <div className="modal-info">
          <strong>Telefone:</strong> {anuncio.telefone}
        </div>

        <button className="modal-contact">Entrar em contato</button>
      </div>
    </div>
  );
}
export default AnuncioModal;