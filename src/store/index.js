import { createStore, applyMiddleware } from "redux";
import routReducer  from "../reducers"
import thunk from "redux-thunk"

 const store = createStore(routReducer , applyMiddleware(thunk));

 export default store; 