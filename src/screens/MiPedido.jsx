import React from 'react'
import PFrecuente from '../components/PFrecuente'
import PF1 from '../components/PF1'
import TopM from '../components/TopM'

function MiPedido(){
    const mostrar2 = true;
    const textoBoton = 'Quitar'
    return (
        <div>
          <TopM title='Mi Pedido'/> 
          <PFrecuente  mostrar2={mostrar2} textoBoton={textoBoton}/> 
        </div>
      )
}

export default MiPedido