import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

class ExperienciaComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            experiencias:[]
        }
        this.addExperiencia = this.addExperiencia.bind(this);
        this.editExperiencia = this.editExperiencia.bind(this);
        this.deleteExperiencia = this.deleteExperiencia.bind(this);
    }

    deleteExperiencia(id){
        api.deleteExperiencia(id).then( res => {
            this.setState({experiencias: this.state.experiencias.filter(experiencia => experiencia.id !== id)});
        });
    }
    viewExperiencia(id){
        this.props.history.push(`/view-experiencia/${id}`);
    }
    editExperiencia(id){
        this.props.history.push(`/add-experiencia/${id}`);
    }

    componentDidMount(){
        api.getExperiencias().then((res) => {
            this.setState({ experiencias: res.data});
        });
    }

    addExperiencia(){
        this.props.history.push('/add-experiencia/_add');
    }
    
    render() {
        return (
            <div>
                <h1 className="text-center">Lista Experiencia</h1>
                 <table className="table table-striped">
                     <thead>
                         <tr>
                             <td>ID</td>
                             <td>Titulo</td>
                             <td>Cargo</td>
                             <td>Empresa</td>
                             <td>Data Inicio</td>
                             <td>Data Fim</td>
                             <td>Descrição</td>
                         </tr>
                     </thead>
                     <tbody>
                         {
                            this.state.experiencias.map(
                                experiencia => 
                                <tr key={experiencia.id}>
                                    <td>{experiencia.titulo}</td>
                                    <td>{experiencia.cargo}</td>
                                    <td>{experiencia.empresa}</td>
                                    <td>{experiencia.dataInicio}</td>
                                    <td>{experiencia.dataFim}</td>
                                    <td>{experiencia.descricaoAtividades}</td>
                                    <td>
                                                 <button onClick={ () => this.editExperiencia(experiencia.id)} className="btn btn-info">Atualizar</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteExperiencia(experiencia.id)} className="btn btn-danger">Deletar</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewExperiencia(experiencia.id)} className="btn btn-info">Detalhes</button>
                                             </td>
                                </tr>
                             )
                         }
                     </tbody>
                 </table>     
            </div>
        );
    }
}

export default ExperienciaComponent;