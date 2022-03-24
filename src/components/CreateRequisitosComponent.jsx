import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

class CreateRequisitosComponent extends Component {
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
        this.saveOrUpdateRequisitos = this.saveOrUpdateRequisitos.bind(this);
    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
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
    }

    saveOrUpdateRequisitos = (e) => {
        e.preventDefault();
        let requisitos = {areaAtuacao: this.state.areaAtuacao, cargo: this.state.cargo, tempoExperiencia: this.state.tempoExperiencia, escolaridade: this.state.escolaridade, habilidades: this.state.habilidades};
        console.log('requisitos => ' + JSON.stringify(requisitos));

        if(this.state.id === '_add'){
            api.createRequisitos(requisitos).then(res =>{
                this.props.history.push('/requisitos');
            });
        }else{
            api.updateRequisitos(requisitos, this.state.id).then( res => {
                this.props.history.push('/requisitos');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adicionar Requisitos</h3>
        }else{
            return <h3 className="text-center">Atualizar Requisitos</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
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

                                        <button className="btn btn-success" onClick={this.saveOrUpdateRequisitos}>Salvar</button>
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
export default CreateRequisitosComponent;