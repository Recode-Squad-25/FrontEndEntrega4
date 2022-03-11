import React, { Component } from 'react';
import dep from '../images/index/departamentoPessoal.png'
import fin from '../images/index/financas.png'
import prog from '../images/index/programacao.png'
import tur from '../images/index/turismo.png'
import { NavLink } from 'react-router-dom'

class VagasInicioComponent extends Component {
    render() {
        return (
            <div class="d-block d-md-flex">  
                
            <div class="d-flex col-12 col-sm">
                <div>
                    <NavLink to='/vagas' className="nav-link text-dark text-center" href="/#">
                        <img src={fin} alt='Finanças' />
                        <h6>Finanças</h6>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/vagas' className="nav-link text-dark text-center" href="/#">
                        <img src={prog} alt='Programação' />
                        <h6> Programação</h6>
                    </NavLink>
                </div>
            </div>

            <div class="d-flex col-12 col-sm">
                <div >
                    <NavLink to='/vagas' className="nav-link text-dark text-center" href="/#">
                        <img src={tur} alt='Turismo' />
                        <h6>Turismo</h6>
                    </NavLink>     
                </div>
                <div >
                    <NavLink to='/vagas' className="nav-link text-dark text-center" href="/#">                    
                        <img src={dep} alt='Departamento Pessoal' />
                        <h6>Departameto pessoal</h6>
                    </NavLink>      
                </div>
            </div>
        </div>
        );
    }
}

export default VagasInicioComponent;