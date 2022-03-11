import React, { Component } from 'react';
import HabilidadesService from '../services/HabilidadesService';

class HabilidadesComponent extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            habilidades:[]
        }
    }

    componentDidMount(){
        HabilidadesService.getHabilidades().then((res) => {
            this.setState({habilidades : res.data})
        });
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
                            this.state.curriculo.map(
                                curriculo => 
                                <tr key={curriculo.id}>
                                    <td>{curriculo.id}</td>
                                    <td>{curriculo.tipo}</td>
                                    <td>{curriculo.nome}</td>
                                    <td>{curriculo.nivel}</td>
                                    <td>{curriculo.tempo}</td>
                                    <td>{curriculo.caminhoImagemComprovante}</td>
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