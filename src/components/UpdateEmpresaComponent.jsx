import React, { Component } from 'react';
import EmpresaService from '../services/EmpresaService';

class UpdateEmpresaComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            email: '',
            caminhoImagem: '',
            titulo: '',
            telefone: '',
            cnpj: '',
            endereco: '',
            vagas: ''
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeCaminhoImagemHandler = this.changeCaminhoImagemHandler.bind(this);
        this.changeTituloHandler = this.changeTituloHandler.bind(this);
        this.changeTelefoneHandler = this.changeTelefoneHandler.bind(this);
        this.changeCnpjHandler = this.changeCnpjHandler.bind(this);
        this.changeCaminhoImagemHandler = this.changeCaminhoImagemHandler.bind(this);
        this.changeCaminhoImagemHandler = this.changeCaminhoImagemHandler.bind(this);
        this.updateEmpresa = this.updateEmpresa.bind(this);
    }

    componentDidMount(){
        EmpresaService.getEmpresaById(this.state.id).then( (res) =>{
            let empresa = res.data;
            this.setState({
                email: empresa.email,
                caminhoImagem: empresa.caminhoImagem,
                titulo : empresa.titulo,
                telefone : empresa.telefone,
                cnpj : empresa.cnpj,
                endereco : empresa.endereco,
                vagas : empresa.vagas
            });
        });
    }

    updateEmpresa = (e) => {
        e.preventDefault();
        let empresa = {email: this.state.email, caminhoImagem: this.state.caminhoImagem, titulo: this.state.titulo, telefone: this.state.telefone, cnpj: this.state.cnpj, endereco: this.state.endereco, vagas: this.state.vagas};
        console.log('empresa => ' + JSON.stringify(empresa));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmpresaService.updateEmpresa(empresa, this.state.id).then( res => {
            this.props.history.push('/empresas');
        });
    }
    
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeCaminhoImagemHandler= (event) => {
        this.setState({caminhoImagem: event.target.value});
    }

    changeTituloHandler= (event) => {
        this.setState({titulo: event.target.value});
    }

    changeTelefoneHandler= (event) => {
        this.setState({telefone: event.target.value});
    }

    changeCnpjHandler= (event) => {
        this.setState({cnpj: event.target.value});
    }

    changeEnderecoHandler= (event) => {
        this.setState({endereco: event.target.value});
    }

    changeVagasHandler= (event) => {
        this.setState({vagas: event.target.value});
    }

    cancel(){
        this.props.history.push('/empresas');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Atualizar Empresa</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Logo empresa: </label>
                                            <input type="file" accept="image/*" name="caminhoImagem" value={this.state.caminhoImagem} onChange={this.changeCaminhoImagemHandler}/>                                            
                                        </div>
                                        <div className = "form-group">
                                            <label> Nome empresa: </label>
                                            <input placeholder="titulos" name="titulo" className="form-control" 
                                                value={this.state.titulo} onChange={this.changeTituloHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Telefone: </label>
                                            <input placeholder="telefone" name="telefone" className="form-control" 
                                                value={this.state.telefone} onChange={this.changeTelefoneHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CNPJ: </label>
                                            <input placeholder="cnpj" name="cnpj" className="form-control" 
                                                value={this.state.cnpj} onChange={this.changeCnpjHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Endereço: </label>
                                            <input placeholder="endereco" name="endereco" className="form-control" 
                                                value={this.state.endereco} onChange={this.changeEnderecoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Vagas: </label>
                                            <input placeholder="vagas" name="vagas" className="form-control" 
                                                value={this.state.vagas} onChange={this.changeVagasHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateEmpresa}>Atualizar</button>
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


export default UpdateEmpresaComponent;