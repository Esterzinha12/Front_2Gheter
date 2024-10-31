import React, { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import Card from "../../components/Card/Card"; 
import imagemExemplo from "../../components/Card/imagem.jpg"; 
import './MeusAnuncios.css'; 

export function MeusAnuncios() {
  useEffect(() => {
  }, []);

  return (
    <div className="body">
      <Navbar /> 
      
      <div className="layout"> 
        <Sidebar isHome={true} />
        
        <div className="conteudo-principal"> 
          <div className="header">
            <h1>Meus anúncios</h1>
            <button className="anunciar-button">Anunciar</button>
          </div>
          
          <div className="lista-cards"> 
            <Card
              imagem={imagemExemplo}
              titulo="Título do Anúncio 1"
              descricao="Descrição breve do anúncio 1."
              className="card-anuncio"
            />
            <Card
              imagem={imagemExemplo}
              titulo="Título do Anúncio 2"
              descricao="Descrição breve do anúncio 2."
              className="card-anuncio"
            />
            <Card
              imagem={imagemExemplo}
              titulo="Título do Anúncio 3"
              descricao="Descrição breve do anúncio 3."
              className="card-anuncio"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
