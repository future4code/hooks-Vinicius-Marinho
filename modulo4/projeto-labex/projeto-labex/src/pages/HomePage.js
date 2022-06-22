import styled from "styled-components"
import {useNavigate} from "react-router-dom"

const ButtonCard = styled.div`
padding: 5px;
justify-content: auto;
`

const HomePage = () => {

    const navigate = useNavigate()

    const goToListTrips = () => {
        navigate("trips/list")
    }

    const token = localStorage.getItem("token")
    
    const goToAdminHomePage = () => {
        if( !token ){
            navigate("/login")
        } else {
            navigate("/admin/trips/list")
        }
        
        
    }

    return(
        <div>
            <h1>LABEX VIAGENS</h1>
            <ButtonCard>
            <button onClick={goToListTrips}>Lista de Viagens</button>
            <button onClick={goToAdminHomePage}>Área Administrativa</button>
            </ButtonCard>
            
        </div>
    )
}
export default HomePage