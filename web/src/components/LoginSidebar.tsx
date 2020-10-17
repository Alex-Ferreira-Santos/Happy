import React from 'react'
import Logotipo from '../images/Logotipo.svg'

export default function LoginSidebar() {
    return(
        <aside>
            <img src={Logotipo} alt="logo tipo" id="logotipo"/>
            <p id="estado">Rio de Janeiro <br/><span id="cidade"> Rio de Janeiro </span></p>
        </aside>
    )
}