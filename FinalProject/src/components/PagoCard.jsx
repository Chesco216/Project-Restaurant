import React from 'react'
import './PagoCard.css'

const PagoCard = ({img}) => {
  return (
    <div className='pago-txt'>
          <h6>Escoger el tipo de pago</h6> 
        <div className='pago-cards'>
        <img src={img} alt="" />
        </div>
    </div> 
  )
}

export default PagoCard