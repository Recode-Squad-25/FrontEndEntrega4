import React from 'react'
import '../styles/footer.css'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share'
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer bg-dark text-white pt-5 pb-4 '>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 col-lg-3 col-xl-3 mx-auto mt-3'>

                        <div className='text-uppercase mb-4 font-weight-bold text-warning text-center'>
                            <h4>Colore</h4>

                        </div>
                        <div className='d-flex text-center'>
                            <p>Colore é uma organização que visa disseminar a diversidade dentro das empresas, permitindo o pioneirismo das mesmas no desenvolvimento social, incluindo pessoas LGBTQIA +</p>
                        </div>



                    </div>
                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <div className='row text-center mt-auto'>
                            <div className='text-uppercase mb-4 font-weight-bold text-warning text-center'>
                                <h4>Nossos Serviços</h4>
                            </div>
                        </div>

                        <div className='row text-center mt-auto'>
                            <div className='font-weight-bold'>
                                <Link to='/login' className="nav-link">Login</Link>
                            </div>
                        </div>

                        <div className='row text-center mt-auto'>
                            <Link to='/vagas' className="nav-link">Vagas</Link>
                        </div>

                        <div className='row text-center mt-auto'>
                            <Link to='/empresas' className="nav-link">Empresas</Link>
                        </div>

                        <div className='row text-center mt-auto'>
                            <Link to='/contato' className="nav-link">Contato</Link>
                        </div>

                        <div className='row text-center mt-auto'>
                            <Link to='/sobre' className="nav-link">Sobre</Link>
                        </div>
                        <div className='d-flex text-center'>
                            <FacebookShareButton
                                url={'https://coloreentrega3.azurewebsites.net/'}
                                quote={"colore website"}
                                hashtag='#colore'
                            >
                                <FacebookIcon className='mx-3 rounded-circle fot-icon' size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={'https://coloreentrega3.azurewebsites.net/'}
                                quote={"colore website"}
                                hashtag='#colore'
                            >
                                <TwitterIcon className='mx-3 rounded-circle fot-icon' size={36} />
                            </TwitterShareButton>
                            <WhatsappShareButton
                                url={'https://coloreentrega3.azurewebsites.net/'}
                                quote={"colore website"}
                                hashtag='#colore'
                            >
                                <WhatsappIcon className='mx-3 rounded-circle fot-icon' size={36} />
                            </WhatsappShareButton>
                            <LinkedinShareButton
                                url={'https://coloreentrega3.azurewebsites.net/'}
                                quote={"colore website"}
                                hashtag='#colore'
                            >
                                <LinkedinIcon className='mx-3 rounded-circle fot-icon' size={36} />
                            </LinkedinShareButton>
                        </div>


                    </div>
                    <div className='col-md-5 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <div className='text-uppercase mb-4 font-weight-bold text-warning text-center'>
                            <h4>Nosso Endereço</h4>
                        </div>

                        <div className='d-flex  text-center'>
                            <h6>São Paulo, 14015-040, Brazil</h6>
                        </div>

                        <div className='d-flex text-center'>
                            <h6>E-mail: colore@gmail.com</h6>
                        </div>

                        <div className='d-flex text-center'>
                            <h6>Número: +11 4002-8922</h6>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <p className='pt-3 text-center'>Copyright&copy;
                        {new Date().getFullYear()}&nbsp;Brasil | Todos os Direitos Reservados
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;