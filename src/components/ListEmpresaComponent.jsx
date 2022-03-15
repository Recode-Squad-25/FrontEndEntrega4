import React, { Component } from 'react';
import EmpresaService from '../services/EmpresaService';

class EmpresaComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            empresas:[]
        }
        this.addEmpresa = this.addEmpresa.bind(this);
        this.editEmpresa = this.editEmpresa.bind(this);
        this.deleteEmpresa = this.deleteEmpresa.bind(this);
    }

    deleteEmpresa(id){
        EmpresaService.deleteEmpresa(id).then( res => {
            this.setState({empresas: this.state.empresas.filter(empresa => empresa.id !== id)});
        });
    }
    viewEmpresa(id){
        this.props.history.push(`/view-empresa/${id}`);
    }
    editEmpresa(id){
        this.props.history.push(`/add-empresa/${id}`);
    }

    componentDidMount(){
        EmpresaService.getEmpresas().then((res) => {
            this.setState({ empresas: res.data});
        });
    }

    addEmpresa(){
        this.props.history.push('/add-empresa/_add');
    }

    render() {
        return (
            <div>
                 <h1 className="text-center">Lista Empresas</h1>
                 <table className="table table-striped">
                     <thead>
                         <tr>
                             <td>ID</td>
                             <td>Email</td>
                             <td>Logo</td>
                             <td>Titulo</td>
                             <td>Telefone</td>
                             <td>CNPJ</td>
                             <td>Endereço</td>
                             <td>Vagas</td>
                         </tr>
                     </thead>
                     <tbody>
                         {
                            this.state.empresas.map(
                                empresa => 
                                <tr key={empresa.id}>
                                    <td>{empresa.email}</td>
                                    <td>{empresa.caminhoImagem}</td>
                                    <td>{empresa.telefone}</td>
                                    <td>{empresa.cnpj}</td>
                                    <td>{empresa.endereco}</td>
                                    <td>{empresa.vagas}</td>
                                </tr>
                             )
                         }
                     </tbody>
                 </table>                
            </div>
        );
    }
}

export default EmpresaComponent;