/*PÁGINA RECUPERAÇÃO DE SENHA COMPLETA*/
import React from 'react'
import Layouts from '../../components/layouts/index'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/assets/icon_mobile.png'
import ForgotPassword from '../../services/ForgotPasswordService'

export const Senha = () => {
    const email = useRef()

    function Forgot (event) {
        event.preventDefault()
        ForgotPassword.post('/auth/forgot', {
          email: email.current.value
        }).then((res) => console.log(res))
          .catch((err) => console.log(err))
      } 
    return (
        <Layouts>
            <form onSubmit={Forgot} className="login-form">
                <span className="login-form-title">
                    <img src={logo} alt="logo" />
                </span>

                <p className="login-form-subtitle">Informe o Email de recuperação:</p>
                <div className="wrap-input">
                    <input className={email !== "" ? 'has-val input' : 'input'} type="email" onChange={e => email(e.target.value)} ref={email} />
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