import React from 'react'
import './PFrecuente.css'
import PF1 from './PF1'
import { render } from 'react-dom'

function PFrecuente({mostrar2, textoBoton}){
  return (
    <section className='Back'>
        <PF1 mostrar2 = {mostrar2} textoBoton={textoBoton}/>
        <PF1 mostrar2 = {mostrar2} textoBoton={textoBoton}/>
        <PF1 mostrar2 = {mostrar2} textoBoton={textoBoton}/>
        <PF1 mostrar2 = {mostrar2} textoBoton={textoBoton}/>
        <PF1 mostrar2 = {mostrar2} textoBoton={textoBoton}/>
        <PF1 mostrar2 = {mostrar2} textoBoton={textoBoton}/>
        <PF1 mostrar2 = {mostrar2} textoBoton={textoBoton}/>
        <PF1 mostrar2 = {mostrar2} textoBoton={textoBoton}/>

        
    </section>
  )
}
export default PFrecuente