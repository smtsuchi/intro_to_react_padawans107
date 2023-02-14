import React, { Component, useState, useEffect } from 'react';
import Home from './views/Home';
import Nav from './components/Nav';
import News from './views/News';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Feed from './views/Feed';
import ToDo from './views/ToDo';
import Test from './components/Test';
import SignUp from './views/SignUp';
import Login from './views/Login';
import SinglePost from './views/SinglePost';
import CreatePost from './views/CreatePost';
import UpdatePost from './views/UpdatePost';
import UpdatePostClass from './views/UpdatePostClass';
import Shop from './views/Shop';
import Cart from './views/Cart';


export default function App() {
    const getUserFromLocalStorage = () => {
        const foundUser = localStorage.getItem('user107')
        if (foundUser){
            return JSON.parse(foundUser)
        }
        return {}
    };



    const [test, setTest] = useState(0);
    const [age, setAge] = useState(9000);
    const [myList, setMyList] = useState([]);
    const [user, setUser] = useState(getUserFromLocalStorage());

    const [messages, setMessages] = useState([]);

    const [cart, setCart] = useState([])


    

    const cartTotal =  () => {
        let total = 0;
        for (let item of cart) {
            total += parseFloat(item.price)
        }
        return total.toFixed(2)
    };

    const addToCart = (product) => {
        const copy = [...cart, product]
        setCart(copy)
    };
    const removeFromCart = (product) => {
        const copy = [...cart]
        for (let i = cart.length-1; i>0; i--){
            if (product.id === cart[i].id){
                copy.splice(i,1)
                break
            }
        }
        setCart(copy)
    };
    const emptyCart = () => {
        setCart([])
    };

    const logMeIn = (user) => {
        setUser(user);
        localStorage.setItem('user107', JSON.stringify(user))
    };
    const logMeOut = () => {
        setUser({});
        localStorage.removeItem('user107')
    };


    const addToDo = (e) => {
        e.preventDefault();
        const text = e.target.myText.value
        setMyList(myList.concat([text]))
    };
    const deleteToDo = (indexToDelete) => {
        const copy = [...myList]
        copy.splice(indexToDelete, 1)
        // this.setState({ myList: copy }) // class version
        setMyList(copy) // function version
    };

    const happyBirthday = () => {
        console.log('button was clicked')
        //this.state.age += 1 // this way is incorrect
        // instead use setter method
        setAge( age + 1 )
    }

    const showMessage = () => {
        return messages.map(m => <p>{m}</p>)
    }

    const getCartAPI = async (user) =>{
        if (user.apitoken){
            const url = 'http://127.0.0.1:5000/api/cart/get';
            const options = {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${user.apitoken}`
                }
            }

            const res = await fetch(url, options);
            const data = await res.json();
            if (data.status === 'ok') {
                setCart(data.cart)
            }

        } else {
            setCart([])
        }
    };

    useEffect(()=>{
        getCartAPI(user)
    }, [user])

    return (
        <Router>
            <div>
                <Nav user={user} logMeOut={logMeOut} cart={cart} cartTotal={cartTotal}/>
                {showMessage()}
                <Routes>
                    <Route path='/' element={<Home testVar={test} x='5000' age={age} happyBirthday={happyBirthday} />} />
                    <Route path='/news' element={<News age={age} />} />
                    <Route path='/feed' element={<Feed />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<Login logMeIn={logMeIn}/>} />
                    <Route path='/todo' element={<ToDo myList={myList} handleToDoSubmit={addToDo} deleteToDo={deleteToDo} />} />
                    <Route path='/test' element={<Test parentAge={age} happyBirthday={happyBirthday} />} />


                    <Route path='/shop' element={<Shop addToCart={addToCart} user={user} setMessages={setMessages} />} />
                    <Route path='/cart' element={<Cart removeFromCart={removeFromCart} user={user} cart={cart} />} />

                    <Route path='/posts/:postId' element={<SinglePost user={user}/>} />
                    <Route path='/posts/update/:postId' element={<UpdatePostClass user={user}/>} />
                    <Route path='/posts/create' element={<CreatePost user={user}/>} />
                </Routes>

            </div>
        </Router>
    )

}

