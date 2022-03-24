import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

class EnderecoComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            endereco:[]
        }
        this.addEndereco = this.addEndereco.bind(this);
        this.editEndereco = this.editEndereco.bind(this);
        this.deleteEndereco = this.deleteEndereco.bind(this);
    }

    deleteEndereco(id){
        api.deleteEndereco(id).then( res => {
            this.setState({endereco: this.state.endereco.filter(endereco => endereco.id !== id)});
        });
    }
    viewEndereco(id){
        this.props.history.push(`/view-endereco/${id}`);
    }
    editEndereco(id){
        this.props.history.push(`/add-endereco/${id}`);
    }

    componentDidMount(){
        api.getEnderecos().then((res) => {
            this.setState({ endereco: res.data});
        });
    }

    addEndereco(){
        this.props.history.push('/add-endereco/_add');
    }


    render() {
        return (
            <div>
                <h1 className="text-center">Lista Endereços</h1>
                 <table className="table table-striped">
                     <thead>
                         <tr>
                             <td>ID</td>
                             <td>Cep</td>
                             <td>Rua</td>
                             <td>Número</td>
                             <td>Complemento</td>
                             <td>Bairro</td>
                             <td>Cidade</td>
                             <td>UF</td>
                             <td>País</td>
                         </tr>
                     </thead>
                     <tbody>
                         {
                            this.state.endereco.map(
                                endereco => 
                                <tr key={endereco.id}>
                                    <td>{endereco.cep}</td>
                                    <td>{endereco.rua}</td>
                                    <td>{endereco.numero}</td>
                                    <td>{endereco.complemento}</td>
                                    <td>{endereco.bairro}</td>
                                    <td>{endereco.cidade}</td>
                                    <td>{endereco.uf}</td>
                                    <td>{endereco.pais}</td>
                                    <td>
                                        <button onClick={ () => this.editEmployee(endereco.id)} className="btn btn-info">Atualizar</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(endereco.id)} className="btn btn-danger">Deletar</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(endereco.id)} className="btn btn-info">Detalhes</button>
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

export default EnderecoComponent;