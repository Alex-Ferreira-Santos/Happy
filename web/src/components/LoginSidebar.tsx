import React from 'react'
import Logotipo from '../images/Logotipo.svg'
import '../styles/components/LoginSideBar.css'

export default function LoginSidebar() {
    return(
        <aside className="aside">
            <img src={Logotipo} alt="logo tipo" id="logotipo"/>
            <p id="estado">Rio de Janeiro <br/><span id="cidade"> Rio de Janeiro </span></p>
        </aside>
    )
}