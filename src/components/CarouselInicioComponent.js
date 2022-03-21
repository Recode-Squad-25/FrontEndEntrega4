import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import slide1 from '../images/index/0.png'
import slide2 from '../images/index/1.png'
import slide3 from '../images/index/2.png'
import '../styles/inicio.css'

const CarouselInicio = () => {
    return (
            <Carousel className='carouselindex'
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={3000}
            >

                <div className='carouselindex-img'>
                    <img src={slide1} alt='1' />
                </div>
                <div className='carouselindex-img'>
                    <img src={slide2} alt='2' />
                </div>
                <div className='carouselindex-img'>
                    <img src={slide3} alt='3' />
                </div>
            </Carousel>
    )
}


export default CarouselInicio