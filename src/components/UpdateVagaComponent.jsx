import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

class UpdateVagaComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            titulo: '',
            cargo: '',
            salario: '',
            descricao: '',
            beneficios: '',
            dataInicioInscricao: '',
            dataFimInscricao: '',
            formacao: '',
            requisitos: ''
        }
        this.changeTituloHandler = this.changeTituloHandler.bind(this);
        this.changeCargoHandler = this.changeCargoHandler.bind(this);
        this.changeSalarioHandler = this.changeSalarioHandler.bind(this);
        this.changeDescricaoHandler = this.changeDescricaoHandler.bind(this);
        this.changeBeneficiosHandler = this.changeBeneficiosHandler.bind(this);
        this.changeDataInicioInscricaoHandler = this.changeDataInicioInscricaoHandler.bind(this);
        this.changeDataFimInscricaoHandler = this.changeDataFimInscricaoHandler.bind(this);
        this.changeFormacaoHandler = this.changeFormacaoHandler.bind(this);
        this.changeRequisitosHandler = this.changeRequisitosHandler.bind(this);
        this.updateVaga = this.updateVaga.bind(this);
    }

    componentDidMount(){
        api.getVagaById(this.state.id).then( (res) =>{
            let vaga = res.data;
            this.setState({
                titulo: vaga.titulo,
                    cargo: vaga.cargo,
                    salario : vaga.salario,
                    descricao : vaga.descricao,
                    beneficios : vaga.beneficios,
                    dataInicioInscricao : vaga.dataInicioInscricao,
                    dataFimInscricao : vaga.dataFimInscricao,
                    formacao : vaga.formacao,
                    requisitos : vaga.requisitos
            });
        });
    }

    updateVaga = (e) => {
        e.preventDefault();
        let vaga = {titulo: this.state.titulo, cargo: this.state.cargo, salario: this.state.salario,  descricao: this.state.descricao, beneficios: this.state.beneficios, dataInicioInscricao: this.state.dataInicioInscricao, dataFimInscricao: this.state.dataFimInscricao, formacao: this.state.formacao, requisitos: this.state.requisitos};
        console.log('vaga => ' + JSON.stringify(vaga));
        console.log('id => ' + JSON.stringify(this.state.id));
        api.updateVaga(vaga, this.state.id).then( res => {
            this.props.history.push('/vagas');
        });
    }
    
    changeTituloHandler= (event) => {
        this.setState({titulo: event.target.value});
    }

    changeCargoHandler= (event) => {
        this.setState({cargo: event.target.value});
    }

    changeSalarioHandler= (event) => {
        this.setState({salario: event.target.value});
    }

    changeDescricaoHandler= (event) => {
        this.setState({descricao: event.target.value});
    }

    changeBeneficiosHandler= (event) => {
        this.setState({beneficios: event.target.value});
    }

    changeDataInicioInscricaoHandler = (event) => {
        this.setState({dataInicioInscricao: event.target.value});
    }

    changeDataFimInscricaoHandler = (event) => {
        this.setState({dataFimInscricao: event.target.value});
    }

    changeFormacaoHandler = (event) => {
        this.setState({formacao: event.target.value});
    }

    changeRequisitosHandler = (event) => {
        this.setState({requisitos: event.target.value});
    }

    cancel(){
        this.props.history.push('/vagas');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Atualizar Vaga</h3>
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
                                            <label> Salario: </label>
                                            <input placeholder="salario" name="salario" className="form-control" 
                                                value={this.state.salario} onChange={this.changeSalarioHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Descrição: </label>
                                            <input placeholder="descricao" name="descricao" className="form-control" 
                                                value={this.state.descricao} onChange={this.changeDescricaoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Beneficios: </label>
                                            <input placeholder="beneficios" name="beneficios" className="form-control" 
                                                value={this.state.beneficios} onChange={this.changeBeneficiosHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Data Inicio Inscrição: </label>
                                            <input type="date" name="dataInicioInscricao" className="form-control" 
                                                value={this.state.dataInicioInscricao} onChange={this.changeDataInicioInscricaoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Data Fim Inscrição: </label>
                                            <input type="date" name="dataFimInscricao" className="form-control" 
                                                value={this.state.dataFimInscricao} onChange={this.changeDataFimInscricaoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Titulo: </label>
                                            <input placeholder="titulo" name="titulo" className="form-control" 
                                                value={this.state.titulo} onChange={this.changeTituloHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Formação: </label>
                                            <input placeholder="formacao" name="formacao" className="form-control" 
                                                value={this.state.formacao} onChange={this.changeFormacaoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Requisitos: </label>
                                            <input placeholder="requisitos" name="requisitos" className="form-control" 
                                                value={this.state.requisitos} onChange={this.changeRequisitosHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateVaga}>Salvar</button>
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

export default UpdateVagaComponent;