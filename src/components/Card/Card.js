import React from "react";
import './Card.css'; 

function Card(props) {
  return (
    <div className="card-anuncio">
      <div className="foto-anuncio">
        <img src={props.imagem} alt="Anúncio" />
      </div>
      <div className="descricao-anuncio">
        <h2>{props.titulo}</h2>
        <p>{props.descricao}</p>
        <button>Ver mais</button>
      </div>
    </div>
  );
}

export default Card;

