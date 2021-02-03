import { authConstants } from "../actions/constant";

const iniState = {
    token: null,
    user : {
        firstName: '',
        lastName:'', 
        email:'',
        picture:'',
    },
    authenticate : false,
    authenticating: false,
    loading: false,
    error : null,
    message: ''
};

export default (state = iniState, action)=>{
    console.log(action)
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true,
            }
            break;
        case authConstants.LOGIN_SUCESS:
            state = {
                ...state,
                user : action.payload.user,
                token: action.payload.token,
                authenticate: true,
            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...iniState
            }
            break;  
        case authConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false,
            }
            break;          
    }
    return state;
}