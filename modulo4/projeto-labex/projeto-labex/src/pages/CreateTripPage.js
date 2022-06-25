import { useNavigate } from "react-router-dom"
import { useProtedPage } from "../hooks/useProtectedPage"
import useForm from "../hooks/useForm"

const CreateTripPage = () => {
    useProtedPage()

    const {form, onChange, cleanFields} = useForm({nome: "", planeta: "", data:"", descrição:"", duração:""})

    const navigate=useNavigate()

    const onClickBack=()=>{
        navigate("/admin/trips/list")
    }

    const onClickCrateTrip=(event)=>{
        event.preventDefault()

        console.log("Formulário enviado!", form);
        cleanFields();
    }

    return(
        <div>
           <h1>Criar Viagem </h1>
           <form onSubmit={onClickCrateTrip}>
                <input
                    name={"nome"}
                    value={form.nome}
                    onChange={onChange}
                    placeholder="Nome"
                    required
                    type={Text}
                    pattern={"^.{5,}"}
                    title={"O nome deve ter no mínimo 5 letras"}
                />
                <select>
                    <option>Mercúrio</option>
                    <option>Vênus</option>
                    <option>Terra</option>
                    <option>Marte</option>
                    <option>Júpter</option>
                    <option>Saturno</option>
                    <option>Urano</option>
                    <option>Netuno</option>                    
                </select>
                <input
                    name={"data"}
                    value={form.data}
                    onChange={onChange}
                    placeholder="Data"
                    required
                    type={"date"}
                />
                <input
                    name={"descrição"}
                    value={form.descrição}
                    onChange={onChange}
                    placeholder="Descrição"
                    required
                    type={Text}
                    pattern={"^.{30,}"}
                    title={"A descrição deve ter no mínimo 30 letras"}
                />
                <input
                    name={"duração"}
                    value={form.duração}
                    onChange={onChange}
                    placeholder="Duração em Dias"
                    required
                    type={'number'}
                    pattern={"^.{50,}"}
                    title={"A viagem deve durar no mínimo 50 dias"}
                />
                <button>Criar</button>
           </form>
           <button onClick={onClickBack}>Voltar</button>
        </div>
    )
}
export default CreateTripPage