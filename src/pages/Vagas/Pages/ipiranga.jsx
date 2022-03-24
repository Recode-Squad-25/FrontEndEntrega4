import React from 'react';
import './pages.css'

import ipiranga from '../../../images/vagas/ipirangalogo.png'




export const Ipiranga= () => {
    return (
            <>
               <br />
               <br />

              <div className="d-block d-lg-flex justify-content-lg-around align-items-center">
                    <div className="col-lg-5 px-5 text-center order-lg-2">
                        <img style={{ minwidth: 300 }} src={ipiranga} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 order-lg-1 container-mae-h2-2">
                        <h2 className="text-center">Analista De Planejamento e Performance</h2>
                        <hr />
                        <h4>
                            <p className="mb-4">Descrição: Já pensou em trabalhar na Ipiranga? <br /> <br /> Estamos de portas abertas para pessoas com desejo de transformação pelo trabalho, dispostas a contribuir para o crescimento e evolução da empresa. Na Ipiranga, competência não tem gênero, raça, orientação afetiva-sexual, idade ou condição física.</p>
                        
                            <p className='mb-2'>Requisitos e Qualificações:</p>
                            <br />

                            <p className='mb-2'>O que você precisa ter para conquistar essa posição? <br /> • Graduação em Completa; <br /> • Excel e Power Point Avançados; <br /> • Power Bi Intermediário; <br /> • Conhecimento em análises financeiras (DRE, EBITDA, ROI, EVA).</p>
                            
                            <br />
                            
                            <p>Salário: A Combinar <br /> + Vale Transporte</p>
                            
                            <hr />
                            <button className="btn btn-primary vagas-btn" type="submit"><a href="/cadastro">Cadastre-Se</a></button>
                            <br />
                        </h4>
                    </div>
                </div>
                
            </>
        
    );
};

export default Ipiranga;
