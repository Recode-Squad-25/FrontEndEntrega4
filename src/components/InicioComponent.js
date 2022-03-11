import React, { Component } from 'react';
import CarouselInicio from './CarouselInicioComponent'
import VagasInicio from './VagasInicioComponent'
import '../css/inicio.css'

class InicioComponent extends Component {
    render() {
        return (
            <div className='inicio'>
                <h1></h1>
                <div className='container'>
                    <div className='inicio-content'>
                        <CarouselInicio/>
                    </div>
                </div>
                <VagasInicio/>
            </div>           
        );
    }
}

export default InicioComponent;