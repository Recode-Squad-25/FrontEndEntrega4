import React, { Component } from 'react';
import FormacaoService from '../services/FormacaoService';

class ViewFormacaoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            formacao: {}
        }
    }

    componentDidMount(){
        FormacaoService.getFormacaoById(this.state.id).then( res => {
            this.setState({formacao: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detalhes formação </h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Titulo: </label>
                            <div> { this.state.formacao.titulo }</div>
                        </div>
                        <div className = "row">
                            <label> Nível: </label>
                            <div> { this.state.formacao.nivel }</div>
                        </div>
                        <div className = "row">
                            <label> Instituição: </label>
                            <div> { this.state.formacao.instituicao }</div>
                        </div>
                        <div className = "row">
                            <label> Data Inicio: </label>
                            <div> { this.state.formacao.dataInicio }</div>
                        </div>
                        <div className = "row">
                            <label> Data Fim: </label>
                            <div> { this.state.formacao.dataFim }</div>
                        </div>
                        <div className = "row">
                            <label> Diploma: </label>
                            <div> { this.state.formacao.caminhoImagemDiploma }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


export default ViewFormacaoComponent;