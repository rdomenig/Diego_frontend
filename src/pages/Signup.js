import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api } from '../api';

const Signup = () => {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);
    
    const signup = (e) => {
        e.preventDefault();
        axios.post(api + '/signup', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        })
        .then(function (res) {
            window.location.href = '/login';
        })
        .catch(function (error) {
            setError(true);
        });
    }

    if(localStorage.getItem('login')){
        window.location.href = '/account';
        return 'Loading...';
    }
    return (
        <div className="container login-section">
            <div className="row sec-title">
                <h2>Sign Up</h2>
            </div>
            <div className="row">
                <div className="login-area">
                    <Form onSubmit={signup}>
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Your first name" onChange={(e) => setFirstname(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Your last name" onChange={(e) => setLastname(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Set password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        {error && (
                        <Alert variant={"danger"}>
                            Something went wrong!
                        </Alert>
                        )}
                        <button className="login-submit" type="submit">
                            Sign Up
                        </button>
                        <Form.Group className="signup-link" controlId="formBasicCheckbox">
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Signup
