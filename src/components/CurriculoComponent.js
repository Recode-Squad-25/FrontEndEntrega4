import React, { Component } from 'react';
import CurriculoService from '../services/CurriculoService';

class CurriculoComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            curriculo:[]
        }
    }

    componentDidMount(){
        CurriculoService.getCurriculo().then((res) => {
            this.setState({curriculo : res.data})
        });
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