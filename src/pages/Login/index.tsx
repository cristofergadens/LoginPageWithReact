import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate();
    
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const handleLogin = async () => {
        if(email && password) { 
            const isLogged = await auth.signin(email, password);
            if(isLogged) {
                navigate('/'); 
            } else {
                alert("Não foi possível fazer login.");
            }
        }
    }

    return (
        <div>
            <h2>Pagina fechada</h2>

            <input 
                type="text" value={email} 
                onChange = {e => setEmail(e.target.value)}  
                placeholder="Digite seu email: " 
            />
            <input 
                type="password" 
                value={password} 
                onChange = {e => setPassword(e.target.value)} 
                placeholder="Digite sua senha: " 
            />
            
            <button onClick={handleLogin}>Logar</button>
            </div>
    )
}