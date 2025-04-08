import React, { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import Card from "../../components/Card/Card";
import { AnuncioModal } from "../../components/AnuncioModal/AnuncioModal";
import imagemExemplo from "../../components/Card/imagem.jpg";
import "./Home.css";

export function Home() {
  const [modalAberto, setModalAberto] = useState(false);
  const [anuncioSelecionado, setAnuncioSelecionado] = useState(null);

  const abrirModal = (anuncio) => {
    setAnuncioSelecionado(anuncio);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setAnuncioSelecionado(null);
  };

  const anuncios = [
    { id: 1, imagem: imagemExemplo, titulo: "Título do Anúncio 1", descricao: "Descrição breve do anúncio 1." },
    { id: 2, imagem: imagemExemplo, titulo: "Título do Anúncio 2", descricao: "Descrição breve do anúncio 2." },
    { id: 3, imagem: imagemExemplo, titulo: "Título do Anúncio 3", descricao: "Descrição breve do anúncio 3." },
  ];

  return (
    <div className="home-body">
      <Navbar />
      <div className="home-layout">
        <Sidebar isHome={true} />
        <div className="home-conteudo-principal">
          <h1>Lista de Anúncios</h1>
          <div className="home-lista-cards">
            {anuncios.map((anuncio) => (
              <Card
                key={anuncio.id}
                imagem={anuncio.imagem}
                titulo={anuncio.titulo}
                descricao={anuncio.descricao}
                onVerMaisClick={() => abrirModal(anuncio)}
              />
            ))}
          </div>
        </div>
      </div>

      {modalAberto && (
        <AnuncioModal anuncio={anuncioSelecionado} onClose={fecharModal} />
      )}
    </div>
  );
}
