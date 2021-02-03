import { userConstant } from "./constant"
import axios  from "../helper/axios"

export const register = (user) => {
    return async (dispatch) => {
        //* i use axios for do a request in my api server 
        dispatch({type: userConstant.USER_REGISTER_REQUEST});
        const res = await axios.post(`/admin/signup`,{
            ...user
        })
        if (res.status === 200) {
            //* if when i pass my user imput form was dispach previously in my signin page the responce is 200 i dispach the token and the user in reducer 
            const { message } = res.data
            dispatch({
                type: userConstant.USER_REGISTER_SUCCESS,
                payload: {
                   message
                }
            })
        }else {
            if (res.status === 400) {
            //* if when i pass my user imput form was dispach previously in my signin page the responce is 400 i return in 
            dispatch({
                type: userConstant.USER_REGISTER_FAILURE,
                payload: {
                    error : res.data.error
                }
            })
            }
        }
    }
}