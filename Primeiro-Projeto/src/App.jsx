import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './Contador'

function App() {
  

  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1 style={{color: 'orange'}}> Primeiro-Projeto React </h1>

      <p>Este é um projeto desenvolvido em React <br />utilizando  <strong>Vite</strong> +
       <strong> SWC</strong> como ferramenta de build. </p>

      <div style={{color: 'orange'}}>
         <h2>Objetivo</h2>
      </div>
        
        <p>O Objetivo é servir como ponto de partida para aprender os conceitos fundamentais do 
          React.
        </p>
     
      <Contador />
    </div>
   
     
  )
}

export default App
