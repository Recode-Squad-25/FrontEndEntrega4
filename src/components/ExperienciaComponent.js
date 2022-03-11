import React, { Component } from 'react';
import ExperienciaService from '../services/ExperienciaService';

class ExperienciaComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            experiencia:[]
        }
    }

    componentDidMount(){
       ExperienciaService.getExperiencia().then((res) => {
            this.setState({experiencia : res.data})
        });
    }
    
    render() {
        return (
            <div>
                <h1 className="text-center">Lista Experiencia</h1>
                 <table className="table table-striped">
                     <thead>
                         <tr>
                             <td>ID</td>
                             <td>Titulo</td>
                             <td>Cargo</td>
                             <td>Empresa</td>
                             <td>Data Inicio</td>
                             <td>Data Fim</td>
                             <td>Descrição</td>
                         </tr>
                     </thead>
                     <tbody>
                         {
                            this.state.endereco.map(
                                endereco => 
                                <tr key={endereco.id}>
                                    <td>{endereco.titulo}</td>
                                    <td>{endereco.cargo}</td>
                                    <td>{endereco.empresa}</td>
                                    <td>{endereco.dataInicio}</td>
                                    <td>{endereco.dataFim}</td>
                                    <td>{endereco.descricaoAtividades}</td>
                                </tr>
                             )
                         }
                     </tbody>
                 </table>     
            </div>
        );
    }
}

export default ExperienciaComponent;