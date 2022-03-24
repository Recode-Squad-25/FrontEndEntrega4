import React from 'react';
import './pages.css'

import localiza from '../../../images/vagas/localiza.jpg'




export const Localiza= () => {
    return (
            <>
               <br />
               <br />

              <div className="d-block d-lg-flex justify-content-lg-around align-items-center">
                    <div className="col-lg-5 px-5 text-center order-lg-2">
                        <img style={{ minwidth: 300 }} src={localiza} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 order-lg-1 container-mae-h2-2">
                        <h2 className="text-center">Auxiliar De Operações</h2>
                        <hr />
                        <h4>
                            <p className="mb-4">Descrição: Somos uma empresa presente no futuro. Em nossa história, sempre trouxemos para o agora ideias que pareciam existir somente anos à frente. Enxergamos o amanhã pelas lentes do nosso espírito empreendedor.</p>
                        
                            <p className='mb-2'>Requisitos e Qualificações:</p>
                            <br />

                            <p className='mb-2'>O QUE PRECISAMOS <br /> • Ensino médio Completo <br /> • Experiencia com atendimento ao publico <br /> • Ensino superior é um diferencial <br /> • CNH categoria B no mínimo, 02 anos <br /> • Conhecimento em mecânica de automóveis <br /> • Realizar manobras com veículos</p>
                            
                            
                            <br />
                            <p>Salário: 2650.00R$ <br /> + Vale Transporte</p>
                            
                            <hr />
                            <button className="btn btn-primary vagas-btn" type="submit"><a href="/cadastro">Cadastre-Se</a></button>
                            <br />
                        </h4>
                    </div>
                </div>
                
            </>
        
    );
};

export default Localiza;
