/*PÁGINA LOGIN COMPLETA*/
import React from 'react'
import { Layouts } from '../../components/layouts/index'
import { Link } from "react-router-dom"
import { useRef } from 'react'
import LoginService from '../../services/LoginService';
import '../../styles/login.css'

import logo from '../../images/assets/icon_mobile.png'

export const Login = () => {

  const email = useRef()
  const senha = useRef()

  function logar(event) {
    event.preventDefault()
    LoginService.post('/login', {
      email: email.current.value,
      senha: senha.current.value
    }).then((res) => localStorage.setItem("token", res.headers.authorization))
      .catch((err) => alert("Usuário e/ou senha inválidos!"))
  }

  function logout() {
    localStorage.removeItem("token")
  }
  return (
    <Layouts>
      {localStorage.getItem("token") === null ?
        <>
          <form onSubmit={logar} className="login-form">
            <span className="login-form-title">
              <img src={logo} alt="logo" />
            </span>
            <p className="login-form-subtitle">Faça login</p>

            <div className="wrap-input">
              <input className={email !== "" ? 'has-val input' : 'input'} type="email" onChange={e => email(e.target.value)} ref={email} />
              <span className="focus-input" data-placeholder="Email">
              </span>
            </div>

            <div className="wrap-input">
              <input className={senha !== "" ? 'has-val input' : 'input'} type="password" onChange={e => senha(e.target.value)} ref={senha} />
              <span className="focus-input" data-placeholder="Senha">

              </span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Entrar</button>
            </div>

            <div className="text-center">
              <Link className="login-ancora" to="/cadastro">Não possuo uma conta Colore</Link>
            </div>
            <div className="text-center">
              <Link className="login-ancora" to="/senha">Esqueci minha senha</Link>
            </div>
          </form>
        </>
        : <> <h1>Bem vindo</h1>
          <button onClick={logout} className="btn btn-primary">Logout</button>
        </>}
    </Layouts>
  );
};