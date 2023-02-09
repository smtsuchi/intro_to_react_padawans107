import React, { useState, useEffect } from 'react';

export default function Test({parentAge, happyBirthday}) {

    const constructing = () => {
        console.log('i am constructing')
        return 9000
    }
    // How do we create state?!?!
    // since functions do not have attribute (no this.something)
    // react created something called a Hook
    // the two hooks we NEED to learn are useState and useEffect
    // useState()
    // useState will return 2 things, a STATE variable, and a function to UPDATE STATE
    // SYNTAX: const [myState, updateMyState] = useState(intial_state_goes_here);
    const [age, setAge] = useState(constructing);
    const [articles, setArticles] = useState([]);
    const [text, setText] = useState('');



    // How do we re-create the "Mounting" lifecycle event
    // this is where useEffect() comes in 
    // useEffect does not return anything
    // it takes in 2 arguments, a callback function and an array of dependecies
    // syntax: useEffect(  ()=>{}, []  )
    // useEffect will call the function every time something in the array changes
    useEffect(()=>{console.log('sideeffect is happening')} , [age])

    // ok.. so how does this affect mounting?
    // well, if the array is empty, nothing will ever change, so the effect runs once and only once after first render
    useEffect(()=>{console.log('THIS IS LIKE A MOUNT')} , []) // this format with an empty array is mimicking componentDidMount() from class component


    
    const handleClick = () => {
        setAge(age + 1)
    };



    
    // in a functional component,
    // whatever you return is what gets rendered
    const msgWhenRender = () => {
        console.log(' i rendered')
    };
    return (
        <div>

            {msgWhenRender()}
            My age is {age}
            <button onClick={handleClick}> + </button>

            My Parent's age is {parentAge}
            <button onClick={happyBirthday}> + </button>



        </div>
    )
}
