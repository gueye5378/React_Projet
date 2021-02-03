import { categoryConstant } from "../actions/constant";

const iniState = {
    categories  :[],
    loading : false,
    error : null
};

export default (state = iniState , action)=> {
    switch (action.type){
        case categoryConstant.GET_ALL_CATEGORIES_SUCCESS: 
        state = {
            ...state ,
            categories : action.payload.categories
        }
        break
    }
    return state
}