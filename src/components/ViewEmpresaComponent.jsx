import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

class ViewEmpresaComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            empresa: {}
        }
    }

    componentDidMount(){
        api.getEmpresaById(this.state.id).then( res => {
            this.setState({empresa: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detalhes Empresa</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> E-mail: </label>
                            <div> { this.state.empresa.email }</div>
                        </div>
                        <div className = "row">
                            <label> Logo: </label>
                            <div> { this.state.empresa.caminhoImagem }</div>
                        </div>
                        <div className = "row">
                            <label> Nome empresa: </label>
                            <div> { this.state.empresa.titulo }</div>
                        </div>
                        <div className = "row">
                            <label> Telefone: </label>
                            <div> { this.state.empresa.telefone }</div>
                        </div>
                        <div className = "row">
                            <label> CNPJ: </label>
                            <div> { this.state.empresa.cnpj }</div>
                        </div>
                        <div className = "row">
                            <label> Endereço: </label>
                            <div> { this.state.empresa.endereco }</div>
                        </div>
                        <div className = "row">
                            <label> Vagas: </label>
                            <div> { this.state.empresa.vagas }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmpresaComponent;