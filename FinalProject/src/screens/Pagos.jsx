import React from 'react'
import "./Pagos.css"

import { PagoCardContainer } from '../components/PagoCardContainer'

import { PediHeader } from '../components/PediHeader'

export const Pagos = () => {
  return (
    <div className='pag'>
        <PediHeader title="Tipo de pago"/>
        <PagoCardContainer/>
    </div>
  )
} 
export default Pagos