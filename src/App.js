import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {
  constructor(working){
    super(working);
    this.state = {
      working: false
    };
    this.handleClick= () => {
      this.setState({ working: !this.state.working });
    };
  }
  render() {
    const work = this.state.working ? 'true' : 'false';
    const turn = this.state.working ? 'App-logo' : 'App-logo2';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={turn} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Lamp on />
        <Lamp />
        <button
            onClick={this.handleClick} 
            className={work}>{work.toUpperCase()}
        </button>
        <Quotes />
      </div>
    );
  }
}

export default App;
