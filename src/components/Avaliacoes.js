import React from 'react'
import CarouselAvaliacoes from './CarouselAvaliacoes'
import '../css/avaliacoes.css'
const Avaliacoes = () => {
  return (
    <div id='avaliacoes' className='avaliacoes'>
      <h1></h1>
      <div className='container'>
          <div className='avaliacoes-content'>
              <CarouselAvaliacoes/>
          </div>
      </div>
    </div>
  )
}

export default Avaliacoes