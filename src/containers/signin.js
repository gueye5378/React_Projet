import React, {useState , useEffect } from 'react'
import "./register.scss"
import logo from '../image/logo2.png';
import { Navbar , Form  , Button } from 'react-bootstrap';
import Typed from 'react-typed';
import { NavLink, Link , Redirect } from 'react-router-dom';
import {login} from '../actions'
import { useDispatch, useSelector } from 'react-redux';


/**
* @author
* @function Signin
**/

const Signin = (props) => {
    //* I create a usestate for all the imput in my form ( email , password)
    const [email, setEmail] = useState('');
    const [password , setPassword]= useState('');
    const [error , setError] = useState('');

    //* i save in my variable auth everything whas save in the strore 
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch()



    //* i dispach my submit response for the user in the auth action 
    const userLogin = (e) => {    
    e.preventDefault();
    
    const user = {
        email , password
    }
    dispatch(login(user))
    }
        if(auth.authenticate) {
        return <Redirect to="/" />
    }
  return(
    <div className="register">
    <Navbar expand="lg" variant="light"  fixed="top" className="nav">
            <div className="logo"></div>
            <div className="link">
                <NavLink to="/" className="a">Help</NavLink>
                <NavLink to="/login" className="a">Login</NavLink>
                <NavLink to="/register" className="a_active">Register</NavLink>
            </div>
    </Navbar>
    <div className="img_login">
        <div className="title_page">
            <img src={logo} width="23%" height="40px" alt="logo"></img>
            <h1><Typed
            strings={['Welcome back to your Shop dashboard.']}
            typeSpeed={30}
        /></h1>
            <p>Your digital business information thanks your management<br/>
             tool that monitor, analyze and visually display key performance<br/> 
             indicators , metrics and key data points to monitor the health<br/> 
             of a business.</p>
        </div>
    </div>
    <div className="Form_Register">
        <div className="title">
            <h1>Log in to your accout !</h1>
            <h6>Log in now to acess isights experience for your <br/> shop dashboard performance.</h6>
        </div>
        <div className="form">
        <Form onSubmit={userLogin}>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="Enter your admin email" 
                />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Enter your admin password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
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

export default Signin