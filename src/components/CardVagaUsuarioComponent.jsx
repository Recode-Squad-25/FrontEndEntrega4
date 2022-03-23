import React, { Component } from 'react';

class CardVagaUsuarioComponent extends Component {
    render() {
        return (
            <div className='contaniner text-warning'>

                <h2 className="card-title text-center">Candidaturas</h2>
                <div className='row'>
                    <div class="col card border-warning mb-3 vagas-btn p-3 mb-2 bg-dark" style={{ width: "18rem" }}>
                        <div className="card-header">Ipiranga
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Trainee Ipiranga</h5>
                            <p className="card-text">Salario R$ 6500</p>
                            <p className="card-text"> Vale Transporte - Vale refeição - Plano de saúde</p>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: "55%", valuenow: "55", valuemin: "0", valuemax: "100" }}>Compatibilidade 55%</div>
                            </div>
                            <br/>                            
                            <button class="btn btn-warning" type="button">Detalhes</button>                            
                        </div>
                    </div>

                    <div class="col card border-warning mb-3 vagas-btn p-3 mb-2 bg-dark" style={{ width: "18rem" }}>
                        <div className="card-header">AG</div>
                        <div className="card-body">
                            <h5 className="card-title">Trainee AG</h5>
                            <p className="card-text">Salario R$ 3200</p>
                            <p className="card-text"> Vale Transporte - Vale refeição</p>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: "55%", valuenow: "55", valuemin: "0", valuemax: "100" }}>Compatibilidade 55%</div>
                            </div>
                            <br/>                            
                            <button class="btn btn-warning" type="button">Detalhes</button>  
                        </div>
                    </div>

                    <div class="col card border-warning mb-3 vagas-btn p-3 mb-2 bg-dark" style={{ width: "18rem" }}>
                        <div className="card-header">TOTVS</div>
                        <div className="card-body">
                            <h5 className="card-title">Analista de sistemas Junio</h5>
                            <p className="card-text">Salario R$ 4500</p>
                            <p className="card-text"> Vale Transporte - Vale alimentação</p>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: "55%", valuenow: "55", valuemin: "0", valuemax: "100" }}>Compatibilidade 55%</div>
                            </div>
                            <br/>                            
                            <button class="btn btn-warning" type="button">Detalhes</button>  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CardVagaUsuarioComponent;