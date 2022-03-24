import React from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

export const DetalheRequisitos = () => {
    const [requisitos, setRequisitos] = useState([])

    useEffect(() => {
        api.get('/Requisitos').then(response => {
            setRequisitos(response.data);
        })
    }, []);

    return (
        <div className='container'>
            <br /><br /><br /><br />
            {requisitos.map(requisito => (
            <div className="card col-md-6 offset-md-3 text-light">
                <h3 className="text-center"> Detalhe requisitos</h3>
                <div className="card-body">
                    <div className="row">
                        <label> Área Atuação: {requisito.areaAtuacao}</label>
                    </div>
                    <div className="row">
                        <label> Cargo: {requisito.cargo}</label>
                    </div>
                    <div className="row">
                        <label> Tempo Experiencia: {requisito.tempoExperiencia}</label>
                    </div>
                    <div className="row">
                        <label> Escolaridade: {requisito.escolaridade}</label>
                    </div>
                    <div className="row">
                        <label> Requisitos: {requisito.requisitos}</label>
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