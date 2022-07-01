import axios from "axios"
import { useEffect } from "react"
import { useProtedPage } from "../hooks/useProtectedPage"

const TripDetailsPage = () => {
    useProtedPage()

    useEffect(()=>{getTripDetail()},[])

    const getTripDetail = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-marinho-hooks/trip/${id}`
    
        const headers = {
            headers: {
                auth : localStorage.getItem("token")
            }
        }

        axios
            .get(url,headers)
            .then((res)=>{
                console.log(res.data)
            })
            .catch((err)=>{console.log(err.data)})
    
    }

    return(
        <div>
           <p>TripDetailsPage</p>
        </div>
    )
}
export default TripDetailsPage