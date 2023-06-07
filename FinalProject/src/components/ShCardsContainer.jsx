import React from 'react'
import "./ShCardsContainer.css"
import { SchCard } from './SchCard'
import locationss from "../assets/locations.json"
export const ShCardsContainer = () => {
  return (
    <div className='Sh-Cards-container'>
        {
            locationss.map((locations)=>{
                return <SchCard locations={locations} key={locations.id}/>

            })
        }
        
    </div>
  )
}