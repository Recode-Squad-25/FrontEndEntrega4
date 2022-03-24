import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

class UpdateRequisitosComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            areaAtuacao: '',
            cargo: '',
            tempoExperiencia: '',
            escolaridade: '',
            habilidades: ''
        }
        this.changeAreaAtuacaoHandler = this.changeAreaAtuacaoHandler.bind(this);
        this.changeCargoHandler = this.changeCargoHandler.bind(this);
        this.changeTempoExperienciaHandler = this.changeTempoExperienciaHandler.bind(this);
        this.changeEscolaridadeHandler = this.changeEscolaridadeHandler.bind(this);
        this.changeHabilidadesHandler = this.changeHabilidadesHandler.bind(this);
        this.updateRequisitos = this.updateRequisitos.bind(this);
    }

    componentDidMount(){
        api.getRequisitosById(this.state.id).then( (res) =>{
            let requisitos = res.data;
            this.setState({
                areaAtuacao: requisitos.areaAtuacao,
                cargo: requisitos.cargo,
                tempoExperiencia : requisitos.tempoExperiencia,
                escolaridade : requisitos.escolaridade,
                habilidades : requisitos.habilidades
            });
        });
    }

    updateRequisitos = (e) => {
        e.preventDefault();
        let requisitos = {areaAtuacao: this.state.areaAtuacao, cargo: this.state.cargo, tempoExperiencia: this.state.tempoExperiencia, escolaridade: this.state.escolaridade, habilidades: this.state.habilidades};
        console.log('requisitos => ' + JSON.stringify(requisitos));
        console.log('id => ' + JSON.stringify(this.state.id));
        api.updateRequisitos(requisitos, this.state.id).then( res => {
            this.props.history.push('/requisitos');
        });
    }
    
    changeAreaAtuacaoHandler= (event) => {
        this.setState({areaAtuacao: event.target.value});
    }

    changeCargoHandler= (event) => {
        this.setState({cargo: event.target.value});
    }

    changeTempoExperienciaHandler= (event) => {
        this.setState({tempoExperiencia: event.target.value});
    }

    changeEscolaridadeHandler= (event) => {
        this.setState({escolaridade: event.target.value});
    }

    changeHabilidadesHandler= (event) => {
        this.setState({habilidades: event.target.value});
    }

    cancel(){
        this.props.history.push('/requisitos');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Requisitos</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Área Atuação: </label>
                                            <input placeholder="areaAtuacao" name="areaAtuacao" className="form-control" 
                                                value={this.state.areaAtuacao} onChange={this.changeAreaAtuacaoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Cargo: </label>
                                            <input placeholder="cargo" name="cargo" className="form-control" 
                                                value={this.state.cargo} onChange={this.changeCargoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Tempo Experiência: </label>
                                            <input placeholder="tempoExperiencia" name="tempoExperiencia" className="form-control" 
                                                value={this.state.tempoExperiencia} onChange={this.changeTempoExperienciaHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateRequisitos}>Salvar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateRequisitosComponent;