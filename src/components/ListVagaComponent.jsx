import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

class VagaComponent extends Component {
     
    constructor(props){
        super(props)
        this.state = {
            vaga:[]
        }
        this.addVaga = this.addVaga.bind(this);
        this.editVaga = this.editVaga.bind(this);
        this.deleteVaga = this.deleteVaga.bind(this);
    }

    deleteVaga(id){
        api.deleteVaga(id).then( res => {
            this.setState({vaga: this.state.vaga.filter(vaga => vaga.id !== id)});
        });
    }
    viewVaga(id){
        this.props.history.push(`/view-vaga/${id}`);
    }
    editVaga(id){
        this.props.history.push(`/add-vaga/${id}`);
    }

    componentDidMount(){
        api.getVaga().then((res) => {
            this.setState({ vaga: res.data});
        });
    }

    addVaga(){
        this.props.history.push('/add-vaga/_add');
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Lista de Vagas</h1>
                 <table className="table table-striped">
                     <thead>
                         <tr>
                             <td>ID</td>
                             <td>Titulo</td>
                             <td>Cargo</td>
                             <td>Salario</td>
                             <td>Descricao</td>
                             <td>Habilidades</td>
                             <td>Beneficios</td>
                             <td>Data Inicio Inscrição</td>
                             <td>Data Fim inscrição</td>
                             <td>Formação</td>
                             <td>Requisitos</td>
                         </tr>
                     </thead>
                     <tbody>
                         {
                            this.state.vaga.map(
                                vaga => 
                                <tr key={vaga.id}>
                                    <td>{vaga.id}</td>
                                    <td>{vaga.titulo}</td>
                                    <td>{vaga.cargo}</td>
                                    <td>{vaga.salario}</td>
                                    <td>{vaga.descricao}</td>
                                    <td>{vaga.beneficios}</td>
                                    <td>{vaga.dataInicioInscricao}</td>
                                    <td>{vaga.dataFimInscricao}</td>
                                    <td>{vaga.formacao}</td>
                                    <td>{vaga.beneficios}</td>
                                    <td>{vaga.requisitos}</td>
                                    <td>
                                        <button onClick={ () => this.editEmployee(vaga.id)} className="btn btn-info">Atualizar</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(vaga.id)} className="btn btn-danger">Deletar</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(vaga.id)} className="btn btn-info">Detalhe</button>
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

export default VagaComponent;