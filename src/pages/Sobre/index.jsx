import React from 'react';
import '../../styles/sobre.css'

import whoWeAre from '../../images/sobre/whoWeAre.png'
import missao from '../../images/sobre/Team goals-amico.svg'
import visaoEValores from '../../images/sobre/Business Plan-amico.svg'

import Ana from '../../images/sobre/Ana.png'

import Card from '../../components/SobreCard'


const Sobre = () => {
    return (
        <div className="align-content-around">

            <div className="d-flex justify-content-center align-items-center my-3">
                <div className="d-block text-center col-lg-6">
                    <h1>Quem é a COLORE?</h1>
                    <h4>
                        <p>Colore é uma organização que visa disseminar a diversidade dentro das empresas, permitindo o pioneirismo das mesmas no desenvolvimento social, incluindo pessoas LGBTQIA +.</p>
                    </h4>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                    <img src={whoWeAre} alt="" className="img-fluid" />
                </div>
            </div>

            {/*Missão*/}
            <div className="d-block d-lg-flex justify-content-lg-around align-items-center">
                <div className="col-lg-5 px-5 text-center">
                    <img style={{ minwidth: 300 }} src={missao} alt="" />
                </div>
                <div className="col-lg-6">
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
                <div className="col-lg-6 order-lg-1">
                    <h2 className="text-center">Visão e Valores</h2>
                    <h4>
                        <p className="  mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </h4>
                </div>
            </div>

            {/*Time*/}
            <div className="text-center mt-5">
                <h2>Nosso Time</h2>
            </div>
            <div className="d-block d-sm-flex text-center">
                <Card FotoPessoa={Ana} NomePessoa="Ana Patrícia" funcao="Full-Stack" Linkedin="https://www.linkedin.com/in/patricia-brandao-dev/" Github="https://github.com/BrandaoSt" Instagram="https://www.instagram.com/patriciabrandao7/" />
                <Card FotoPessoa={Ana} NomePessoa="Ana Patrícia" funcao="Full-Stack" Linkedin="https://www.linkedin.com/in/patricia-brandao-dev/" Github="https://github.com/BrandaoSt" Instagram="https://www.instagram.com/patriciabrandao7/" />
            </div>
            <div className="d-block d-sm-flex text-center">
                <Card FotoPessoa={Ana} NomePessoa="Ana Patrícia" funcao="Full-Stack" Linkedin="https://www.linkedin.com/in/patricia-brandao-dev/" Github="https://github.com/BrandaoSt" Instagram="https://www.instagram.com/patriciabrandao7/" />
                <Card FotoPessoa={Ana} NomePessoa="Ana Patrícia" funcao="Full-Stack" Linkedin="https://www.linkedin.com/in/patricia-brandao-dev/" Github="https://github.com/BrandaoSt" Instagram="https://www.instagram.com/patriciabrandao7/" />
            </div>
            <div className="d-block d-sm-flex text-center">
                <Card FotoPessoa={Ana} NomePessoa="Ana Patrícia" funcao="Full-Stack" Linkedin="https://www.linkedin.com/in/patricia-brandao-dev/" Github="https://github.com/BrandaoSt" Instagram="https://www.instagram.com/patriciabrandao7/" />
                <Card FotoPessoa={Ana} NomePessoa="Ana Patrícia" funcao="Full-Stack" Linkedin="https://www.linkedin.com/in/patricia-brandao-dev/" Github="https://github.com/BrandaoSt" Instagram="https://www.instagram.com/patriciabrandao7/" />
            </div>
        </div>
    );
}

export default Sobre;