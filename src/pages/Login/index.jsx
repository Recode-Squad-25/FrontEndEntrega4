/*PÁGINA LOGIN COMPLETA*/
import { Layouts } from '../../components/layouts/index'
import { Link } from "react-router-dom"
import { useState } from "react";

import logo from '../../assets/icon_mobile.png'

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Layouts>
      <form className="login-form">
        <span className="login-form-title">
          <img src={logo} alt="logo" />
        </span>
        <p className="login-form-subtitle">Faça login</p>

        <div className="wrap-input">
          <input className={email !== "" ? 'has-val input' : 'input'} type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <span className="focus-input" data-placeholder="Email">
          </span>
        </div>

        <div className="wrap-input">
          <input className={password !== "" ? 'has-val input' : 'input'} type="password" value={password} onChange={e => setPassword(e.target.value)} />
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
    </Layouts>
  );
};