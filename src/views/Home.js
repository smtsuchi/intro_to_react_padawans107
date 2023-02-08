import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        console.log('i was constructed')
        super();
        this.state = {
            name: 'Shoha',
            
        }
        
        
        
    }

    componentDidMount () {
        console.log('i mounted')


    }

    

    
    


    render = () => {
        console.log('i rendered')

        return (
            <div>

                <h1>This is the home page</h1>
                <h2>This is the home page of {this.state.name}</h2>
                <p>{this.props.age}</p>
                <button onClick={this.props.happyBirthday}>+</button>


                <p>{this.props.testVar}</p>
                <p>{this.props.x}</p>

            </div>
        )
    }
}
