import React, { useEffect, useState } from 'react';
import api from '../services/api';

export const DetalheExperiencia = () => {
    const [experiencias, setExperiencia] = useState([])

    useEffect(() => {
        api.get('/Experiencia').then(response => {
            setExperiencia(response.data);
        })
    }, []);

    return (
        <div className='container'>
            <br /><br /><br /><br />
            {experiencias.map(experiencia => (
            <div className="card col-md-6 offset-md-3 text-light">
                <h3 className="text-center"> Detalhe Experiência</h3>
                <div className="card-body">
                    <div className="row">
                        <label> Titulo:{experiencia.titulo} </label>
                    </div>
                    <div className="row">
                        <label> Cargo: {experiencia.cargo}</label>
                    </div>
                    <div className="row">
                        <label> Empresa: {experiencia.empresa}</label>
                    </div>
                    <div className="row">
                        <label> Data Inicio: {experiencia.dataInicio}</label>
                    </div>
                    <div className="row">
                        <label> Data Fim: {experiencia.dataFim}</label>
                    </div>
                    <div className="row">
                        <label> Descrição Atividades </label>
                        <div> {experiencia.descricaoAtividades}</div>
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