import axios from "axios";
import React from "react";

export default class TelaCadastro extends React.Component{
    state = {
        name: "",
    }

    pegarNome = (event) => {
        this.setState({name: event.target.value})
    }

    criarPlaylist = () => {

        const urlPlaylists =
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
 
        const body = {
            name: this.state.name,
        }

        const headers = {
            headers: {
                 Authorization: "vinicius-marinho-hooks"
             }
        };

        axios.post(urlPlaylists, body, headers)
            .them((response) => {
                alert("Usuário criado com sucesso")
                 this.setState({name: ""})
             })
            .catch((error)=> {
                alert(error.response.data.message)
                this.setState({name: ""})
            })
    }

    render(){
     return (
        <div>
            <button onClick={this.props.irParaLista}>Ir Para Lista</button>
            <h2>Cadastro</h2>
            <input
                placeholder="Playlist"
                value={this.state.name}
                onChange={this.pegarNome}
            />
            <button onClick={this.criarPlaylist}>Criar Playlist</button>
        </div>
     )
    }   
}