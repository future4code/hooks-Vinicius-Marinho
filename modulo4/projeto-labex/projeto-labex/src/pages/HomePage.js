import styled from "styled-components"

const ButtonCard = styled.div`
padding: 5px;
justify-content: auto;
`

const HomePage = () => {

    return(
        <div>
            <h1>LABEX VIAGENS</h1>
            <ButtonCard>
            <button>Lista de Viagens</button>
            <button>Área Administrativa</button>
            </ButtonCard>
            
        </div>
    )
}
export default HomePage