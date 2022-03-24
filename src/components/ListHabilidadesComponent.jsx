import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

class HabilidadesComponent extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            habilidades:[]
        }
        this.addHabilidades = this.addHabilidades.bind(this);
        this.editHabilidades = this.editHabilidades.bind(this);
        this.deleteHabilidades = this.deleteHabilidades.bind(this);
    }

    deleteHabilidades(id){
        api.deleteHabilidades(id).then( res => {
            this.setState({habilidades: this.state.habilidades.filter(habilidades => habilidades.id !== id)});
        });
    }
    viewHabilidades(id){
        this.props.history.push(`/view-habilidades/${id}`);
    }
    editHabilidades(id){
        this.props.history.push(`/add-habilidades/${id}`);
    }

    componentDidMount(){
        api.getHabilidades().then((res) => {
            this.setState({ habilidades: res.data});
        });
    }

    addHabilidades(){
        this.props.history.push('/add-habilidades/_add');
    }
    
    render() {
        return (
            <div>
                <h1 className="text-center">Lista Habilidades</h1>
                 <table className="table table-striped">
                     <thead>
                         <tr>
                             <td>ID</td>
                             <td>Tipo</td>
                             <td>Nome</td>
                             <td>Nível</td>
                             <td>Tempo</td>
                             <td>Imagem</td>
                         </tr>
                     </thead>
                     <tbody>
                         {
                            this.state.habilidades.map(
                                habilidades => 
                                <tr key={habilidades.id}>
                                    <td>{habilidades.id}</td>
                                    <td>{habilidades.tipo}</td>
                                    <td>{habilidades.nome}</td>
                                    <td>{habilidades.nivel}</td>
                                    <td>{habilidades.tempo}</td>
                                    <td>{habilidades.caminhoImagemComprovante}</td>
                                    <td>
                                    <button onClick={ () => this.editHabilidades(habilidades.id)} className="btn btn-info">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteHabilidades(habilidades.id)} className="btn btn-danger">Deletar</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewHabilidades(habilidades.id)} className="btn btn-info">Detalhes</button>
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

export default HabilidadesComponent;