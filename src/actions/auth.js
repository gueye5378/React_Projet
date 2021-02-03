import { authConstants } from "./constant"
import axios  from "../helper/axios"

export const login = (user) => {
    return async (dispatch) => {
        //* i use axios for do a request in my api server 
        dispatch({type: authConstants.LOGIN_REQUEST});
        const res = await axios.post(`/admin/signin`,{
            ...user
        })
        if (res.status === 200) {
            //* if when i pass my user imput form was dispach previously in my signin page the responce is 200 i dispach the token and the user in reducer 
            const {token , user} = res.data
            localStorage.setItem('token',  token);
            localStorage.setItem('user' , JSON.stringify(user))

            dispatch({
                type: authConstants.LOGIN_SUCESS,
                payload: {
                    token , user
                }
            })
        }else {
            if (res.status === 400) {
            //* if when i pass my user imput form was dispach previously in my signin page the responce is 400 i return in 
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {
                    error : res.data.error
                }
            })
            }
        }
    }
}


export const isUserLoggedIn = ()=> {
    return async dispatch => {
        const token = localStorage.getItem('token')
        if(token) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCESS,
                payload: {
                    token , user
                }
            })
        }else{
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {error : 'Failed to login'}
            })

        }
    }
}

export const signout = () => {
    return async dispatch => {

        dispatch({type: authConstants.LOGOUT_REQUEST})
        const res = await axios.post('/admin/signout')

        if(res.status === 200) {
            localStorage.clear();
            dispatch({
                type: authConstants.LOGOUT_SUCCESS,
            })
        }else {
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload: {error : res.data.error}
            })
        }
    }
}