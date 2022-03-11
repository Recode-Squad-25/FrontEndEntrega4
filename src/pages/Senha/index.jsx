/*PÁGINA RECUPERAÇÃO DE SENHA COMPLETA*/
import Layouts from '../../components/layouts/index'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/assets/icon_mobile.png'
import '../../styles/login.css'
export const Senha = () => {
    const [email, setEmail] = useState("");
    return (
        <Layouts>
            <form className="login-form">
                <span className="login-form-title">
                    <img src={logo} alt="logo" />
                </span>

                <p className="login-form-subtitle">Informe o Email de recuperação:</p>
                <div className="wrap-input">
                    <input className={email !== "" ? 'has-val input' : 'input'} type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <span className="focus-input" data-placeholder="Email">
                    </span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn">Entrar</button>
                </div>

                <div className="text-center">
                    <Link className="login-ancora" to="/login">Retornar ao Login</Link>
                </div>
            </form>
        </Layouts>
    );
}