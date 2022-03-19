import React, { Component } from 'react';
import RequisitosService from '../services/RequisitosService';

class ViewRequisitosComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            requisitos: {}
        }
    }

    componentDidMount(){
        RequisitosService.getRequisitosById(this.state.id).then( res => {
            this.setState({requisitos: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detalhes requisitos</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Área Atuação: </label>
                            <div> { this.state.requisitos.areaAtuacao }</div>
                        </div>
                        <div className = "row">
                            <label> Cargo: </label>
                            <div> { this.state.requisitos.cargo }</div>
                        </div>
                        <div className = "row">
                            <label> Tempo Experiencia: </label>
                            <div> { this.state.requisitos.tempoExperiencia }</div>
                        </div>
                        <div className = "row">
                            <label> Escolaridade: </label>
                            <div> { this.state.requisitos.escolaridade }</div>
                        </div>
                        <div className = "row">
                            <label> Habilidades: </label>
                            <div> { this.state.requisitos.habilidades }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewRequisitosComponent;