import React, { Component } from 'react';
import dep from '../images/index/departamentoPessoal.png'
import fin from '../images/index/financas.png'
import prog from '../images/index/programacao.png'
import tur from '../images/index/turismo.png'
import { Link } from 'react-router-dom'
import '../styles/inicio.css'

class VagasInicioComponent extends Component {
    render() {
        return (
            <div className="container-fluid d-block d-md-flex vagas">

                <div className="d-flex col-sm vagas-filho">
                    <div className='vagas-neto'>
                        <Link to='/vagas' className="nav-link text-dark text-center">
                            <figure>
                            <figcaption className='text-white vagas-neto-figtext'><strong>Finanças</strong></figcaption>
                            <img src={fin} alt='Finanças' />
                            </figure>
                        </Link>
                    </div>
                    <div className='vagas-neto'>
                        <Link to='/vagas' className="nav-link text-dark text-center">
                            <figure>
                            <figcaption className='text-white vagas-neto-figtext'><strong>Programação</strong></figcaption>
                            <img src={prog} alt='Programação' />
                            </figure>
                            
                        </Link>
                    </div>
                </div>

                <div className="d-flex  col-sm vagas-filho">
                    <div className='vagas-neto'>
                        <Link to='/vagas' className="nav-link text-dark text-center">
                            <figure>
                            <figcaption className='text-white vagas-neto-figtext'><strong>Turismo</strong></figcaption>
                            <img src={tur} alt='Turismo' />
                            </figure>
                        </Link>
                    </div>
                    <div className='vagas-neto'>
                        <Link to='/vagas' className="nav-link text-dark text-center">
                            <figure>
                            <figcaption className='text-white vagas-neto-figtext'><strong>Gestão de Pessoas</strong></figcaption>
                            <img src={dep} alt='Departamento Pessoal' />
                            </figure>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default VagasInicioComponent;