import React from "react";
import axios from "axios";

export default class TelaCadastro extends React.Component {
    state = {
        namePlaylist: ""
    }

    onChangeNamePlaylist = (event) =>{
        this.setState({ namePlaylist: event.target.value })
    }

    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        const headers = {
            headers: {
                Authorization: "vinicius-marinho-hooks"
            }
        }

        const body = {
            name: this.state.namePlaylist
        }

        axios.post(url, body, headers)
            .then((response)=>{
                alert("Playlist criada com sucesso")
                this.setState({ namePlaylist: "" })
            })
            .catch((error) =>{
                alert(error.response.data.message)
                this.setState({ namePlaylist: "" })
            })
    }

    render () {
        return (
            <div>
                <button onClick={this.props.irParaLista}>Ir Para Lista</button>
                <h2>Cadastro</h2>
                <input
                placeholder="Nome Playlist"
                value={this.state.namePlaylist}
                onChange={this.onChangeNamePlaylist}
                />
                <button onClick={this.criarPlaylist}>Cadastrar</button>

            </div>
        )
    }
}