import React from 'react'
import PFrecuente from '../components/PFrecuente'
import PF1 from '../components/PF1'
import TopM from '../components/TopM'

function PedidosFrecuentes(){
    const mostrar2 = false;
    const textoBoton ='Volver a pedir'
    return (
        <div>
          <TopM title='Tus Pedidos Frecuentes'/> 
          <PFrecuente  mostrar2={mostrar2} textoBoton={textoBoton}/> 
        </div>
      )
}

export default PedidosFrecuentes