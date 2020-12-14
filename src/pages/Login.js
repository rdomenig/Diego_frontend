import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api } from '../api';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);
    
    const login = (e) => {
        e.preventDefault();
        axios.post(api + '/signin', {
            email: email,
            password: password
        })
        .then(function (res) {
            localStorage.setItem('login', true);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', res.data.user._id);
            window.location.href = '/account';
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
                <h2>Login</h2>
            </div>
            <div className="row">
                <div className="login-area">
                    <Form onSubmit={login}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        {error && (
                        <Alert variant={"danger"}>
                            Email or password wrong!
                        </Alert>
                        )}
                        <button className="login-submit" type="submit">
                            Login
                        </button>
                        <Form.Group className="signup-link" controlId="formBasicCheckbox">
                            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login
