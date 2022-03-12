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

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='d-flex text-center'>
                            <p>Recife, Pernambuco CEP 50.720-100 Sala: #125</p>
                        </div>
                        <div className='d-flex text-center'>
                            <a href='tel:(81) 95555-5555'>+55(81)95555-5555</a>
                        </div>
                        <div className='d-flex text-center'>
                            <p>coloreprojeto1@gmail.com</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-2 col-sm-6'>
                        <div className='row'>

                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
                        <div className='d-flex justify-content-center text-center'>
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
                        <p className='pt-3 text-center'>Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Brasil | Todos os Direitos Reservados
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;