import React from 'react';
import '../../styles/vagas.css'


export const Vagas = () => {
    return (
            <>
                <div className="container-fluid vagas-mae">
                    <div class="container wrap-vagas d-block">
                            <div className='vagas-h3 text-white'>
                                <h3>Busque por vagas</h3>
                            </div>
                            <form class="vagas-form d-block d-lg-flex text-center">
                                <input class="form-control me-2" type="search" placeholder="ex: 'Programação'" aria-label="Search" />
                                <button class="btn btn-outline-warning vagas-btn" type="submit">Pesquisar</button>
                            </form>
                        </div>
                    </div>
                
            </>
        
    );
};

export default Vagas;
