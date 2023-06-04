import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Reseñas } from './screens/Reseñas.jsx'
import { Horarios } from './screens/Horarios.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/*<App />*/}
      <Reseñas/>
      {/*<Horarios/>*/}
  </React.StrictMode>,
)
