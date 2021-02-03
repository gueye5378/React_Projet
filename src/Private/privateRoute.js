import React from 'react'
import {Route ,Redirect } from 'react-router-dom'

//! I SEE IF THE USER HAVE TOKEN IN HIM LOCALSTORAGE 
const PrivateRoute = ({component : Component , ...rest}) => {
    return <Route {...rest}  component={(props)=> {
        const token  = window.localStorage.getItem('token'); 
        if (token) {

            //*if the user hve the token i can go in the next page 
            return <Component {...props}/>
        }else {
            
            //*if the user don't have token in him localStorage he was redirect in the /login page 
            return <Redirect to={`/login`}/>
        }
    }}/>
}

export default PrivateRoute;