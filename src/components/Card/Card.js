import React from "react";
import "./Card.css";

function Card({ imagem, titulo, descricao, onVerMaisClick }) {
  return (
    <div className="card-anuncio">
      <div className="foto-anuncio">
        <img src={imagem} alt="Anúncio" />
      </div>
      <div className="descricao-anuncio">
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        <button onClick={onVerMaisClick}>Ver mais</button>
      </div>
    </div>
  );
}

export default Card;
