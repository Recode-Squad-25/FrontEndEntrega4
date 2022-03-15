import React, { Component } from 'react';
import EnderecoService from '../services/EnderecoService';

class ViewEnderecoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            endereco: {}
        }
    }

    componentDidMount(){
        EnderecoService.getEnderecoById(this.state.id).then( res => {
            this.setState({endereco: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detalhe Endereço</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> CEP: </label>
                            <div> { this.state.endereco.cep}</div>
                        </div>
                        <div className = "row">
                            <label> Rua: </label>
                            <div> { this.state.endereco.rua}</div>
                        </div>
                        <div className = "row">
                            <label> Número: </label>
                            <div> { this.state.endereco.numero}</div>
                        </div>
                        <div className = "row">
                            <label> Complemento: </label>
                            <div> { this.state.endereco.complemento}</div>
                        </div>
                        <div className = "row">
                            <label> Bairro: </label>
                            <div> { this.state.endereco.bairro}</div>
                        </div>
                        <div className = "row">
                            <label> Cidade: </label>
                            <div> { this.state.endereco.cidade}</div>
                        </div>
                        <div className = "row">
                            <label> UF: </label>
                            <div> { this.state.endereco.uf}</div>
                        </div>
                        <div className = "row">
                            <label> País: </label>
                            <div> { this.state.endereco.pais}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEnderecoComponent;