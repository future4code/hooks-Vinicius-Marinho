import useListTrips from "../hooks/useListTrips"
import { useNavigate } from "react-router-dom"

const ListTripsPage = () => {
    
    const {tripsName, tripsComponent} = useListTrips()

    const navigate = useNavigate()

    const onClickBack = () =>{
        navigate("/")
    }

    const onClickApplication = () => {
        navigate("/trips/application")
    }

    return(
        <div>
            <button onClick={onClickBack}>Voltar</button>
            <button onClick={onClickApplication}>Increver-se</button>
            <h1>Lista de Viagens</h1>
            {tripsComponent}
        </div>
    )
}
export default ListTripsPage