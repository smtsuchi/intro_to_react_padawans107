import React, { Component, useState } from 'react'
import { Navigate } from 'react-router-dom';
import CheckboxList from '../components/CheckBoxList'

export default class ToDo extends Component {
    constructor(){
        super();
        this.state = {
            redirect:false
        }
    }

    
    

    render() {
        if (this.state.redirect === true) {
            return <Navigate to='/somewhere' />
        }

        return (
            <div>
                <form onSubmit={this.props.handleToDoSubmit}>
                    <input placeholder='Add a To Do Item' name='myText'/>
                    <button type='submit'>Add</button>
                </form>



                <CheckboxList myList = {this.props.myList} deleteToDo={this.props.deleteToDo}/>

            </div>
        )
    }
    
}
