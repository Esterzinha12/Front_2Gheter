import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./AnuncioModal.css";

export function AnuncioModal({ anuncio, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
  <button className="modal-close-button" onClick={onClose} aria-label="Fechar modal">
    <FontAwesomeIcon icon={faTimes} />
  </button>

  {anuncio.imagem && (
    <img src={anuncio.imagem} alt={anuncio.titulo} className="modal-image" />
  )}

  <h2 className="modal-title">{anuncio.titulo}</h2>
  <p className="modal-description">{anuncio.descricao}</p>

  <div className="modal-info-group">
    <p><strong>Localização:</strong> {anuncio.localizacao}</p>
    <p><strong>Oferecido por:</strong> {anuncio.oferecidoPor}</p>
    <p><strong>E-mail:</strong> {anuncio.email}</p>
    <p><strong>Telefone:</strong> {anuncio.telefone}</p>
  </div>

  <button className="modal-contact-button">Entrar em contato</button>
</div>
    </div>
  );
}

export default AnuncioModal;
