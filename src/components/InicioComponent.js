import React, { Component } from 'react';
import CarouselInicio from './CarouselInicioComponent'
import VagasInicio from './VagasInicioComponent'
import '../styles/inicio.css'

class InicioComponent extends Component {
    render() {
        return (

            <div className='container-fluid index'>
                <div className='container index-text'>
                    <div className='inicio-content'>
                        <CarouselInicio />
                    </div>
                    <div className='index-text text-center text-white'>
                        <h4>Encontre aqui a vaga que tanto deseja</h4>
                    </div>
                </div>
                <VagasInicio />
            </div>
        );
    }
}

export default InicioComponent;