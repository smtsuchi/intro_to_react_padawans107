import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login({logMeIn}) {
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        

        const url = 'http://localhost:5000/api/login'
        const options = {
            method: "POST",
            headers: {
                Authorization: `Basic ${btoa(username+':'+password)}`
            }
        }
    

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)
        if (data.status == 'ok') {
            logMeIn(data.user) 
            navigate('/')        
        }

    };

    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <input name='username' />
                <input name='password' type='password' />
                <button type='submit'>Sign Up</button>


            </form>



        </div>
    )
}
