import React from "react";
import axios from "axios";
import styled from "styled-components"

const CardPlaylist = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display:flex;
    justify-content: space-between;
`

export default class TelaLista  extends React.Component {
    state = {
        listaPlaylists: []
    }

    componentDidMount () {
        this.pegarPlaylists()
    }

    pegarPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        
        const headers = {
            headers: {
                Authorization: "pedro-saldanha-hooks"
            }
        }
   
        axios
            .get(url, headers)
            .then((response) => {
                this.setState({listaPlaylists: response.date})
            })
            .catch((error)=>{
                alert("Algo deu errado!")
            })
   
    }
    
    deletarPlaylist = (id) => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}"

        const headers = {
            headers: {
                Authorization: "vinicius-marinho-hooks"
            }
        }

        axios
            .delete(url, headers)
            .then((response)=> {
                alert("Usuário deletado com sucesso")
                this.pegarPlaylists()
            })
            .catch((error)=>{
                alert(error.response.data.message)
            })

    }

    render(){
        const usuarios = this.state.listaPlaylists.map((usuario)=>{
            return (
                <CardPlaylist key={usuario.id}>
                    {usuario.name}
                    <button onClick={()=> this.deletarPlaylist(usuario.id)}>X</button>
                </CardPlaylist>
            )
        })

        return(
            <div>
                <button onClick={this.props.isParaCadastro}>Ir Para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {usuarios}
            </div>

        )
    }
}

