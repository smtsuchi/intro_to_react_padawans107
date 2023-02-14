import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs'

export default class Nav extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/news">News</Link>
                            <Link className="nav-link" to="/feed">Instagram</Link>
                            <Link className="nav-link" to="/todo">To Do List</Link>
                            <Link className="nav-link" to="/test">Functional Component Test</Link>
                            <Link className="nav-link" to="/shop">Shop</Link>
                            <Link className="nav-link" to="/posts/create"><AiOutlinePlus /></Link>

                            {
                            this.props.user.apitoken
                            ?
                            <>
                             <Link className="nav-link" to="/login" onClick={this.props.logMeOut}>Log Out</Link>
                             <p className='nav-link'>Hello, {this.props.user.username}</p>
                             </>
                            :
                            
                            <>

                            
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                            <Link className="nav-link" to="/login">Log In</Link>
                            
                            </>

        
                            }
                            <Link className="nav-link" to="/cart">
                                <BsFillCartFill />
                                {this.props.cart.length}|{this.props.cartTotal()}
                                </Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
};
