import authReducer from './authReducer'
import userReducer from './userReducer'
import productReducer from './product'
import categoryReducer from './category'
import orderReducer from './order'
import { combineReducers } from 'redux'

 const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    product: productReducer,
    category: categoryReducer,
    order: orderReducer,
})

export default rootReducer;