import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

class UpdateEnderecoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            cep: '',
            rua: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            uf: '',
            pais: ''
        }
        this.changeCepHandler = this.changeCepHandler.bind(this);
        this.changeRuaHandler = this.changeRuaHandler.bind(this);
        this.changeNumeroHandler = this.changeNumeroHandler.bind(this);
        this.changeComplementoHandler = this.changeComplementoHandler.bind(this);
        this.changeBairroHandler = this.changeBairroHandler.bind(this);
        this.changeCidadeHandler = this.changeCidadeHandler.bind(this);
        this.changeUfHandler = this.changeUfHandler.bind(this);
        this.changePaisHandler = this.changePaisHandler.bind(this);
        this.saveOrUpdateEndereco = this.saveOrUpdateEndereco.bind(this);
        this.updateEndereco = this.updateEndereco.bind(this);
    }

    componentDidMount(){
        api.getEnderecoById(this.state.id).then( (res) =>{
            let endereco = res.data;
            this.setState({
                cep: endereco.cep,
                rua : endereco.rua,
                numero : endereco.numero,
                complemento : endereco.complemento,
                bairro : endereco.bairro,
                cidade : endereco.cidade,
                uf : endereco.uf,
                pais : endereco.pais
            });
        });
    }

    updateEndereco = (e) => {
        e.preventDefault();
        let endereco = {cep: this.state.cep, rua: this.state.rua, numero: this.state.numero, complemento: this.state.complemento, bairro: this.state.bairro, cidade: this.state.cidade, uf: this.state.uf, pais: this.state.pais};
        console.log('endereco => ' + JSON.stringify(endereco));
        console.log('id => ' + JSON.stringify(this.state.id));
        api.updateEndereco(endereco, this.state.id).then( res => {
            this.props.history.push('/endereco');
        });
    }
    
    changeCepHandler= (event) => {
        this.setState({cep: event.target.value});
    }

    changeRuaHandler= (event) => {
        this.setState({rua: event.target.value});
    }

    changeNumeroHandler= (event) => {
        this.setState({numero: event.target.value});
    }
    changeComplementoHandler= (event) => {
        this.setState({complemento: event.target.value});
    }

    changeBairroHandler= (event) => {
        this.setState({bairro: event.target.value});
    }

    changeCidadeHandler= (event) => {
        this.setState({cidade: event.target.value});
    }

    changeUfHandler= (event) => {
        this.setState({uf: event.target.value});
    }

    changePaisHandler= (event) => {
        this.setState({pais: event.target.value});
    }

    cancel(){
        this.props.history.push('/endereco');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Atualizando Endereço</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> CEP: </label>
                                            <input placeholder="cep" name="cep" className="form-control" 
                                                value={this.state.cep} onChange={this.changeCepHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Rua: </label>
                                            <input placeholder="rua" name="rua" className="form-control" 
                                                value={this.state.rua} onChange={this.changeRuaHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Número: </label>
                                            <input placeholder="numero" name="numero" className="form-control" 
                                                value={this.state.numero} onChange={this.changeNumeroHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Complemento: </label>
                                            <input placeholder="complemento" name="complemento" className="form-control" 
                                                value={this.state.complemento} onChange={this.changeComplementoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Bairro: </label>
                                            <input placeholder="bairro" name="bairro" className="form-control" 
                                                value={this.state.bairro} onChange={this.changeBairroHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Cidade: </label>
                                            <input placeholder="cidade" name="cidade" className="form-control" 
                                                value={this.state.cidade} onChange={this.changeCidadeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> uf: </label>
                                            <input placeholder="uf" name="uf" className="form-control" 
                                                value={this.state.uf} onChange={this.changeUfHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> País: </label>
                                            <input placeholder="pais" name="pais" className="form-control" 
                                                value={this.state.pais} onChange={this.changePaisHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEndereco}>Salvar</button>
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

export default UpdateEnderecoComponent;