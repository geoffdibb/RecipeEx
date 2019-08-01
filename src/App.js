import React, { Component } from 'react';
import './App.css';


import Header from "./Header";
export class App extends Component {

  render() {
    return (
      <div  style={{ display: 'flex', justifyContent: 'center', backgroundColor: "black", color: "white" }}>
        <Header />

        
      </div>
    );
  }


}

export default App;