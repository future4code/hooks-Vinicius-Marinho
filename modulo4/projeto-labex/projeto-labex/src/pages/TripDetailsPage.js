import { useProtedPage } from "../hooks/useProtectedPage"

const TripDetailsPage = () => {
    useProtedPage()

    return(
        <div>
           <p>TripDetailsPage</p>
        </div>
    )
}
export default TripDetailsPage