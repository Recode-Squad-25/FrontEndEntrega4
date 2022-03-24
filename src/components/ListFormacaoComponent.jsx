
import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

class FormacaoComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            formacao:[]
        }
        this.addFormacao = this.addFormacao.bind(this);
        this.editFormacao = this.editFormacao.bind(this);
        this.deleteFormacao = this.deleteFormacao.bind(this);
    }

    deleteFormacao(id){
        api.deleteFormacao(id).then( res => {
            this.setState({formacao: this.state.formacao.filter(formacao => formacao.id !== id)});
        });
    }
    viewFormacao(id){
        this.props.history.push(`/view-formacao/${id}`);
    }
    editFormacao(id){
        this.props.history.push(`/add-formacao/${id}`);
    }

    componentDidMount(){
        api.getFormacao().then((res) => {
            this.setState({ formacao: res.data});
        });
    }

    addFormacao(){
        this.props.history.push('/add-formacao/_add');
    }


    render() {
        return (
            <div>
                <h1 className="text-center">Lista de Formação</h1>
                 <table className="table table-striped">
                     <thead>
                         <tr>
                             <td>ID</td>
                             <td>Titulo</td>
                             <td>Nivel</td>
                             <td>Instituição</td>
                             <td>Data Inicio</td>
                             <td>Data Fim</td>
                             <td>Imagem Diploma</td>
                         </tr>
                     </thead>
                     <tbody>
                         {
                            this.state.formacao.map(
                                formacao => 
                                <tr key={formacao.id}>
                                    <td>{formacao.id}</td>
                                    <td>{formacao.titulo}</td>
                                    <td>{formacao.nivel}</td>
                                    <td>{formacao.instituicao}</td>
                                    <td>{formacao.dataInicio}</td>
                                    <td>{formacao.dataFim}</td>
                                    <td>{formacao.caminhoImagemDiploma}</td>
                                    <td>
                                        <button onClick={ () => this.editFormacao(formacao.id)} className="btn btn-info">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteFormacao(formacao.id)} className="btn btn-danger">Deletar</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewFormacao(formacao.id)} className="btn btn-info">Detalhes</button>
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

export default FormacaoComponent;