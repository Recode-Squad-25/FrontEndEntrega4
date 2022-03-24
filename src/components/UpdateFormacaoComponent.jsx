import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

class UpdateFormacaoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            titulo: '',
            nivel: '',
            instituicao: '',
            dataInicio: '',
            dataFim: '',
            caminhoImagemDiploma: ''
        }
        this.changeTituloHandler = this.changeTituloHandler.bind(this);
        this.changeNivelHandler = this.changeNivelHandler.bind(this);
        this.changeInstituicaoHandler = this.changeInstituicaoHandler.bind(this);
        this.changeDataInicioHandler = this.changeDataInicioHandler.bind(this);
        this.changeDataFimHandler = this.changeDataFimHandler.bind(this);
        this.changeCaminhoImagemDiplomaHandler = this.changeCaminhoImagemDiplomaHandler.bind(this);
        this.updateFormacao = this.updateFormacao.bind(this);
    }

    componentDidMount(){
        api.getFormacaoById(this.state.id).then( (res) =>{
            let formacao = res.data;
            this.setState({firstName: formacao.firstName,
                lastName: formacao.lastName,
                emailId : formacao.emailId
            });
        });
    }

    updateFormacao = (e) => {
        e.preventDefault();
        let formacao = {titulo: this.state.titulo, nivel: this.state.nivel, instituicao: this.state.instituicao, dataInicio: this.state.dataInicio, dataFim: this.state.dataFim, caminhoImagemDiploma: this.state.caminhoImagemDiploma};
        console.log('formacao => ' + JSON.stringify(formacao));
        console.log('id => ' + JSON.stringify(this.state.id));
        api.updateFormacao(formacao, this.state.id).then( res => {
            this.props.history.push('/formacao');
        });
    }
    
    changeTituloHandler= (event) => {
        this.setState({titulo: event.target.value});
    }

    changeNivelHandler= (event) => {
        this.setState({nivel: event.target.value});
    }

    changeInstituicaoHandler= (event) => {
        this.setState({instituicao: event.target.value});
    }

    changeDataInicioHandler= (event) => {
        this.setState({dataInicio: event.target.value});
    }

    changeDataFimHandler= (event) => {
        this.setState({dataFim: event.target.value});
    }

    changeCaminhoImagemDiplomaHandler= (event) => {
        this.setState({caminhoImagemDiploma: event.target.value});
    }
    cancel(){
        this.props.history.push('/formacao');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Atualizar Formação</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Titulo: </label>
                                            <input placeholder="titulo" name="titulo" className="form-control" 
                                                value={this.state.titulo} onChange={this.changeTituloHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Nível: </label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Nível</option>
                                                <option value={this.state.nivel} onChange={this.changeNivelHandler}>Ensino Fundamental</option>
                                                <option value={this.state.nivel} onChange={this.changeNivelHandler}>Ensino Médio</option>
                                                <option value={this.state.nivel} onChange={this.changeNivelHandler}>Curso de curta duração</option>
                                                <option value={this.state.nivel} onChange={this.changeNivelHandler}>Técnico</option>                                                
                                                <option value={this.state.nivel} onChange={this.changeNivelHandler}>Bacharel</option>
                                                <option value={this.state.nivel} onChange={this.changeNivelHandler}>Licenciatura</option>
                                                <option value={this.state.nivel} onChange={this.changeNivelHandler}>Pós-graduação</option>                                                
                                            </select>
                                        </div>
                                        <div className = "form-group">
                                            <label> Instituição: </label>
                                            <input placeholder="instituicao" name="instituicao" className="form-control" 
                                                value={this.state.instituicao} onChange={this.changeInstituicaoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Data Inicio: </label>
                                            <input id="date" type="date" name="dataInicio" value={this.state.dataInicio} onChange={this.changeDataInicioHandler}/>                                            
                                        </div>
                                        <div className = "form-group">
                                            <label> Data Fim: </label>
                                            <input id="date" type="date" name="dataFim" value={this.state.dataFim} onChange={this.changeDataFimHandler}/>                                            
                                        </div>
                                        <div className = "form-group">
                                            <label> Imagem Diploma: </label>
                                            <input type="file" accept="image/*" name="caminhoImagemDiploma" value={this.state.caminhoImagemDiploma} onChange={this.changeCaminhoImagemDiplomaHandler}/>                                            
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateFormacao}>Salvar</button>
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

export default UpdateFormacaoComponent;