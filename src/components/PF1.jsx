import React from 'react'
import './PF1.css'

const PF1 = () => {
  return (
   <div className='all'>
        <div className='F1'>
            <img src="/images/p1.jpg" alt="" />
            <div className='text'> 
                <span>Mexicana</span>
                <p>Carne, Chorizo, Cebolla, Jalapeños.</p>
                <div className='cant'>
                    <h1>1x</h1>
                    <h2>Mediana</h2>
                    <p>64 Bs</p>
                </div>
            </div>
        </div>
        <div className='bot'>
            <button className='pedido'>Quitar</button>
            <button className='more'>+1</button>
        </div>
   </div>
  )
}

export default PF1