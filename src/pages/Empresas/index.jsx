import React from 'react';
import '../../styles/empresas.css'
import empresa1 from '../../images/assets/asset_itau.jpg'
import empresa2 from '../../images/assets/asset_ipiranga.png'
import empresa3 from '../../images/assets/asset_localiza.png'
import empresa4 from '../../images/empresas/recode.jpg'
import empresa5 from '../../images/assets/asset_senac.png'
import empresa6 from '../../images/assets/icon_mobile.png'

const Empresas = () => {
    return (
        <div className="container-fluid main">
            <div className='main-submain'>
                <div className='row main-submain-text text-center'>
                    <h2>Empresas parceiras</h2>
                </div>
                <div className='row empresa-item justify-content-around d-block d-sm-flex'>
                    <div className='col mt-5 empresa-item-img1'>
                        <img src={empresa1} alt="Itaú"  />
                    </div>
                    <div className='col mt-5 empresa-item-img2'>
                        <img src={empresa2} alt="Ipiranga" />
                    </div>
                    <div className='col empresa-item-img3'>
                        <img src={empresa3} alt="Localiza" />
                    </div>
                </div>
                <div className='row empresa-item mb-d-block'>
                    <div className='col empresa-item-img4'>
                        <img src={empresa4} alt="Recode" />
                    </div>
                    <div className='col empresa-item-img5'>
                        <img src={empresa5} alt="Senac" />
                    </div>
                    <div className='col empresa-item-img6'>
                        <img src={empresa6} alt="Colore" />
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Empresas;