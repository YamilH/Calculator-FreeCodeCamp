import './App.css';
import FreeCodeCampLogo from './imagenes/FreeCodeCamp_logo.svg';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import Clear from './componentes/Clear.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

const [input, setInput] = useState('');

const agregarInput = valor => {
  setInput(input + valor);
};

const calcularResultado = () => {
  if (input) {
  setInput(evaluate(input));
  } else {
    alert ("Por favor ingresar los valores primero para que funcione la calculadora")
  }
};


  return (
    <div className='App'>
    <div className='freecodecamp-logo-contenedor'>
      <img src={FreeCodeCampLogo} className='freecodecamp-logo' alt='Logo de FreeCodeCamp' />
    </div>
    <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
      <div className='fila'>
        <Boton manejarClick={agregarInput}>1</Boton>
        <Boton manejarClick={agregarInput}>2</Boton>
        <Boton manejarClick={agregarInput}>3</Boton>
        <Boton manejarClick={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClick={agregarInput}>4</Boton>
        <Boton manejarClick={agregarInput}>5</Boton>
        <Boton manejarClick={agregarInput}>6</Boton>
        <Boton manejarClick={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClick={agregarInput}>7</Boton>
        <Boton manejarClick={agregarInput}>8</Boton>
        <Boton manejarClick={agregarInput}>9</Boton>
        <Boton manejarClick={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClick={calcularResultado}>=</Boton>
        <Boton manejarClick={agregarInput}>0</Boton>
        <Boton manejarClick={agregarInput}>.</Boton>
        <Boton manejarClick={agregarInput}>/</Boton>
      </div>
      <div className='fila'></div>
        <Clear manejarClear={() => setInput('')}>C</Clear>
    </div>
    </div>
  );
}

export default App;
