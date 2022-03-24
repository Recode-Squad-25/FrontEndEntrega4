import React from 'react';
import './pages.css'

import itau from '../../../images/vagas/itaulogo.webp'




export const Itau= () => {
    return (
            <>
               <br />
               <br />

              <div className="d-block d-lg-flex justify-content-lg-around align-items-center">
                    <div className="col-lg-5 px-5 text-center order-lg-2">
                        <img style={{ minwidth: 300 }} src={itau} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 order-lg-1 container-mae-h2-2">
                        <h2 className="text-center">Vaga Full-Stack</h2>
                        <hr />
                        <h4>
                            <p className="mb-4">Descrição: Trabalhe em um dos maiores bancos do pais</p>
                        
                            <p className='mb-2'>Requisitos e Qualificações:</p>
                            <br />

                            <p className='mb-2'>Linguagem C#; • Net (Framework e/ou Core);</p>
                            <p className='mb-2'>Conhecimentos e ASP NET MVC; <br />ReactJS; <br />MS SQL Server;</p>
                            <br />
                            <p className='mb-2'>Diferencial Integrações REST com WebAPI; <br /> Windows Application; • Angular 2+;</p>
                            <br />
                            <p>Salário: 3200.00R$ <br /> + Vale Transporte <br /> + Vale Alimentação</p>
                            
                            <hr />
                            <button className="btn btn-primary vagas-btn" type="submit"><a href="/cadastro">Cadastre-Se</a></button>
                            <br />
                        </h4>
                    </div>
                </div>
                
            </>
        
    );
};

export default Itau;
