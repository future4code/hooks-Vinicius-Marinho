import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm"

const LoginPage = () => {
    const navigate=useNavigate()
   
    const {form, onChange, cleanFields} = useForm({email: "", password: ""})

    const onClickBack =()=>{
    navigate("/")
    }

    const onSubmitLogin = (event) =>{
        event.preventDefault()
        
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-marinho-hooks/login"
    
        axios
            .post(url,form)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                navigate("/admin/trips/list")
                cleanFields()
            })
            .catch((err) => alert   (err.response.data.message))
    
    }
    return(
        <div>
            <div>
                <h2>Login</h2>
                <form onSubmit={onSubmitLogin}>
                    <input
                        placeholder="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        name="email"
                        required
                    />

                    <input
                        placeholder="password"
                        type="password"
                        value={form.password}
                        onChange={onChange}
                        name="password"
                        required
                    />

                    <button>Entrar</button>
                </form>
                
            </div>
            <div>
                <button onClick={onClickBack}>voltar</button>
            </div>
        </div>
    )
}
export default LoginPage