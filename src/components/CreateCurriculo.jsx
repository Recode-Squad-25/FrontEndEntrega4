import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

class CreateCurriculo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nome: '',
            sobrenome: '',
            nomeSocial : '',
            orientacaoSexual : '',
            identidadeGenero : '',
            telefone : '',
            cpf : '',
            rg : '',
            dataNascimento : ''          
        }
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeSobrenomeHandler = this.changeSobrenomeHandler.bind(this);
        this.changeNomeSocialHandler = this.changeNomeSocialHandler.bind(this);
        this.changeOrientacaoSexualHandler = this.changeOrientacaoSexualHandler.bind(this);
        this.changeIdentidadeGeneroHandler = this.changeIdentidadeGeneroHandler.bind(this);
        this.changeTelefoneHandler = this.changeTelefoneHandler.bind(this);
        this.changeCpfHandler = this.changeCpfHandler.bind(this);
        this.changeRgHandler = this.changeRgHandler.bind(this);
        this.changeDataNascimentoHandler = this.changeDataNascimentoHandler.bind(this);
        this.saveOrUpdateCurriculo = this.saveOrUpdateCurriculo.bind(this);
    }

       componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            api.getCurriculoById(this.state.id).then( (res) =>{
                let curriculo = res.data;
                this.setState({
                    nome: curriculo.nome,
                    sobrenome: curriculo.sobrenome,
                    nomeSocial : curriculo.nomeSocial,
                    orientacaoSexual : curriculo.orientacaoSexual,
                    identidadeGenero : curriculo.identidadeGenero,
                    telefone : curriculo.telefone,
                    cpf : curriculo.cpf,
                    rg : curriculo.rg,
                    dataNascimento : curriculo.dataNascimento
                });
            });
        }        
    }
    saveOrUpdateCurriculo = (e) => {
        e.preventDefault();
        let curriculo = {nome: this.state.nome, sobrenome: this.state.sobrenome, nomeSocial: this.state.nomeSocial,  orientacaoSexual: this.state.orientacaoSexual,  identidadeGenero: this.state.identidadeGenero,  telefone: this.state.telefone,  cpf: this.state.cpf,  rg: this.state.rg, dataNascimento: this.state.dataNascimento };
        console.log('curriculo => ' + JSON.stringify(curriculo));

        if(this.state.id === '_add'){
            api.createCurriculo(curriculo).then(res =>{
                this.props.history.push('/curriculo');
            });
        }else{
            api.updateCurriculo(curriculo, this.state.id).then( res => {
                this.props.history.push('/curriculo');
            });
        }
    }
    
    changeNomeHandler= (event) => {
        this.setState({nome: event.target.value});
    }

    changeSobrenomeHandler= (event) => {
        this.setState({sobrenome: event.target.value});
    }

    changeNomeSocialHandler= (event) => {
        this.setState({nomeSocial: event.target.value});
    }

    changeOrientacaoSexualHandler= (event) => {
        this.setState({orientacaoSexual: event.target.value});
    }
    changeIdentidadeGeneroHandler= (event) => {
        this.setState({identidadeGenero: event.target.value});
    }
    changeTelefoneHandler= (event) => {
        this.setState({telefone: event.target.value});
    }
    changeCpfHandler= (event) => {
        this.setState({nomeSocial: event.target.value});
    }
    changeRgHandler= (event) => {
        this.setState({rg: event.target.value});
    }

    changeDataNascimentoHandler= (event) => {
        this.setState({dataNascimento: event.target.value});
    }

    cancel(){
        this.props.history.push('/curriculo');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adicionar Curriculo</h3>
        }else{
            return <h3 className="text-center">Atualizar Curriculo</h3>
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
                                            <label> Nome: </label>
                                            <input placeholder="nome" name="nome" className="form-control" 
                                                value={this.state.nome} onChange={this.changeNomeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Sobrenome: </label>
                                            <input placeholder="Sobrenome" name="sobrenome" className="form-control" 
                                                value={this.state.sobrenome} onChange={this.changeSobrenomeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Nome Social: </label>
                                            <input placeholder="nomeSocial" name="nomeSocial" className="form-control" 
                                                value={this.state.nomeSocial} onChange={this.changeNomeSocialHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Orientação Sexual</option>
                                                <option value={this.state.orientacaoSexual} onChange={this.changeOrientacaoSexualHandler}>Assexual</option>
                                                <option value={this.state.orientacaoSexual} onChange={this.changeOrientacaoSexualHandler}>Bissexual</option>
                                                <option value={this.state.orientacaoSexual} onChange={this.changeOrientacaoSexualHandler}>Heterossexual</option>
                                                <option value={this.state.orientacaoSexual} onChange={this.changeOrientacaoSexualHandler}>Homossexual</option>                                                
                                                <option value={this.state.orientacaoSexual} onChange={this.changeOrientacaoSexualHandler}>Pansexual</option>
                                                <option value={this.state.orientacaoSexual} onChange={this.changeOrientacaoSexualHandler}>Outro</option>                                              
                                            </select>
                                        </div>

                                        <div className = "form-group">
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Identidade de Gênero</option>
                                                <option value={this.state.orientacaoSexual} onChange={this.changeOrientacaoSexualHandler}>Cisgênero</option>
                                                <option value={this.state.orientacaoSexual} onChange={this.changeOrientacaoSexualHandler}>Transgênero</option>
                                                <option value={this.state.orientacaoSexual} onChange={this.changeOrientacaoSexualHandler}>Não-binário</option>                                          
                                            </select>
                                        </div>

                                        <div className = "form-group">
                                            <label> Telefone: </label>
                                            <input placeholder="telefone" name="telefone" className="form-control" 
                                                value={this.state.telefone} onChange={this.changeTelefoneHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> CPF: </label>
                                            <input placeholder="cpf" name="cpf" className="form-control" 
                                                value={this.state.cpf} onChange={this.changeCpfHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> RG: </label>
                                            <input placeholder="rg" name="rg" className="form-control" 
                                                value={this.state.rg} onChange={this.changeRgHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Data Nascimento: </label>
                                            <input id="date" type="date" name="dataNascimento" value={this.state.dataNascimento} onChange={this.changeDataNascimentoHandler}/>                                            
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateCurriculo}>Salvar</button>
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

export default CreateCurriculo;