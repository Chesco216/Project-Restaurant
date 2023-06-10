import React from 'react'
import { ButtonsTContainer } from '../components/ButtonsTContainer'
import { PizzaEncabezado } from '../components/PizzaEncabezado'
import Header from '../components/Header'

export const TamPizzas = () => {
  return (
    <div className='apT'>
            <Header />
            <PizzaEncabezado/>
            <ButtonsTContainer/>            
    </div>
  )
}
