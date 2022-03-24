import React from 'react';
import '../../styles/sobre.css'

import whoWeAre from '../../images/sobre/whoWeAre.png'
import missao from '../../images/sobre/Team goals-amico.svg'
import visaoEValores from '../../images/sobre/Business Plan-amico.svg'

import Ana from '../../images/sobre/Ana.png'
import Joao from '../../images/sobre/Joao.png'
import Wesley from '../../images/sobre/Wesley.png'
import Juliana from '../../images/sobre/Juliana.png'
import Leonardo from '../../images/sobre/Leonardo.png'
import Luiz from '../../images/sobre/Luiz.png'


import Card from '../../components/SobreCard'


const Sobre = () => {
    return (
        <div className='container-fluid container-mae'>
      <div>

        <div className="d-flex justify-content-center align-items-center my-3">
          <div className="d-block text-center col-lg-6 container-mae-h1">
            <h1>Quem é a COLORE?</h1>
            <h4>
              <p>Colore é uma organização que visa disseminar a diversidade dentro das empresas, permitindo o pioneirismo das mesmas no desenvolvimento social, incluindo pessoas LGBTQIA +.</p>
            </h4>
          </div>
          <div className="col-lg-5 d-none d-lg-block container-mae-img">
            <img src={whoWeAre} alt="" className="img-fluid" />
          </div>
        </div>

        {/*Missão*/}
        <div className="d-block d-lg-flex justify-content-lg-around align-items-center">
          <div className="col-lg-5 px-5 text-center">
            <img style={{ minwidth: 300 }} src={missao} alt="" />
          </div>
          <div className="col-lg-6 container-mae-h2">
            <h2 className="text-center">Missão</h2>
            <h4>
              <p>Desenvolver um ambiente prático, seguro e eficiente para que empresas e seus futuros colaboradores se conheçam e construam; juntos, o caminho para a disseminação de vagas a todos os públicos.</p>
            </h4>
          </div>
        </div>

        {/*Visão e Valores*/}
        <div className="d-block d-lg-flex justify-content-lg-around align-items-center">
          <div className="col-lg-5 px-5 text-center order-lg-2">
            <img style={{ minwidth: 300 }} src={visaoEValores} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 order-lg-1 container-mae-h2-2">
            <h2 className="text-center">Visão e Valores</h2>
            <h4>
              <p className="  mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </h4>
          </div>
        </div>

        {/*Time*/}
        <div className="text-center mt-5 container-mae-time">
          <h2>Nosso Time</h2>
        </div>
        <div className='container-mae-time-ajuste1'>
          <div className='text-center container-mae-time-ajuste'>
            <div className="d-block d-md-flex text-center col-8">
              <Card FotoPessoa={Ana} NomePessoa="Ana Patrícia" funcao="Full-stack" Linkedin="https://www.linkedin.com/in/patricia-brandao-dev/" Github="https://github.com/BrandaoSt" Instagram="https://www.instagram.com/patriciabrandao7/" />
              <Card FotoPessoa={Joao} NomePessoa="João Victor" funcao="Full-Stack" Linkedin="https://www.linkedin.com/in/ssjoao2021/" Github="https://github.com/devictor4" Instagram="https://www.instagram.com/joaovtss99/" />
              <Card FotoPessoa={Juliana} NomePessoa="Juliana Mesquita" funcao="Full-Stack" Linkedin="https://www.linkedin.com/in/juliana-maria-de-sousa-mesquita/" Github="https://github.com/JulianaMariaSousaMesquita" Instagram="https://www.instagram.com/julianamesquitaoficial/" />
            </div>
          </div>
          <div className='text-center container-mae-time-ajuste'>
            <div className="d-block d-md-flex text-center teste col-8">
              <Card FotoPessoa={Leonardo} NomePessoa="Leonardo Mendonça" funcao="Full-Stack" Linkedin="https://www.linkedin.com/in/leonardoalvesm/" Github="https://github.com/LeonardFLY" Instagram="https://www.instagram.com/leonard_fly/" />
              <Card FotoPessoa={Luiz} NomePessoa="Luiz Henrique" funcao="Full-Stack" Github="https://github.com/BrandaoSt" />
              <Card FotoPessoa={Wesley} NomePessoa="Wesley Azevedo" funcao="Full-Stack" Linkedin="https://www.linkedin.com/in/wesley-de-azevedo/" Github="https://github.com/wesleyazevedo957" Instagram="https://www.instagram.com/wesley.azevedo.rj/" />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Sobre;