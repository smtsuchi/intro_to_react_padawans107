import React, { Component } from 'react';
import Home from './views/Home';
import Nav from './components/Nav';
import News from './views/News';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Feed from './views/Feed';
import ToDo from './views/ToDo';
import Test from './components/Test';
import Shop from './views/Shop';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      test: 0,
      age: 9000,
      myList: [],
      user: {
        token: 'fddsajkldsajkl',
        username: 'fhdskjhfsjkhfsd'
      }
    }
  }
  addToDo = (e) => {
    e.preventDefault();
    const text = e.target.myText.value
    this.setState({ myList: this.state.myList.concat([text]) })
  };
  deleteToDo = (indexToDelete) => {
    const copy = [...this.state.myList]
    copy.splice(indexToDelete, 1)
    this.setState({myList: copy})
  };

  happyBirthday = () => {
    console.log('button was clicked')
    //this.state.age += 1 // this way is incorrect
    // instead use setter method
    this.setState({ age: this.state.age + 1 })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />

          <Routes>
            <Route path='/' element={<Home testVar={this.state.test} x='5000' age={this.state.age} happyBirthday={this.happyBirthday} />} />
            <Route path='/news' element={<News age={this.state.age} />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/todo' element={<ToDo myList={this.state.myList} handleToDoSubmit={this.addToDo} deleteToDo={this.deleteToDo}/>} />
            <Route path='/test' element={<Test parentAge={this.state.age} happyBirthday={this.happyBirthday} />} />
          </Routes>

        </div>
      </Router>
    )
  }
}

