import React from "react";
import axios from "axios";
import styled from "styled-components"

const ContainerPlaylist = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display:flex;
    width: 30%;
    justify-content: space-between;
    flex-direction: column;
`
const CardPlaylist = styled.div`
justify-content: space-between;
padding: 3px;
margin: 5px;
display: flex;
`

const ContainerMusicas = styled.div`
border: 2px solid black;
width: 30%;
margin: 10px;
padding: 5px;
text-align: left;
`

const Musicas = styled.div`
border:1px solid black;
display: flex;
text-align: right;
`


const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
    headers: {
        Authorization: "vinicius-marinho-hooks"
    }
}


export default class TelaLista extends React.Component {

    state ={
        listaPlaylists: [],
        detalhePlaylist: [],
        nameMusic: "",
        artist: "",
        number:""
    }

    onChangeNameMusic = (event) => {
        this.setState({ nameMusic: event.target.value })
    }

    onChangeArtist = (event) => {
        this.setState({ artist: event.target.value})
    }

    onChangeNumber = (event) => {
        this.setState({ number: event.target.value})
    }

    componentDidMount(){
        this.pegarPlaylist()
    }

    pegarPlaylist = () => {
        axios.get(url, headers)
            .then((response) => {
                this.setState({ listaPlaylists: response.data.result.list })
            })
            .catch((error) => {
                alert("Algo deu errado!")
            })
    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        
        axios.delete(url, headers)
            .then((response) => {
                alert("Playlist deletada com sucesso")
                this.pegarPlaylist()
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    detalhePlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        axios.get(url, headers)
            .then((response)=>{
                this.setState({ detalhePlaylist: response.data.result.tracks })
                               
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    adicionarTrack = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        const body = {
            name: this.state.nameMusic,
            artist: this.state.artist,
            url: `http://spoti4.future4.com.br/${this.state.number}.mp3`
        }

        axios.post(url, body,  headers)
            .then((response) =>{
                alert("Música adicionada com sucesso!")
                this.setState({ nameMusica: "", artist: "", number: ""})
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    
    render() {
        const playlists = this.state.listaPlaylists.map((playlist) => {
            return (
                <ContainerPlaylist key={playlist.id}>
                    <CardPlaylist>
                        {playlist.name}
                        <button onClick={() => this.deletarPlaylist(playlist.id)}>Excluir Playlist</button>
                    </CardPlaylist>
                    <div>
                        <button onClick={() => this.detalhePlaylist(playlist.id)}>Detalhes</button>
                        <input
                        placeholder="Nome música"
                        value={this.state.nameMusic}
                        onChange={this.onChangeNameMusic}
                        />
                        <input
                        placeholder="Artista"
                        value={this.state.artist}
                        onChange={this.onChangeArtist}
                        />
                        <input
                        placeholder="Número da Música"
                        value={this.state.number}
                        onChange={this.onChangeNumber}
                        />
                        <button onClick={() => this.adicionarTrack(playlist.id)}>Adicionar Música</button>
                    </div>
                </ContainerPlaylist>
            )
        })

        const tracks = this.state.detalhePlaylist.map((track) => {
            return (
                <Musicas>
                    <ul>{track.name}</ul>
                    <ul>{track.artist}</ul>
                </Musicas>
            )
        })
       
        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir Para Cadastro</button>
                <h2>Lista de Playlists</h2>
                {playlists}
              <ContainerMusicas>
                <h2>Músicas</h2>
                {tracks}
              </ContainerMusicas>  
                
            </div>
        )
    }

}