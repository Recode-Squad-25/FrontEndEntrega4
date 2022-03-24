import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

class UpdateHabilidadesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            tipo: '',
            nome: '',
            nivel: '',
            tempo: '',
            caminhoImagemComprovante: ''
        }
        this.changeTipoHandler = this.changeTipoHandler.bind(this);
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeNivelHandler = this.changeNivelHandler.bind(this);
        this.changeTempoHandler = this.changeTempoHandler.bind(this);
        this.changeCaminhoImagemComprovanteHandler = this.changeCaminhoImagemComprovanteHandler.bind(this);
        this.updateHabilidades = this.updateHabilidades.bind(this);
    }

    componentDidMount(){
        api.getHabilidadesById(this.state.id).then( (res) =>{
            let habilidades = res.data;
            this.setState({
                tipo: habilidades.tipo,
                    nome: habilidades.nome,
                    nivel : habilidades.nivel,
                    tempo : habilidades.tempo,
                    caminhoImagemComprovante : habilidades.caminhoImagemComprovante
            });
        });
    }

    updateHabilidades = (e) => {
        e.preventDefault();
        let habilidades = {tipo: this.state.tipo, nome: this.state.nome, nivel: this.state.nivel, tempo: this.state.tempo, caminhoImagemComprovante: this.state.caminhoImagemComprovante};
        console.log('habilidades => ' + JSON.stringify(habilidades));
        console.log('id => ' + JSON.stringify(this.state.id));
        api.updateHabilidades(habilidades, this.state.id).then( res => {
            this.props.history.push('/habilidades');
        });
    }
    
    changeTipoHandler= (event) => {
        this.setState({tipo: event.target.value});
    }

    changeNomeHandler= (event) => {
        this.setState({nome: event.target.value});
    }

    changeNivelHandler= (event) => {
        this.setState({nivel: event.target.value});
    }

    changeTempoHandler= (event) => {
        this.setState({tempo: event.target.value});
    }

    changeCaminhoImagemComprovanteHandler= (event) => {
        this.setState({caminhoImagemComprovante: event.target.value});
    }

    cancel(){
        this.props.history.push('/habilidades');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Atualizar Habilidades</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Tipo</option>
                                                <option value={this.state.tipo} onChange={this.changeTipoHandler}>Idioma</option>
                                                <option value={this.state.tipo} onChange={this.changeTipoHandler}>Curso curta duração</option>
                                                <option value={this.state.tipo} onChange={this.changeTipoHandler}>Habilidades interpessoais (Soft skills)</option> 
                                            </select>
                                        </div>
                                        <div className = "form-group">
                                            <label> Nome/Titulo da Habilidade: </label>
                                            <input placeholder="nome" name="nome" className="form-control" 
                                                value={this.state.nome} onChange={this.changeNomeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Nível</option>
                                                <option value={this.state.nivel} onChange={this.changeNivelHandler}>Básico</option>
                                                <option value={this.state.nivel} onChange={this.changeNivelHandler}>Intermediário</option>
                                                <option value={this.state.nivel} onChange={this.changeNivelHandler}>Avançado</option> 
                                            </select>
                                        </div>
                                        <div className = "form-group">
                                            <label> Tempo de duração: </label>
                                            <input placeholder="tempo" name="tempo" className="form-control" 
                                                value={this.state.tempo} onChange={this.changeTempoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Imagem Diploma: </label>
                                            <input type="file" accept="image/*" name="caminhoImagemComprovante" value={this.state.caminhoImagemComprovante} onChange={this.changeCaminhoImagemComprovanteHandler}/>                                            
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateHabilidades}>Atualizar</button>
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

export default UpdateHabilidadesComponent;