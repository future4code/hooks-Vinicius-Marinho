import axios from "axios"
import { useNavigate } from "react-router-dom"

const ListTripsPage = () => {

    const navigate = useNavigate()

    const onClickBack = () =>{
        navigate("/")
    }

    const onClickApplication = () => {
        navigate("/trips/application")
    }

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-marinho-hooks/trips"

    axios
        .get(url)
        .then((res) => {
            console.log(res.data.trips)
        })
        .catch((err) => console.log(err))

   

    return(
        <div>
            <button onClick={onClickBack}>Voltar</button>
            <button onClick={onClickApplication}>Increver-se</button>
           <p>ListTripsPage</p>
        </div>
    )
}
export default ListTripsPage