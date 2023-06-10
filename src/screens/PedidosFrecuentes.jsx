import React, { useState } from 'react';
import PFrecuente from '../components/PFrecuente'
import PF1 from '../components/PF1'
import TopM from '../components/TopM'
import pedido from '../assets/pedidos.json'

const PedidosFrecuentes = () => {
  const [showButton1, setShowButton1] = useState(true);
  const [showButton2, setShowButton2] = useState(false);
  const [buttonText1, setButtonText1] = useState('Volver a pedir');
  const [showTotal, setShowTotal] = useState(false);
  const handleChangeButtonText1 = () => {
    setButtonText1('');
  };
    return (
      <div>
        <TopM title = 'Tus pedidos frecuentes'/>
        
        <PFrecuente
          showButton1={showButton1}
          showButton2={showButton2}
          buttonText1={buttonText1}
          onChangeButtonText1={handleChangeButtonText1}
          onToggleShowButton2={() => setShowButton2(!showButton2)}
          showTotal = {showTotal}
        />
      </div>
    )
}


export default PedidosFrecuentes