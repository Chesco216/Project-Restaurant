import React from 'react'
import MetPagos from '../assets/MetPagos.json'
import PagoCard from './PagoCard'
import './PagoCardContainer'

const PagoContainer = () => {
  return (
    <div>
        <div className="Pago-Card-Container">
        {

            <div className="Pago-Card-Container img">
            {
                MetPagos.map((MetPagos) => (
                    <PagoCard img={MetPagos.img} key={MetPagos.id}/>
                ))
            }
            </div>
        }
        </div>
    </div>
  )
}

export default PagoContainer