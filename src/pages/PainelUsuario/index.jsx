import React from 'react';
import CardVagas from '../../components/CardVagaUsuarioComponent';
import '../../styles/vagas.css';
import avatar from '../../images/avatares/avatar1.png';
import Curriculo from '../../components/Curriculo';

export const PainelUsuario = () => {
    return (
        <>
            <div className="container-fluid vagas-mae text-white">
                <div className="container wrap-vagas d-block">
                    <div className='vagas-h3'>
                        <img className="img-fluid" style={{ maxWidth: "10rem" }} src={avatar} alt='Ana Vilella Sousa' />
                        <h3>SEJA BEM-VINDA - Ana Vilella Sousa</h3>
                        <p>Porcentagem das informações do seu perfil:</p>
                        <div class="progress">
                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: "50%", valuenow: "50", valuemin: "0", valuemax: "100" }}>50%</div>
                        </div>
                        <br/><br/>
                        <div className='row'>                            
                            <button className="btn btn-outline-warning vagas-btn" type="submit">Atualize seu perfil: adicione skills, atualize seu último CV. </button>
                        </div>
                        <br/><br/>
                    </div>
                    <Curriculo />
                    <CardVagas />
                </div>
                
            </div>
            
        </>

    );
};

export default PainelUsuario;