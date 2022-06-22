import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onClickBack = () => {
        navigate("/")
    }

    const onSubmitLogin = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-marinho-hooks/login"
    
        const body = {
            email: email,
            password: password
        }

        axios
            .post(url,body)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                navigate("/admin/trips/list")
            })
            .catch((err) => alert   (err.response.data.message))
    
    }
    return(
        <div>
            <div>
                <h2>Login</h2>

                <input
                    placeholder="email"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                />

                <input
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                />

                <button onClick={onSubmitLogin}>Entrar</button>
            </div>
            <div>
                <button onClick={onClickBack}>voltar</button>
            </div>
        </div>
    )
}
export default LoginPage