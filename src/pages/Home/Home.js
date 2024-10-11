import React, { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import Card from "../../components/Card/Card"; 
import imagemExemplo from "../../components/Card/imagem.jpg"; 
import './Home.css'; 

export function Home() {
  useEffect(() => {
    
  }, []);

  return (
    <div className="home-body">
      <Navbar /> 
      
      <div className="home-layout"> 
      <Sidebar isHome={true} />
        
        <div className="home-conteudo-principal"> 
          <h1>Lista de Anúncios</h1>
          <div className="home-lista-cards"> 
            <Card
              imagem={imagemExemplo}
              titulo="Título do Anúncio 1"
              descricao="Descrição breve do anúncio 1."
              className="home-card-anuncio"
            />
            <Card
              imagem={imagemExemplo}
              titulo="Título do Anúncio 2"
              descricao="Descrição breve do anúncio 2."
              className="home-card-anuncio"
            />
            <Card
              imagem={imagemExemplo}
              titulo="Título do Anúncio 3"
              descricao="Descrição breve do anúncio 3."
              className="home-card-anuncio"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
