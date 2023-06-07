import React from 'react'
import "./Horarios.css"

import { ShCardsContainer } from '../components/ShCardsContainer'

import { PediHeader } from '../components/PediHeader'

export const Horarios = () => {
  return (
    <div className='appl'>
        <PediHeader title="Horarios"/>
        {/*<ShCardsContainer/>
        <SchCard/>*/}
        <ShCardsContainer/>
    </div>
  )
}