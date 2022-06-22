import { useNavigate } from "react-router-dom"
import { useProtedPage } from "../hooks/useProtectedPage"

const CreateTripPage = () => {

    useProtedPage()

    const navigate=useNavigate()

    const onClickBack=()=>{
        navigate("/admin/trips/list")
    }

    const onClickCrateTrip=()=>{
        
    }

    return(
        <div>
           <p>CreateTripPage</p>
           <button onClick={onClickBack}>Voltar</button>
           <button onClick={onClickCrateTrip}>Criar</button>
        </div>
    )
}
export default CreateTripPage