import React from "react";
import styled from "styled-components";
import axios from "axios";
import { base_url } from "../constants";

const TelaInicial = (props) => {


    const pegarPerfil = (aluno) => {
        axios
        .get(base_url)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
   




    return (
        <div>
            <div>
            <h1>AstroMatch</h1>
            <button>Mathcs</button>
            </div>
            <div>

            </div>
            
        </div>
    )

}

export default TelaInicial;

