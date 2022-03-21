import React from 'react'
import CarouselAvaliacoes from '../../components/CarouselAvaliacoes'
import '../../styles/avaliacoes.css'

const Avaliacoes = () => {
  return (
    <div id='avaliacoes' className='avaliacoes'>
      <div className='container'>
          <div className='avaliacoes-content'>
              <CarouselAvaliacoes/>
          </div>
      </div>
    </div>
  )
}

export default Avaliacoes