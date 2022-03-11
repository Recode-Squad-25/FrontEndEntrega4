import React, { Component } from 'react';
import VagaService from '../services/VagaService';

class VagaComponent extends Component {
     
    constructor(props){
        super(props)
        this.state = {
            vaga:[]
        }
    }

    componentDidMount(){
       VagaService.getVaga().then((res) => {
            this.setState({vaga : res.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Lista Vagas</h1>
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