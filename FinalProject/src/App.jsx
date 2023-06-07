import { useState } from 'react'
import './App.css'
import S1 from './screens/S1'
import { Reseñas } from './screens/Reseñas';
import { Horarios } from './screens/Horarios';
import { Ubicacion } from './screens/Ubicacion';
import { PediHeader } from './components/PediHeader';
import { MiPedido } from './screens/MiPedido';
import { TamPizzas } from './screens/TamPizzas';

function App() {
  return (
    <div>
     {/* <TamPizzas/>*/}
      {/*<MiPedido/>*/}
     {/*<Reseñas/>*/}
      {/* <Horarios/>*/}
     <Ubicacion/>
    </div>
  );
}

export default App;
