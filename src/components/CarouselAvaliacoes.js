import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import avatar4 from '../images/avatares/avatar4.png'
import avatar1 from '../images/avatares/avatar1.png'
import avatar2 from '../images/avatares/avatar2.png'
import avatar3 from '../images/avatares/avatar3.png'
import '../styles/avaliacoes.css'

const CarouselAvaliacoes = () => {
    return (
        <Carousel
            showArrows={false}
            infiniteLoop={true}
            showThumbs={true}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <>
                <img src={avatar4} alt='megan' />
                <div className='meucarousel'>
                    <h3>Megan</h3>
                    <p>Mostra um interesse verdadeiro nos usuários e em encontrar soluções para seus problemas.</p>
                </div>
            </>
            <>
                <img src={avatar1} alt='Ana' />
                <div className='meucarousel'>
                    <h3>Ana</h3>
                    <p> Mostra um interesse verdadeiro nos usuários e em encontrar soluções para seus problemas.</p>
                </div>
            </>
            <>
                <img src={avatar2} alt='pedro' />
                <div className='meucarousel'>
                    <h3>Pedro</h3>
                    <p>Mostra um interesse verdadeiro nos usuários e em encontrar soluções para seus problemas.</p>
                </div>
            </>
            <>
                <img src={avatar3} alt='Joaquim' />
                <div className='meucarousel'>
                    <h3>Joaquim</h3>
                    <p>Mostra um interesse verdadeiro nos usuários e em encontrar soluções para seus problemas.</p>
                </div>
            </>
        </Carousel>
    )
}


export default CarouselAvaliacoes