import React from "react";
import TelaCadastro from "./components/TelaCadastro";
import TelaLista from "./components/TelaLista";

class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  };

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  escolhaTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return  <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaLista irParaCadastro={this.irParaCadastro}/>  
      default:
        return <p>Erro! Página não encontrada</p>
    }
  }

  render() {
    return (
      <div>
        {this.escolhaTela()}
      </div>
    )
  }
}

export default App;