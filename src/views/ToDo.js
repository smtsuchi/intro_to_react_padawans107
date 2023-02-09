import React, { Component, useState } from 'react'
import CheckboxList from '../components/CheckBoxList'

export default class ToDo extends Component {
    
    

    render() {
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
