import { useNavigate } from "react-router-dom"

const ApplicationFormPage = () => {

    const navigate = useNavigate()

    const onClickBack = () =>{
        navigate("/trips/list")
    }

    return(
        <div>
           <p>ApplicationFormPage</p>
           <button onClick={onClickBack}>Voltar</button>
           <button>Enviar</button>
        </div>
    )
}
export default ApplicationFormPage