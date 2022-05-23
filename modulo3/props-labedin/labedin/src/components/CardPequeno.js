import React from "react";
import "./CardPequeno.css"
import styled from 'styled-components';

const ContainerCardPequeno = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    padding: 5px 5px;
    margin-bottom: 10px;
    height: 100px;
    `

const TamnhoImagem = styled.img`
    width: 50px;
    height: 50px;
    padding: 5px;
`

function CardPequeno(props) {
    return (
        <ContainerCardPequeno>
            <TamnhoImagem src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </ContainerCardPequeno>
    )
}

export default CardPequeno;