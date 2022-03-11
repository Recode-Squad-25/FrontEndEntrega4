
import React, { Component } from 'react';
import FormacaoService from '../services/FormacaoService';

class FormacaoComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            formacao:[]
        }
    }

    componentDidMount(){
        FormacaoService.getFormacao().then((res) => {
            this.setState({formacao : res.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Lista de Formação</h1>
                 <table className="table table-striped">
                     <thead>
                         <tr>
                             <td>ID</td>
                             <td>Titulo</td>
                             <td>Nivel</td>
                             <td>Instituição</td>
                             <td>Data Inicio</td>
                             <td>Data Fim</td>
                             <td>Imagem Diploma</td>
                         </tr>
                     </thead>
                     <tbody>
                         {
                            this.state.formacao.map(
                                formacao => 
                                <tr key={formacao.id}>
                                    <td>{formacao.id}</td>
                                    <td>{formacao.titulo}</td>
                                    <td>{formacao.nivel}</td>
                                    <td>{formacao.instituicao}</td>
                                    <td>{formacao.dataInicio}</td>
                                    <td>{formacao.dataFim}</td>
                                    <td>{formacao.caminhoImagemDiploma}</td>
                                </tr>
                             )
                         }
                     </tbody>
                 </table>
            </div>
        );
    }
}

export default FormacaoComponent;