import React from 'react'

export default function SignUp() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        const reqBody = {
            username: username,
            email: email,
            password: password
        }

        const url = 'http://localhost:5000/api/signup'
        const options = {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": 'application/json'
            }
        }
        if (password!== confirmPassword) {
            console.log('oops password dont match')
        }

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)

    };




    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input name='username' />
                <input name='email' />
                <input name='password' type='password'/>
                <input name='confirmPassword' type='password'/>
                <button type='submit'>Sign Up</button>


            </form>



        </div>
    )
}
