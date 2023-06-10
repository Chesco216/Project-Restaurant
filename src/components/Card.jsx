import React from 'react'
import './Card.css'
export const Card = (props) => {
    const pedido = props.pedido;
    return (
        <div className='Card'>
            <span>{pedido.nombre}</span>
            <h1>{pedido.Tam}</h1>
            <img src={pedido.imagen} alt="" />
            <h3>Ingredientes</h3>
            <p>{pedido.ingredientes}</p>
            <button>Añadir al carrito</button>
                 

              
        </div> 
    )
}

export default Card