import React, { useState } from "react";
import styled from "styled-components";
import TelaInicial from "./components/TelaInicial";
import TelaDeMatchs from "./components/TelaDeMatchs";

const App = () => {

  const [telaAtual, setTelatual] = useState("paginaInicial") // "paginaDeMatchs"

  const exibirPagina = () => {
    if (telaAtual === "paginaInicial"){
      return <TelaInicial/>
    } else if(telaAtual === "paginaDeMatchs"){
      return <TelaDeMatchs/>
    }
  }

  const mudarPagina = (telaAtualTexto) => {
    setTelatual(telaAtualTexto)
  }

  return (
    <div>
      
      {exibirPagina()}

    </div>
  );
}

export default App;
