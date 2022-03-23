import React, { Component } from 'react';
import foto1 from '../images/vagas/1.png';
import foto2 from '../images/vagas/2.png';
import foto3 from '../images/vagas/3.png';

class CardVagasComponent extends Component {

    render() {
        return (
            <div className='container'>
                <div className='row'>

                    <div className="col" style={{ maxWidth: "22rem" }}>
                        <div className="card">
                            <img className="img-fluid card-img-top" alt="..." src={foto1} />
                            <div className="card-body">
                                <h5 className="card-title">Venha fazer parte da Ipiranga  </h5>
                                <p className="card-text"> Cargo : Trainee Ipiranga - Salario: R$ 6500</p>
                                <p className="card-text"> Beneficios: Vale Transporte - Vale refeição - Plano de saúde </p>
                                <button className="btn btn-info">Detalhes</button>
                            </div>
                        </div>
                    </div>

                    <div className="col" style={{ maxWidth: "22rem" }}>
                        <div className="card">
                            <img className="img-fluid card-img-top" alt="..." src={foto2} />
                            <div className="card-body">
                                <h5 className="card-title"> Não perca essa oprotunidade Trainee AG </h5>
                                <p className="card-text"> Cargo : Trainee AG - Salario: R$ 3200</p>
                                <p className="card-text"> Beneficios: Vale Transporte - Vale refeição </p>
                                <button className="btn btn-info">Detalhes</button>
                            </div>
                        </div>
                    </div>

                    <div className="col" style={{ maxWidth: "22rem" }}>
                        <div className="card">
                            <img className="img-fluid card-img-top" alt="..." src={foto3} />
                            <div className="card-body">
                                <h5 className="card-title">Oprotunidade para Analista de sistemas</h5>
                                <p className="card-text"> Cargo : Analista de sistemas Junior - Salario: R$ 4500</p>
                                <p className="card-text"> Beneficios: Vale Transporte - Vale refeição  - Vale alimentação </p>
                                <button className="btn btn-info">Detalhes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
            </div>
        );
    }
}
export default CardVagasComponent;