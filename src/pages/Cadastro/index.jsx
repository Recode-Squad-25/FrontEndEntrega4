/*PÁGINA CADASTRO COMPLETA*/
import React from 'react';
import logo from '../../images/assets/icon_mobile.png';
import { Link } from 'react-router-dom'
import { Layouts } from '../../components/layouts/index'
import { useEffect, useState } from "react"
import CadastroService from '../../services/CadastroService'

export const Cadastro = () => {

    const [estados, setEstados] = useState([])
    const [cidades, setCidades] = useState([])

    useEffect(() => {
        CadastroService.get('/estados').then(response => {
            setEstados(response.data);
        })
    }, []);

    useEffect(() => {
        CadastroService.get('/estados/4/cidades').then(response => {
            setCidades(response.data);
        })
    }, []);


    const [campos, setCampos] = useState({
        nome: '',
        email: '',
        tipo: '',
        cpfOuCnpj: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cep: '',
        telefone1: '',
        estadoId: '0',
        cidadeId: '0',
        senha: ''
    })

    function handleInputChange(event) {
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        CadastroService.post('/usuarios', campos).then(response => {
            alert(response.data.dados + 'Cadastrado com sucesso!');
        })
    }

    return (
        <Layouts>

            <span className="login-form-title">
                <img src={logo} alt="logo" />
            </span>
            <p className="login-form-subtitle">Criar conta</p>
            <form onSubmit={handleFormSubmit} className="login-form">
                <div className='align text-center mb-4 text-white'>
                    <div class="form-check form-check-inline d-inline-block">
                        <input class="form-check-input" type="radio" name="tipo" id="tipo" value="1" onChange={handleInputChange} />
                        <label class="form-check-label" for="inlineRadio1">Pessoa física</label>
                    </div>
                    <div class="form-check form-check-inline d-inline-block">
                        <input class="form-check-input" type="radio" name="tipo" id="tipo" value="2" onChange={handleInputChange} />
                        <label class="form-check-label" for="inlineRadio2">Pessoa jurídica</label>
                    </div>
                </div>

                <div className="wrap-input">
                    <input onChange={handleInputChange} className="has-val input input"  type="text" name='nome' id='nome' />
                    <span className="focus-input" data-placeholder="Nome"></span>
                </div>

                <div className="wrap-input">
                    <input onChange={handleInputChange} className='has-val input input' type="text" name='email' id='email'  />
                    <span className="focus-input" data-placeholder="Email">
                    </span>
                </div>

                <div className="wrap-input">
                    <input onChange={handleInputChange} className='has-val input input' type="text" name='cpfOuCnpj' id='cpfOuCnpj'  />
                    <span className="focus-input" data-placeholder="CPF ou CNPJ">
                    </span>
                </div>

                <div className="wrap-input">
                    <input onChange={handleInputChange} className='has-val input input' type="password" name='senha' id='senha'  />
                    <span className="focus-input" data-placeholder="Senha">
                    </span>
                </div>

                <div className="wrap-input">
                    <input onChange={handleInputChange} className='has-val input input' type="text" name='logradouro' id='logradouro'  />
                    <span className="focus-input" data-placeholder="Logradouro">
                    </span>
                </div>

                <div className="wrap-input">
                    <input onChange={handleInputChange} className='has-val input input' type="text" name='numero' id='numero'  />
                    <span className="focus-input" data-placeholder="Número">
                    </span>
                </div>

                <div className="wrap-input">
                    <input onChange={handleInputChange} className='has-val input input' type="text" name='complemento' id='complemento'  />
                    <span className="focus-input" data-placeholder="Complemento">
                    </span>
                </div>

                <div className="wrap-input">
                    <input onChange={handleInputChange} className='has-val input input' type="text" name='bairro' id='bairro'  />
                    <span className="focus-input" data-placeholder="Bairro">
                    </span>
                </div>

                <div className="wrap-input">
                    <input onChange={handleInputChange} className='has-val input input' type="text" name='cep' id='cep'  />
                    <span className="focus-input" data-placeholder="CEP">
                    </span>
                </div>

                <div className="wrap-input">
                    <input onChange={handleInputChange} className='has-val input input' type="text" name='telefone1' id='telefone1'  />
                    <span className="focus-input" data-placeholder="Telefone">
                    </span>
                </div>

                <div className="wrap-input">
                    <select name='estadoId' id='estadoId' className="form-select" aria-label="">
                        <option value='0'>Selecione o Estado</option>
                        {estados.map(estado => (<option key={estado.id} value={estado.id}>{estado.nome}</option>))}
                    </select>
                </div>

                <div className="wrap-input">
                    <select name='cidadeId' id='cidadeId' className="form-select" aria-label="">
                        <option value='0'>Selecione a Cidade</option>
                        {cidades.map(cidade => (<option key={cidade.id} value={cidade.id}>{cidade.nome}</option>))}
                    </select>
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