import React from 'react'
import "./Horarios.css"
import { SchHeader } from '../components/SchHeader'
import { ShCardsContainer } from '../components/ShCardsContainer'
import { SchCard } from '../components/SchCard'

export const Horarios = () => {
  return (
    <div className='appl'>
        <SchHeader/>
        {/*<ShCardsContainer/>
        <SchCard/>*/}
        <ShCardsContainer/>
    </div>
  )
}