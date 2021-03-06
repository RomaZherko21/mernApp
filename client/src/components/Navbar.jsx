import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


export const Navbar = () => {

    const history = useHistory()
    const auth = useContext(AuthContext)
    const logoutHandler = (e) => {
        e.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (
        <nav>
            <div className="nav-wrapper">
                <span className="brand-logo left">mernApp</span>
                <ul id="nav-mobile" className="right">
                    <li><NavLink to="/create">Create</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Exit</a></li>
                </ul>
            </div>
        </nav>
    )
}