import React, { useState } from "react"
import { toast, ToastContainer } from "react-toastify";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        toast(`Email: ${email} - senha: ${password}`)
        
        console.log(`Email: ${email} - senha: ${password}`)
    }

    return (<>
    <h1>Exercício 4</h1>
    <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" 
        placeholder="Digite seu email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} />

        <label>Senha</label>
        <input type="text" 
        placeholder="Digite sua senha" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
    </form>
    <ToastContainer />
    </>)
}

export default LoginForm