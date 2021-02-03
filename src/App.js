import './App.css';
import React, { useEffect } from 'react'
import { Route , Switch} from 'react-router-dom';
import Login from './containers/signin';
import Register from './containers/signup';
import Welcome from './containers/Welcome'
import product from './containers/Product'
import orders from './containers/Orders'
import category from './containers/category'
import PrivateRoute from './Private/privateRoute'
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn} from './actions'

function App() {
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch()

  //* i control everytime if the user have a token or not because i use useeffect fonction 
  useEffect(() =>{
      if (!auth.authenticate) {
          dispatch(isUserLoggedIn())
      }

  } , [])
  return (
    <div className="App">
    
        <Switch>
          {/* //! AFFECT TO THE HOME PAGE THE FUNCTION PRIVEROUTE*/}
          <PrivateRoute Route path="/" exact component={Welcome} />
          <PrivateRoute Route path="/product" exact component={product} />
          <PrivateRoute Route path="/orders" exact component={orders} />
          <PrivateRoute Route path="/category" exact component={category} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
    </div>
  );
}

export default App;
