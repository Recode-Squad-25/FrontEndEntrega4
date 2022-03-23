import React, { Component } from 'react';

class Curriculo extends Component {
    render() {
        return (
            <div className='contaniner text-warning'>
                <h2 className="card-title text-center">Currículo</h2>
                <div className='row'>
                    <div class="col card border-warning mb-3 vagas-btn p-3 mb-2 bg-dark" style={{ width: "18rem" }}>
                        <div className="card-header">
                            Dados Pessoal
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">nome</h5>
                            <p className="card-text">sobrenome</p>
                            <p className="card-text">nomeSocial</p>
                            <p className="card-text">orientacaoSexual</p>
                            <p className="card-text">identidadeGenero</p>
                            <p className="card-text">telefone</p>
                            <p className="card-text">cpf</p>
                            <p className="card-text">rg</p>
                            <p className="card-text">dataNascimento</p>
                        </div>
                        <div className="card-header">
                            Formação
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">titulo</h5>
                            <p className="card-text">nivel</p>
                            <p className="card-text">instituicao</p>
                            <p className="card-text">dataInicio</p>
                            <p className="card-text">dataFim</p>
                            <p className="card-text">caminhoImagemDiploma</p>
                        </div>
                        <div className="card-header">
                            Habilidades
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">tipo</h5>
                            <p className="card-text">nome</p>
                            <p className="card-text">nivel</p>
                            <p className="card-text">tempo</p>
                            <p className="card-text">comprovante</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Curriculo;