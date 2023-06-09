import React from 'react'
import {PagoCard} from './PagoCard'
import './PagoCardContainer.css'
import { Icon } from '@iconify/react';


const PagoContainer = () => {
  return (

        <div className="Pago-Card-Container">
        <span className='pago_subtittle'>Escoger el tipo de pago</span>
        <div className='pagos-input'>
          <PagoCard subtittle="Pago por Qr"  />
          <Icon icon="bx:qr"style={{margin:"-45px 200px 0px 17px", width:"90px", height:"90px", color:"#FFD233"}} />
        </div>
        <div className='pagos-input'>
        <PagoCard subtittle="Pago por tarjeta "  />
        <Icon icon="ic:baseline-credit-card"style={{margin:"-45px 200px 0px 17px", width:"90px", height:"90px", color:"#FFD233"}} />
        </div>
        <div className='pagos-input'>
        <PagoCard subtittle="Pago por efectivo" />
        <Icon icon="ph:money-fill"style={{margin:"-45px 200px 0px 17px", width:"90px", height:"90px", color:"#FFD233"}} />
        </div>
        </div>

  )
}
export default PagoContainer
