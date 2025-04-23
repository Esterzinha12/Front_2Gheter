import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import Card from "../../components/Card/Card";
import CadastrarAnuncioModal from "../../components/CadastrarAnuncioModal/CadastrarAnuncioModal";
import imagemExemplo from "../../components/Card/imagem.jpg";
import "./MeusAnuncios.css";

export function MeusAnuncios() {
  const [modalVisivel, setModalVisivel] = useState(false);

  const abrirModal = () => {
    console.log("Abrindo modal..."); 
    setModalVisivel(true);
  };

  const fecharModal = () => {
    console.log("Fechando modal..."); 
  };

  return (
    <div className="body">
      <Navbar />
      <div className="layout">
        <Sidebar isHome={false} />
        <div className="conteudo-principal">
          <div className="header">
          <h1 style={{ fontFamily: 'Inter, sans-serif' }}>Meus Anúncios</h1>
            <button className="anunciar-button" onClick={abrirModal} type="button">
              Anunciar
            </button>
          </div>
          <div className="lista-cards">
            <Card imagem={imagemExemplo} titulo="Título do Anúncio 1" descricao="Descrição breve do anúncio 1." className="card-anuncio" />
          </div>
        </div>
      </div>
      <CadastrarAnuncioModal visible={modalVisivel} onClose={fecharModal} />
    </div>
  );
}