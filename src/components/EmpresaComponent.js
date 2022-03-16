import React, { Component } from 'react';
import EmpresaService from '../services/EmpresaService';

class EmpresaComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            empresa: []
        }
    }

    componentDidMount() {
        EmpresaService.getEmpresa().then((res) => {
            this.setState({ empresa: res.data })
        });
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
                            this.state.empresa.map(
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
    };
};

export default EmpresaComponent;