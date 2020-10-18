import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import LoginSideBar from '../components/LoginSidebar'
import '../styles/pages/login.css'

function Login() {
    const { goBack } = useHistory()
    return (
        <div className="Main">
            <LoginSideBar />
            <aside className="Login">
                <div id="button">
                    <button type="button" onClick={goBack} id="goBack">
                        <FiArrowLeft size={24} color="#15C3D6" />
                    </button>
                </div>
                <form method="post" id="form">
                    <p id="fazLogin">Fazer login</p>
                    <div className="input-block">
                        <label htmlFor="email">E-mail</label>
                        <input 
                            id="email" 
                            placeholder="Digite seu email"
                        />           
                    </div>

                    <div className="input-block">
                        <label htmlFor="senha">Senha</label>
                        <input 
                            type="passoword"
                            id="senha" 
                            placeholder="Digite sua senha"
                        />           
                    </div>

                    <div className="input-block lembrar">
                        <input 
                            type="checkbox"
                            id="lembrar" 
                        />  
                        <label htmlFor="lembrar">Lembrar-me</label>
                        <a href="#" id="esqueciSenha">Esqueci minha senha</a>   
                    </div>

                    <button className="input-block button-select" type="submit">
                        Entrar
                    </button>
                </form>
            </aside>
        </div>
    )
}

export default Login