import React from 'react'
import { UbicCardsContainer } from '../components/UbicCardsContainer'
import { PediHeader } from '../components/PediHeader'

export const Ubicacion = () => {
  return (
    <div className='applU'>
       <PediHeader title="Ubicación"/>
        <UbicCardsContainer/>
    </div>
  )
}