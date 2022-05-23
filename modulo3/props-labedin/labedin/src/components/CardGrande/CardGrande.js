import React from 'react';
import './CardGrande.css'
import styled from 'styled-components';

const ContainerCardGrande = styled.div`
display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const TamnhoImagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const Nome = styled.h4`
margin-bottom: 15px;
`

const ContainerDados = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <ContainerCardGrande>
            <TamnhoImagem src={ props.imagem } />
            <ContainerDados>
                <Nome>{ props.nome }</Nome>
                <p>{ props.descricao }</p>
            </ContainerDados>
        </ContainerCardGrande>
    )
}

export default CardGrande;