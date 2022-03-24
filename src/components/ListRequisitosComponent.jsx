import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

class RequisitosComponent extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            requisitos:[]
        }
        this.addRequisitos= this.addRequisitos.bind(this);
        this.editRequisitos= this.editRequisitos.bind(this);
        this.deleteRequisitos= this.deleteRequisitos.bind(this);
    }

    deleteRequisitos(id){
        api.deleteRequisitos(id).then( res => {
            this.setState({requisitos: this.state.requisitos.filter(requisitos => requisitos.id !== id)});
        });
    }
    viewRequisitos(id){
        this.props.history.push(`/view-requisitos/${id}`);
    }
    editRequisitos(id){
        this.props.history.push(`/add-requisitos/${id}`);
    }

    componentDidMount(){
        api.getRequisitoss().then((res) => {
            this.setState({ requisitos: res.data});
        });
    }

    addRequisitos(){
        this.props.history.push('/add-requisitos/_add');
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Lista Requisitos</h1>
                 <table className="table table-striped">
                     <thead>
                         <tr>
                             <td>ID</td>
                             <td>Área de atuação</td>
                             <td>Cargo</td>
                             <td>Tempo Experiência</td>
                             <td>Escolaridade</td>
                             <td>Habilidades</td>
                         </tr>
                     </thead>
                     <tbody>
                         {
                            this.state.requisitos.map(
                                requisitos => 
                                <tr key={requisitos.id}>
                                    <td>{requisitos.id}</td>
                                    <td>{requisitos.areaAtuacao}</td>
                                    <td>{requisitos.cargo}</td>
                                    <td>{requisitos.tempoExperiencia}</td>
                                    <td>{requisitos.escolaridade}</td>
                                    <td>{requisitos.Habilidades}</td>
                                </tr>
                             )
                         }
                     </tbody>
                 </table>
            </div>
        );
    }
}

export default RequisitosComponent;