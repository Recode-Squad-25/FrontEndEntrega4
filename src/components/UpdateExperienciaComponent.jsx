import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

class UpdateExperienciaComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            titulo: '',
            cargo: '',
            empresa: '',
            dataInicio: '',
            dataFim: '',
            descricaoAtividades: ''
        }
        this.changeTituloHandler = this.changeTituloHandler.bind(this);
        this.changeCargoHandler = this.changeCargoHandler.bind(this);
        this.changeEmpresaHandler = this.changeEmpresaHandler.bind(this);
        this.changeDataInicioHandler = this.changeDataInicioHandler.bind(this);
        this.changeDataFimHandler = this.changeDataFimHandler.bind(this);
        this.changeDescricaoAtividadesHandler = this.changeDescricaoAtividadesHandler.bind(this);
        this.updateExperiencia = this.updateExperiencia.bind(this);
    }

    componentDidMount(){
        api.getExperienciaById(this.state.id).then( (res) =>{
            let experiencia = res.data;
            this.setState({
                titulo: experiencia.titulo,
                    cargo: experiencia.cargo,
                    empresa : experiencia.empresa,
                    dataInicio : experiencia.dataInicio,
                    dataFim : experiencia.dataFim,
                    descricaoAtividades : experiencia.descricaoAtividades
            });
        });
    }

    updateExperiencia = (e) => {
        e.preventDefault();
        let experiencia = {titulo: this.state.titulo, cargo: this.state.cargo, empresa: this.state.empresa, dataInicio: this.state.dataInicio, dataFim: this.state.dataFim, descricaoAtividades: this.state.descricaoAtividades};
        console.log('experiencia => ' + JSON.stringify(experiencia));
        console.log('id => ' + JSON.stringify(this.state.id));
        api.updateExperiencia(experiencia, this.state.id).then( res => {
            this.props.history.push('/experiencias');
        });
    }
    
    changeTituloHandler= (event) => {
        this.setState({titulo: event.target.value});
    }

    changeCargoHandler= (event) => {
        this.setState({cargo: event.target.value});
    }

    changeEmpresaHandler= (event) => {
        this.setState({empresa: event.target.value});
    }

    changeDataInicioHandler= (event) => {
        this.setState({dataInicio: event.target.value});
    }

    changeDataFimHandler= (event) => {
        this.setState({dataFim: event.target.value});
    }

    changeDescricaoAtividadesHandler= (event) => {
        this.setState({descricaoAtividades: event.target.value});
    }

    cancel(){
        this.props.history.push('/experiencias');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Atualizar Experiencia</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Titulo: </label>
                                            <input placeholder="titulo" name="titulo" className="form-control" 
                                                value={this.state.titulo} onChange={this.changeTituloHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Cargo: </label>
                                            <input placeholder="cargo" name="cargo" className="form-control" 
                                                value={this.state.cargo} onChange={this.changeCargoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Empresa: </label>
                                            <input placeholder="empresa" name="empresa" className="form-control" 
                                                value={this.state.empresa} onChange={this.changeEmpresaHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Data Inicio: </label>
                                            <input type="date" name="dataInicio" value={this.state.dataInicio} onChange={this.changeDataInicioHandler}/>                                            
                                        </div>
                                        <div className = "form-group">
                                            <label> Data Fim: </label>
                                            <input type="date" name="dataFim" value={this.state.dataFim} onChange={this.changeDataFimHandler}/>                                            
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateExperiencia}>Atualizar</button>
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


export default UpdateExperienciaComponent;