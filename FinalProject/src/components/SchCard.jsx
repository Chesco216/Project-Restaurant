import React from 'react'
import "./SchCard.css"
export const SchCard = (props) => {
    const locations =props.locations
  return (
    <div className='card-sch-container'>
        <h2>{locations.zona}</h2>
        <h3>{locations.horario}</h3>
    </div>
  )
}