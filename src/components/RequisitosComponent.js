import React, { Component } from 'react';
import RequisitosService from '../services/RequisitosService';

class RequisitosComponent extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            requisitos:[]
        }
    }

    componentDidMount(){
        RequisitosService.getRequisitos().then((res) => {
            this.setState({requisitos : res.data})
        });
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