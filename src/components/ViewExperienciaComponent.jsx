import React, { Component } from 'react';
import ExperienciaService from '../services/ExperienciaService'

class ViewExperienciaComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            experiencia: {}
        }
    }

    componentDidMount(){
        ExperienciaService.getExperienciaById(this.state.id).then( res => {
            this.setState({experiencia: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detalhes Experiência</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Titulo: </label>
                            <div> { this.state.experiencia.titulo }</div>
                        </div>
                        <div className = "row">
                            <label> Cargo: </label>
                            <div> { this.state.experiencia.cargo }</div>
                        </div>
                        <div className = "row">
                            <label> Empresa: </label>
                            <div> { this.state.experiencia.empresa }</div>
                        </div>
                        <div className = "row">
                            <label> Data Inicio: </label>
                            <div> { this.state.experiencia.dataInicio }</div>
                        </div>
                        <div className = "row">
                            <label> Data Fim: </label>
                            <div> { this.state.experiencia.dataFim }</div>
                        </div>
                        <div className = "row">
                            <label> Descrição Atividades </label>
                            <div> { this.state.experiencia.descricaoAtividades }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewExperienciaComponent;