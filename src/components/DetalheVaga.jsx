import foto from '../images/vagas/1.png';
import { useEffect, useState } from "react";
import api from '../services/api';
import '../styles/vagas.css';
import { useParams } from 'react-router-dom';

export const DetalheVaga = () => { 
    const [vaga, setVaga] = useState([]);

    var { id } = useParams();    
   /* var splits = {id}.split('/');
    var vagaId = splits[splits.length-1];

    useEffect(() => {
        api.get('Vaga/'+vagaId).then(response => {
            setVaga(response.data);
        })
    }); */

    useEffect(() => {
        api.get({id}).then(response => {
            setVaga(response.data);
        })
    });      

    return (
        <div classNameName='container'>
            <div className="card mb-3 vagas-mae">
                <div className="row g-0">
                    <div className='col-sm'>
                        <img classNameName="img-fluid rounded-start" alt="..." src={foto} />
                    </div>
                    <div className="col-sm">
                        <div className="card-body">
                            <h5 className="card-title">{vaga.titulo}</h5>
                            <p className="card-text">{vaga.cargo}</p>
                            <p className="card-text">R$ {vaga.salario}</p>
                            <p className="card-text">{vaga.descricao}</p>
                            <p className="card-text">{vaga.beneficios}</p>
                            <p className="card-text">{vaga.formacao}</p>
                            <p className="card-text">{vaga.requisitos}</p>
                            <p className="card-text"><small className="text-muted">{vaga.dataInicioInscricao} - {vaga.dataFimInscricao}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

