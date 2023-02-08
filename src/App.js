import React, { Component } from 'react';
import Home from './views/Home';
import Nav from './components/Nav';
import News from './views/News';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Feed from './views/Feed';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      test: 0,
      age: 9000,
      user:{
        token:'fddsajkldsajkl',
        username:'fhdskjhfsjkhfsd'
      }
    }
  }

  happyBirthday=()=> {
    console.log('button was clicked')
    //this.state.age += 1 // this way is incorrect
    // instead use setter method
    this.setState({age: this.state.age + 1})
}

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />

          <Routes>
            <Route path='/' element={<Home testVar={this.state.test} x='5000' age = {this.state.age} happyBirthday={this.happyBirthday}/>}/>
            <Route path='/news' element={<News age={this.state.age}/>}/>
            <Route path='/feed' element={<Feed />}/>
          </Routes>

        </div>
      </BrowserRouter>
    )
  }
}

