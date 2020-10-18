import React from 'react'
import LoginSideBar from '../components/LoginSidebar'

function Login(){
    return(
        <div>
            <LoginSideBar/>
            <aside>
                <p className="fazLogin">Fazer Login</p>
            </aside>
        </div>
    )
}

export default Login