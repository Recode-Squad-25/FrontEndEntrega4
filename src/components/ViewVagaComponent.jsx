import React, { Component } from 'react';
import VagaService from '../services/VagaService';

class ViewVagaComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            vaga: {}
        }
    }

    componentDidMount(){
        VagaService.getVagaById(this.state.id).then( res => {
            this.setState({vaga: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detalhe Vaga</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Titulo: </label>
                            <div> { this.state.vaga.titulo }</div>
                        </div>
                        <div className = "row">
                            <label> Cargo: </label>
                            <div> { this.state.vaga.cargo }</div>
                        </div>
                        <div className = "row">
                            <label> Salario: </label>
                            <div> { this.state.vaga.salario }</div>
                        </div>
                        <div className = "row">
                            <label> Descricao: </label>
                            <div> { this.state.vaga.descricao }</div>
                        </div>
                        <div className = "row">
                            <label> Beneficios: </label>
                            <div> { this.state.vaga.beneficios }</div>
                        </div>
                        <div className = "row">
                            <label> Data Inicio Inscrição: </label>
                            <div> { this.state.vaga.dataInicioInscricao }</div>
                        </div>
                        <div className = "row">
                            <label> Data Fim Inscrição: </label>
                            <div> { this.state.vaga.dataFimInscricao }</div>
                        </div>
                        <div className = "row">
                            <label> Formação: </label>
                            <div> { this.state.vaga.formacao }</div>
                        </div>
                        <div className = "row">
                            <label> Requisitos: </label>
                            <div> { this.state.vaga.requisitos }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewVagaComponent;