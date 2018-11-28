import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
            <img src={logo} className="App-logo" alt="logo" />
            </div>
          
            <div class="col-sm-12">   
            <input type="email" class="form-control" placeholder="Email"></input>
            </div>
            <div class="col-sm-12">
            <input type="password" class="form-control" placeholder="Contraseña"></input>
            </div>
          </div>
        </div>
        <br/>
        <div class="container">
          <div class="row"> 
            <div class="col-sm-12">
            <button type="button" class="btn btn-block">INGRESAR</button>
            </div>
          </div> 
        </div>
          
        
          <a
            className="App-link"
            href="www.grupoasistencia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ¿Olvidaste tu contraseña?
          </a>
          <br/>
          <div class="container">
          <div class="row">
          <div class="col-6">
          <button type="button" class="btn btn-primary btn-block"><i class="fab fa-facebook-square"></i> Sing in</button>
          </div>
          <div class="col-6">
          <button type="button" class="btn btn-danger btn-block"><i class="fab fa-google-plus-g"></i> Sing in</button>
          </div>
          </div>
          </div>
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
