import React from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

export const DetalheFormacao = () => {
    const [formacoes, setFormacao] = useState([])

    useEffect(() => {
        api.get('/Formacao').then(response => {
            setFormacao(response.data);
        })
    }, []);

    return (
        <div className='container'>
            <br /><br /><br /><br />
            {formacoes.map(formacao => (
                <div className="card col-md-6 offset-md-3 text-light">
                    <h3 className="text-center"> Detalhes formação </h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Titulo: {formacao.titulo}</label>
                        </div>
                        <div className="row">
                            <label> Nível: {formacao.nivel}</label>
                        </div>
                        <div className="row">
                            <label> Instituição: {formacao.instituicao}</label>
                        </div>
                        <div className="row">
                            <label> Data Inicio: {formacao.dataInicio}</label>
                        </div>
                        <div className="row">
                            <label> Data Fim: {formacao.dataFim}</label>
                        </div>
                        <div className="row">
                            <label> Diploma: {formacao.caminhoImagemDiploma}</label>
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