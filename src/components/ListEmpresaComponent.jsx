import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

class EmpresaComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            empresa: []
        }
        this.addEmpresa = this.addEmpresa.bind(this);
        this.editEmpresa = this.editEmpresa.bind(this);
        this.deleteEmpresa = this.deleteEmpresa.bind(this);
    }

    deleteEmpresa(id){
        api.deleteEmpresa(id).then( res => {
            this.setState({empresas: this.state.empresas.filter(empresa => empresa.id !== id)});
        });
    }
    viewEmpresa(id){
        this.props.history.push(`/view-empresa/${id}`);
    }
    editEmpresa(id){
        this.props.history.push(`/add-empresa/${id}`);
    }

    componentDidMount() {
        api.getEmpresa().then((res) => {
            this.setState({ empresa: res.data })
        });
    }

    addEmpresa(){
        this.props.history.push('/add-empresa/_add');
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Lista Empresas</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Email</td>
                            <td>Logo</td>
                            <td>Titulo</td>
                            <td>Telefone</td>
                            <td>CNPJ</td>
                            <td>Endereço</td>
                            <td>Vagas</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.empresa.map(
                                empresa =>
                                    <tr key={empresa.id}>
                                        <td>{empresa.email}</td>
                                        <td>{empresa.caminhoImagem}</td>
                                        <td>{empresa.telefone}</td>
                                        <td>{empresa.cnpj}</td>
                                        <td>{empresa.endereco}</td>
                                        <td>{empresa.vagas}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    };
};

export default EmpresaComponent;