import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

class CurriculoComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            curriculo:[]
        }
        this.addCurriculo= this.addCurriculo.bind(this);
        this.editCurriculo= this.editCurriculo.bind(this);
        this.deleteCurriculo= this.deleteCurriculo.bind(this);
    }

    deleteCurriculo(id){
        api.deleteCurriculo(id).then( res => {
            this.setState({curriculo: this.state.curriculo.filter(curriculo => curriculo.id !== id)});
        });
    }
    viewCurriculo(id){
        this.props.history.push(`/view-curriculo/${id}`);
    }
    editCurriculo(id){
        this.props.history.push(`/add-curriculo/${id}`);
    }

    componentDidMount(){
        api.getCurriculo().then((res) => {
            this.setState({ curriculo: res.data});
        });
    }

    addCurriculo(){
        this.props.history.push('/add-curriculo/_add');
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Lista Curriculos</h1>
                 <table className="table table-striped">
                     <thead>
                         <tr>
                             <td>ID</td>
                             <td>Nome</td>
                             <td>Sobrenome</td>
                             <td>Nome Social</td>
                             <td>Orientação Sexual</td>
                             <td>Identidade de Genero</td>
                             <td>Telefone</td>
                             <td>CPF</td>
                             <td>RG</td>
                             <td>Data Nascimento</td>
                         </tr>
                     </thead>
                     <tbody>
                         {
                            this.state.curriculo.map(
                                curriculo => 
                                <tr key={curriculo.id}>
                                    <td>{curriculo.nome}</td>
                                    <td>{curriculo.sobrenome}</td>
                                    <td>{curriculo.nomeSocial}</td>
                                    <td>{curriculo.orientacaoSexual}</td>
                                    <td>{curriculo.identidadeGenero}</td>
                                    <td>{curriculo.telefone}</td>
                                    <td>{curriculo.cpf}</td>
                                    <td>{curriculo.rg}</td>
                                    <td>{curriculo.dataNascimento}</td>
                                    <td>
                                        <button onClick={ () => this.editFormacao(curriculo.id)} className="btn btn-info">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteFormacao(curriculo.id)} className="btn btn-danger">Deletar</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewFormacao(curriculo.id)} className="btn btn-info">Detalhes</button>
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

export default CurriculoComponent;