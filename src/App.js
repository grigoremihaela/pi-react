import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={temperatures: []};
  }

  componentDidMount() {
    fetch('/get/temperature')
    .then(res => {
      return res.json()
    })
    .then(temperatures => { 
      this.setState({ temperatures })
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Silo Temperature Sensor</h1>
          <p className="App-intro">by Miha</p>
          <p className="App-intro">
            {this.state.temperatures.map(temperature =>
              <div key={temperature.id}>The last read temperature is: <b>{temperature.temp}</b>°C.</div>
            )} 
          </p>
        </header>
      </div>
    );
  }
}

export default App;
