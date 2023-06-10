import React from 'react'
import Card from "./Card";
import pedidos from "../assets/pedidos.json"
import './Contenedor.css'
export const Contenedor = () => {
    
    const pedidosFiltrados = pedidos.filter(pedido => pedido.nombre === 'Mexicana');
  return (
    <div className='con'>
        {
            pedidosFiltrados.map((pedido) =>{
                return <Card pedido={pedido} key={pedido.id}/>
            })
        }
    </div>
  )
}

export default Contenedor