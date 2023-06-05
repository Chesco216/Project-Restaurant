import { useState } from 'react'
import './App.css'
import S1 from './screens/S1'
import { Reseñas } from './screens/Reseñas';
import { Horarios } from './screens/Horarios';
import { Ubicacion } from './screens/Ubicacion';

function App() {
  return (
    <div>
      {/*<Reseñas/>*/}
       <Horarios/>
      {/*<Ubicacion/>*/}
    </div>
  );
}

export default App;
