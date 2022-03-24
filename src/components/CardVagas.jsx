import React from 'react';
import foto from '../images/vagas/1.png';
import { useEffect, useState } from "react";
import api from '../services/api';
import { Link } from 'react-router-dom';

export const CardVagas = () => {      
      const [vagas, setVagas] = useState([])

      useEffect(() => {
        api.get('/vagas').then(response => {
            setVagas(response.data);
        })
    }, []);
        
    
        return (    
            <div className='container text-white'>
                <div className='row'>           
                {vagas.map(vaga => (
                    <div className="col" style={{ maxWidth: "22rem"}} key={vaga.id}>
                        <div className="card" style={{ backgroundColor:"black"}}>
                            <img className="img-fluid card-img-top" alt="..." src={foto} />
                            <div className="card-body">
                                <h5 className="card-title">{vaga.titulo}  </h5>
                                <p className="card-text"> {vaga.cargo} - Salario: R$ {vaga.salario}</p>
                                <p className="card-text"> Beneficios: {vaga.beneficios} </p>                                
                                <Link to={"vaga/"+vaga.id} className="btn btn-outline-warning vagas-btn">Detalhes</Link>                                
                            </div>
                        </div>
                    </div>
                ))}                 
                    
                </div>
            </div>
        );
    }