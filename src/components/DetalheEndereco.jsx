import React from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

export const DetalheEndereco = () => {
    const [enderecos, setEndereco] = useState([])

    useEffect(() => {
        api.get('/Endereco').then(response => {
            setEndereco(response.data);
        })
    }, []);

    return (
        <div className='container'>
            <br /><br /><br /><br />
            {enderecos.map(endereco => (
            <div className="card col-md-6 offset-md-3 text-light">
                <h3 className="text-center"> Detalhe Endereço</h3>
                <div className="card-body">
                    <div className="row">
                        <label> CEP: {endereco.cep}</label>
                    </div>
                    <div className="row">
                        <label> Rua: </label>
                        <div> {endereco.logradouro}</div>
                    </div>
                    <div className="row">
                        <label> Número: {endereco.numero}</label>
                    </div>
                    <div className="row">
                        <label> Complemento: {endereco.complemento}</label>
                    </div>
                    <div className="row">
                        <label> Bairro: {endereco.bairro}</label>
                    </div>                    
                    <div className="row">
                        <div className="col"><button className='btn btn-outline-warning'>Editar</button></div>
                        <div className="col"><button className='btn btn-outline-danger'>Deletar</button></div>
                        <div className="col"><button className='btn btn-outline-success'>Salvar</button></div>
                    </div>
                </div>
            </div>
             ))}
        </div>
    )
}