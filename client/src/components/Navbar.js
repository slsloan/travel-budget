// dependencies
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {
    // destructure profile

    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <Link to="/" className="brand-logo">Travel Budget</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><NavLink exact to="/">Login</NavLink></li>
                            <li><NavLink exact to="/trip">Trips</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar