import React from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

export const DetalheCurriculo = () => {
    const [curriculos, setCurriculo] = useState([])

    useEffect(() => {
        api.get('Curriculo').then(response => {
            setCurriculo(response.data);
        })
    }, []);
    return (
        <div className='container'>
            <br /><br /><br /><br />
            {curriculos.map(curriculo => (
                <div className="card col-md-6 offset-md-3 text-light">
                    <h3 className="text-center"> Detalhe Curriculo</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Nome: {curriculo.nome}</label>
                        </div>
                        <div className="row">
                            <label> Sobrenome: {curriculo.sobrenome}</label>
                        </div>
                        <div className="row">
                            <label> Nome Social: {curriculo.nomeSocial}</label>
                        </div>
                        <div className="row">
                            <label> Orientaçãoo Sexual: {curriculo.orientacaoSexual}</label>
                        </div>
                        <div className="row">
                            <label> Identidade de Gênero: {curriculo.identidadeGenero}</label>
                        </div>
                        <div className="row">
                            <label> Telefone: {curriculo.telefone}</label>
                        </div>
                        <div className="row">
                            <label> CPF: {curriculo.cpf}</label>
                        </div>
                        <div className="row">
                            <label> RG: {curriculo.rg}</label>
                        </div>
                        <div className="row">
                            <label> Data Nascimento: {curriculo.dataNascimento}</label>
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