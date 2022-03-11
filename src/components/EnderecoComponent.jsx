import React, { Component } from 'react';
import EnderecoService from '../services/EnderecoService';

class EnderecoComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            endereco:[]
        }
    }

    componentDidMount(){
        EnderecoService.getEndereco().then((res) => {
            this.setState({endereco : res.data})
        });
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