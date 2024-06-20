import React, { useState, useEffect } from "react";
import {Navbar} from "../../components/Navbar";
import {Sidebar} from "../../components/Sidebar";
import axios from "axios";
import Card from "../../components/Card/Card";
import imagemExemplo from "../../components/Card/imagem.jpg";

export function Home() {
// const [pokemon, setPokemon] = useState([]);

useEffect(() => {
  // const fetchPokemon = async () => {
  //   try {
  //     const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
  //     setPokemon(response.data.results);
  //     console.log(pokemon);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // fetchPokemon();
}, []);

  return (
    <div>
      <Navbar/>
      <div >
        <Sidebar/>
      </div>
      <div>
      <div className="conteudo-principal">
        <h1>Lista de Anúncios</h1>
        <Card
          imagem={imagemExemplo}
          titulo="Título do Anúncio 1"
          descricao="Descrição breve do anúncio 1."
        />
        <Card
          imagem={imagemExemplo}
          titulo="Título do Anúncio 2"
          descricao="Descrição breve do anúncio 2."
        />
        <Card
          imagem={imagemExemplo}
          titulo="Título do Anúncio 3"
          descricao="Descrição breve do anúncio 3."
        />
      </div>
    </div>
    </div>
  );
}
