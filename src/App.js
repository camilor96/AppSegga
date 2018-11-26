import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text"></input>
          <br/>
          <input type="text"></input>
          <br/>
          <button>INGRESAR</button>
          <a
            className="App-link"
            href="www.grupoasistencia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ¿Olvidaste tu contraseña?
          </a>
          <br/>
          <button>Sing in</button>
          <br/>
          <button>Sing in</button>
          <br/>
          <span>¿Aún no tienes cuenta? <a
            className="App-link"
            href="www.grupoasistencia.com"
            target="_blank"
            rel="noopener noreferrer">
            Registrate</a></span>
            <a
            className="App-link"
            href="www.grupoasistencia.com"
            target="_blank"
            rel="noopener noreferrer">
            Términos y condiciones</a>
            
          
        </header>
      </div>
    );
  }
}

export default App;
