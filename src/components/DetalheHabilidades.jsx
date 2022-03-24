import React from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

export const DetalheHabilidades = () => {
    const [habilidades, setHabilidades] = useState([])

    useEffect(() => {
        api.get('/Habilidades').then(response => {
            setHabilidades(response.data);
        })
    }, []);

    return (
        <div className='container'>
            <br /><br /><br /><br />
            {habilidades.map(habilidade => (
            <div className="card col-md-6 offset-md-3 text-light">
                <h3 className="text-center"> Detalhe Habilidades</h3>
                <div className="card-body">
                    <div className="row">
                        <label> Tipo: {habilidade.tipo}</label>
                    </div>
                    <div className="row">
                        <label> Nome Habilidade: {habilidade.nome}</label>
                    </div>
                    <div className="row">
                        <label> Nível: {habilidade.nivel}</label>
                    </div>
                    <div className="row">
                        <label> Tempo de duração:{habilidade.tempo} </label>
                    </div>
                    <div className="row">
                        <label> Certificado: {habilidades.caminhoImagemComprovante}</label>
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