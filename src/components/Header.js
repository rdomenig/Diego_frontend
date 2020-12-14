import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Link to="/"><h2 className="logo">Pocketask</h2></Link>
                    </div>
                    <div className="col-md-9">
                        <ul className="main-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/create">Create a task</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/app">App</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/account">Account</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
