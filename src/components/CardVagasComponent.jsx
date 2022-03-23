import React, { Component } from 'react';
import VagasService from '../services/VagaService';

class CardVagasComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vagas: []
        }
    }

    viewVagas(id){
        this.props.history.push(`/view-package/${id}`);
    }

    componentDidMount(){
        VagasService.getVagass().then((res) => {
            this.setState({vagas: res.data});
        });
    }

    render() {
        return (
            <>
                {                    
                    this.state.vagas.map(
                        vagas => 
                        <div className="card" style={{ maxWidth: "22rem" }} key={vagas.id}>
                        <div className="card">
                            <img  className="img-fluid card-img-top" alt="..." src="https://github.com/Recode-Squad-25/FrontEndEntrega4/blob/main/src/images/vagas/2.png" />
                            <div className="card-body">
                            <h5 className="card-title">Titulo : {vagas.title}</h5>
                            <p className="card-text"> Cargo : {vagas.cargo} - Salario: R$ {vagas.salario}</p>
                            <p className="card-text"> Beneficios: {vagas.beneficios} </p>
                            <button className="btn btn-info" onClick={() => this.viewVagas(vagas.id)}>Detalhes</button>
                            </div>
                        </div>
                        </div>                           
                    )}
            </>
        );
    }
}


export default CardVagasComponent;