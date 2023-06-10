import React from 'react'
import './PFrecuente.css'
import PF1 from './PF1'
import pedidos from '../assets/pedidos.json'



export const PFrecuente = (props) =>{
  const { showButton1, showButton2, buttonText1, onChangeButtonText1, onToggleShowButton2, showTotal } = props;
  const total = pedidos.reduce((accumulator, pedido) => {
    const precioNumerico = parseFloat(pedido.precio.replace(/[^0-9.-]+/g, ''));
    return accumulator + precioNumerico;
  }, 0);

  
  return (
    <section className='Back'>
      {
        pedidos.map((pedido) =>{
          return <PF1 pedido = {pedido} key = {pedido.id}
          showButton1={showButton1}
          showButton2={showButton2}
          buttonText1={buttonText1}
          buttonText2="Botón 2"
          onChangeButtonText1={onChangeButtonText1}
          onToggleShowButton2={onToggleShowButton2}
          
          />
        })

      }
      {showTotal && (
        <div className="Total">
          <h1>Total:       {total.toFixed(2)}Bs.</h1>
          <button>Recojer en local</button>
        </div>
      )}
        
    </section>
  )
}
export default PFrecuente