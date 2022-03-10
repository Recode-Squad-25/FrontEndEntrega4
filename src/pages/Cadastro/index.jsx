/*PÁGINA CADASTRO COMPLETA*/
import logo from '../../assets/icon_mobile.png'
import { Link } from 'react-router-dom'
import { Layouts } from '../../components/layouts/index'
import { useState } from 'react'

export const Cadastro = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cep, setCep] = useState("");
    const [fone, setFone] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return (
        <Layouts>
            <form className="login-form">
                <span className="login-form-title">
                    <img src={logo} alt="logo" />
                </span>
                <p className="login-form-subtitle">Criar conta</p>

                <div className='align text-center mb-4 text-white'>
                    <div class="form-check form-check-inline d-inline-block">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">Pessoa física</label>
                    </div>
                    <div class="form-check form-check-inline d-inline-block">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">Pessoa jurídica</label>
                    </div>
                </div>

                <div className="wrap-input">
                    <input className={name !== "" ? 'has-val input' : 'input'} type="name" value={name} onChange={e => setName(e.target.value)} />
                    <span className="focus-input" data-placeholder="Nome">
                    </span>
                </div>

                <div className="wrap-input">
                    <input className={email !== "" ? 'has-val input' : 'input'} type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <span className="focus-input" data-placeholder="Email">
                    </span>
                </div>

                <div className="wrap-input">
                    <input className={cpf !== "" ? 'has-val input' : 'input'} type="cpf" value={cpf} onChange={e => setCpf(e.target.value)} />
                    <span className="focus-input" data-placeholder="CPF">
                    </span>
                </div>

                <div className="wrap-input">
                    <input className={password !== "" ? 'has-val input' : 'input'} type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <span className="focus-input" data-placeholder="Senha">
                    </span>
                </div>

                <div className="wrap-input">
                    <input className={logradouro !== "" ? 'has-val input' : 'input'} type="logradouro" value={logradouro} onChange={e => setLogradouro(e.target.value)} />
                    <span className="focus-input" data-placeholder="Logradouro">
                    </span>
                </div>

                <div className="wrap-input">
                    <input className={numero !== "" ? 'has-val input' : 'input'} type="numero" value={numero} onChange={e => setNumero(e.target.value)} />
                    <span className="focus-input" data-placeholder="n°">
                    </span>
                </div>

                <div className="wrap-input">
                    <input className={complemento !== "" ? 'has-val input' : 'input'} type="complemento" value={complemento} onChange={e => setComplemento(e.target.value)} />
                    <span className="focus-input" data-placeholder="Complemento">
                    </span>
                </div>

                <div className="wrap-input">
                    <input className={bairro !== "" ? 'has-val input' : 'input'} type="bairro" value={bairro} onChange={e => setBairro(e.target.value)} />
                    <span className="focus-input" data-placeholder="Bairro">
                    </span>
                </div>

                <div className="wrap-input">
                    <input className={cep !== "" ? 'has-val input' : 'input'} type="cep" value={cep} onChange={e => setCep(e.target.value)} />
                    <span className="focus-input" data-placeholder="Cep">
                    </span>
                </div>

                <div className="wrap-input">
                    <input className={fone !== "" ? 'has-val input' : 'input'} type="fone" value={fone} onChange={e => setFone(e.target.value)} />
                    <span className="focus-input" data-placeholder="Telefone">
                    </span>
                </div>

                <div className="wrap-input">
                    <input className={estado !== "" ? 'has-val input' : 'input'} type="estado" value={estado} onChange={e => setEstado(e.target.value)} />
                    <span className="focus-input" data-placeholder="Estado">
                    </span>
                </div>

                <div className="wrap-input">
                    <input className={cidade !== "" ? 'has-val input' : 'input'} type="cidaded" value={cidade} onChange={e => setCidade(e.target.value)} />
                    <span className="focus-input" data-placeholder="Cidade">
                    </span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn">Criar conta</button>
                </div>

                <div className="text-center">
                    <Link className="login-ancora" to="/login">Já possuo uma conta Colore</Link>
                </div>
            </form>
        </Layouts>
    );
};