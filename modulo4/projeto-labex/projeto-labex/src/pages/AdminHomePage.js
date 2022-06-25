import { useNavigate } from "react-router-dom"
import { useProtedPage } from "../hooks/useProtectedPage"
import useListTrips from "../hooks/useListTrips"



const AdminHomePage = () => {
    useProtedPage()

    const {tripsName, tripsComponent} = useListTrips()

    const navigate = useNavigate()

    const onClickBack=()=>{
        navigate("/")
    }

    const onClickCriateTrip=()=>{
        navigate("/admin/trips/create")
    }

    const onClickLogout=()=>{
        localStorage.setItem("token", "")
        navigate("/login")

    }

     
    return(
        <div>
            <button onClick={onClickBack}>Voltar</button>
            <button onClick={onClickCriateTrip}>Criar Viagem</button>
            <button onClick={onClickLogout}>Logout</button>
           <div>
            {tripsName}
           </div>
           
        </div>
    )
}
export default AdminHomePage