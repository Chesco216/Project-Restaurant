import React from 'react'
import './PagoCard.css'

export const PagoCard = (props) => 
{
  return (
    
    <div className='pago_container'>
      <input  className="pagos-input" type="text" placeholder={props.input} />
      <span className="subtittle_metpagos">{props.subtittle}</span>
    </div>    
  
  )
}
