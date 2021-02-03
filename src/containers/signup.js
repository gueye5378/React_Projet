import React, { useState, useEffect } from 'react'
import "./login.scss"
import logo from '../image/logo2.png';
import { Navbar, Form, Button, Row, Col } from 'react-bootstrap';
import Typed from 'react-typed';
import { NavLink, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions';
/**
* @author
* @function Signup
**/

const Signup = (props) => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)

    const userSignup = (e) => {
        e.preventDefault();
        const user = {
            firstName, lastName, email, password
        }
        dispatch(register(user))

    }

    if (auth.authenticate) {
        return <Redirect to="/" />
    }
    if (user.loading) {
        return <p>Loading...!</p>
    }
    return (
        <div className="register">
            <Navbar expand="lg" variant="light" fixed="top" className="nav">
                <div className="logo"></div>
                <div className="link">
                    <NavLink to="/" className="a">Help</NavLink>
                    <NavLink to="/login" className="a">Login</NavLink>
                    <NavLink to="/" className="a_active">Register</NavLink>
                </div>
            </Navbar>
            <div className="img_login">
                <div className="title_page">
                    <img src={logo} width="23%" height="40px" alt="logo"></img>
                    <h1><Typed
                        strings={['Register now to access are your e-commerce dashboard.']}
                        typeSpeed={30}
                    /></h1>
                    <p>Your digital business information thanks your management<br />
                     tool that monitor, analyze and visually display key performance<br />
                     indicators , metrics and key data points to monitor the health<br />
                     of a business.</p>
                </div>
            </div>
            <div className="Form_Register">
                <div className="title">
                    <p>{user.message}</p>
                    <h1>Register </h1>
                    <h6>Register in now to acess isights experience for your <br /> shop dashboard performance.</h6>
                </div>
                <div className="form">
                    <Form onSubmit={userSignup} >
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setfirstName(e.target.value)}
                                        placeholder="Enter your First Name" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setlastName(e.target.value)}
                                        placeholder="Enter your Last Name" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your admin email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your admin password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox" className="form_forget">
                            <Form.Check type="checkbox" label="Check me out" />
                            <p><a href="">Forget your password ?</a></p>
                        </Form.Group>
                        <Button variant="primary" type="submit" clasname="button_form" block>Singin</Button>
                    </Form>
                </div>
                <div class="footer_login">
                    <p>Don't have an account?<a href="">Create Account</a></p>
                    <p> 2020@Eboard</p>
                </div>
            </div>
        </div>
    )

}

export default Signup