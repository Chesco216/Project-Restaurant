import React, { useEffect, useState } from 'react'
import './PF1.css'

function PF1 ({mostrar2, textoBoton}){
    const [tam, setTamanio] = useState({textoBoton});
    useEffect(() => {
       // const textLength = textoBoton.length;
        if(textoBoton === 'Quitar'){
            setTamanio('1');
        } else{
            setTamanio('2')
        }
    }, [textoBoton]);
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
                
                 <button className={`pedido-${tam}`}> {textoBoton} </button>
                 {mostrar2 && <button className='more'>+1</button>}
             </div>
        </div>
       )
}


export default PF1