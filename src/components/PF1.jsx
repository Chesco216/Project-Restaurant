import React, { useState } from 'react';
import './PF1.css'
import PedidosFrecuentes from '../screens/PedidosFrecuentes';
//import pedido from '../assets/pedidos.json'


export const PF1 = (props) => {
    const pedido = props.pedido;
    const showButton1 = props.showButton1;
    const showButton2 = props.showButton2;
    const buttonText1 = props.buttonText1;
    const buttonText2 = props.buttonText2;
    const sumarPrecio = props.sumarPrecio;
    
    
    const handleClickButton1 = () => {
        props.onChangeButtonText1(); // Llama a la función onChangeButtonText1 desde el componente ComponenteIntermedio
      };
    
      const handleClickButton2 = () => {
        props.onToggleShowButton2(); // Llama a la función onToggleShowButton2 desde el componente ComponenteIntermedio
      };

      const buttonClass = buttonText1 === 'Texto original' ? 'Quitar' : 'Volverapedir';


      
    return (
        <div className='all'>
            <div className='F1'>
                 <img src={pedido.imagen} alt="" /> 
                 <div className='text'> 
                     <span>{pedido.nombre}</span>
                     <p>{pedido.ingredientes}</p>
                     <div className='cant'>
                         <h1>1x</h1>
                         <h2>{pedido.Tam}</h2>
                         <p>{pedido.precio}</p>
                     </div>
                 </div> 
              
                 
            </div>
            <div className='bot'>
                {showButton1 && (
            <button className = {buttonClass} onClick={handleClickButton1}>{buttonText1}</button>
            )}

                {showButton2 && (
                <button className='more' onClick={handleClickButton2}>+1</button>
            )}
            </div> 
            
                  
        </div> 
       )
}



export default PF1