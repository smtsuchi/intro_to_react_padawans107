import React, { Component } from 'react';
import Home from './Home';
import Nav from './Nav'
import News from './News';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      test: 0
    }
  }

  render() {
    return (
      <div>
        <Nav/>
        
        {/* <Home testVar = {this.state.test} x='5000'/> */}
        {/* <News /> */}

      </div>
    )
  }
}

