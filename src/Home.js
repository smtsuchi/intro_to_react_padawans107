import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        console.log('i was constructed')
        super();
        this.state = {
            name: 'Shoha',
            age: 9000
        }
        
        
        
    }

    componentDidMount () {
        console.log('i mounted')


    }

    
    happyBirthday=()=> {
        console.log('button was clicked')
        //this.state.age += 1 // this way is incorrect
        // instead use setter method
        this.setState({age: this.state.age + 1})
    }


    render = () => {
        console.log('i rendered')

        return (
            <div>

                <h1>This is the home page</h1>
                <h2>This is the home page of {this.state.name}</h2>
                <p>{this.state.age}</p>
                <button onClick={this.happyBirthday}>+</button>


                <p>{this.props.testVar}</p>
                <p>{this.props.x}</p>

            </div>
        )
    }
}
