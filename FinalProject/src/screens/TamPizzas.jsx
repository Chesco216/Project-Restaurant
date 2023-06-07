import React from 'react'
import C1 from '../components/Header'
import { ButtonsTContainer } from '../components/ButtonsTContainer'
import { PizzaEncabezado } from '../components/PizzaEncabezado'

export const TamPizzas = () => {
  return (
    <div className='apT'>
            <C1/>
            <PizzaEncabezado/>
            <ButtonsTContainer/>            
    </div>
  )
}
