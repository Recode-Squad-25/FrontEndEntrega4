import React from 'react';
import '../../styles/vagas.css'

import itau from '../../images/vagas/itaulogo.webp'
import ipiranga from '../../images/vagas/ipirangalogo.png'
import localiza from '../../images/vagas/localiza.jpg'



export const Vagas = () => {
    return (
            <>
                <div className="container-fluid vagas-mae">
                    <div className="container wrap-vagas d-block">
                            <div className='vagas-h3 text-white'>
                                <h3>Busque por vagas</h3>
                            </div>
                            <form class="vagas-form d-block d-lg-flex text-center">
                                <input class="form-control me-2" type="search" placeholder="ex: 'Programação'" aria-label="Search" />
                                <button class="btn btn-outline-warning vagas-btn" type="submit">Pesquisar</button>
                            </form>
                        </div>
                    </div>


            <div className="container-fluid main">
            <div className='main-submain'>
                <div className='row main-submain-text text-center'>
                    <h2>Vagas Disponíveis</h2>
                </div>
                <div className='row empresa-item justify-content-around'>
                    <div className='card text-center'>
                        <h2>Itáu</h2>
                        <br />
                        <img src={itau} alt="Itaú"  />
                        <hr />
                        <br />
                        <button class="btn btn-outline-warning vagas-btn" type="submit"><a href="/itau">Saiba Mais</a></button>
                    </div>
                    <div className='card text-center'>
                    <h2>Ipiranga</h2>
                        <img src={ipiranga} alt="Ipiranga" />
                        <hr />
                        <br />
                        <button class="btn btn-outline-warning vagas-btn" type="submit"><a href="/ipiranga">Saiba Mais</a></button>
                    </div>
                    <div className='card text-center'>
                    <h2>Localiza</h2>
                        <img src={localiza} alt="Localiza" />
                        <hr />
                        <br />
                        <button class="btn btn-outline-warning vagas-btn" type="submit"><a href="/localiza">Saiba Mais</a></button>
                    </div>
                </div>
                
            </div>
        </div>
                
            </>
        
    );
};

export default Vagas;
