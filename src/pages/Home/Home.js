import React, { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import Card from "../../components/Card/Card";
import { AnuncioModal } from "../../components/AnuncioModal/AnuncioModal";
import imagemExemplo from "../../components/Card/imagem.jpg";
import "./Home.css";
import "@fontsource/inter";
import axios from "axios";

export function Home() {
  const [modalAberto, setModalAberto] = useState(false);
  const [anuncioSelecionado, setAnuncioSelecionado] = useState(null);
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/anuncio/buscar-todos") 
      .then((res) => {
        setAnuncios(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar anúncios:", err);
      });
  }, []);

  const abrirModal = (anuncio) => {
    axios
      .get(`http://localhost:3030/anuncio/buscar/${anuncio.id}`)
      .then((res) => {
        setAnuncioSelecionado(res.data);
        setModalAberto(true);
      })
      .catch((err) => {
        console.error("Erro ao buscar anúncio:", err);
      });
  };

  const fecharModal = () => {
    setModalAberto(false);
    setAnuncioSelecionado(null);
  };

  return (
    <div className="home-body">
      <Navbar />
      <div className="home-layout">
        <Sidebar isHome={true} />
        <div className="home-conteudo-principal">
          <h1 style={{ fontFamily: 'Inter, sans-serif' }}>Lista de Anúncios</h1>
          <div className="home-lista-cards">
            {anuncios.map((anuncio) => (
              <Card
                key={anuncio.id}
                imagem={imagemExemplo}
                titulo={anuncio.titulo}
                descricao={anuncio.descricao}
                onVerMaisClick={() => abrirModal(anuncio)}
              />
            ))}
          </div>
        </div>
      </div>
      <AnuncioModal anuncio={anuncioSelecionado} isOpen={modalAberto} onClose={fecharModal} />
    </div>
  );
}
