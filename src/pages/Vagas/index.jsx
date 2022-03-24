import React from 'react';
import { CardVagas } from '../../components/CardVagas';
import '../../styles/vagas.css'


export const Vagas = () => {
    return (
            <>
                <div className="container-fluid vagas-mae">
                    <div className="container wrap-vagas d-block">
                            <div className='vagas-h3 text-white'>
                                <h3>Busque por vagas</h3>
                            </div>
                            <form className="vagas-form d-block d-lg-flex text-center">
                                <input className="form-control me-2" type="search" placeholder="ex: 'Programação'" aria-label="Search" />
                                <button className="btn btn-outline-warning vagas-btn" type="submit">Pesquisar</button>
                            </form>
                        </div>
                    </div>

                    <CardVagas />
                
            </>
        
    );
};

export default Vagas;
