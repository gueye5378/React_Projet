import axios  from "../helper/axios"
import { categoryConstant } from "./constant";

export const getAllCategory = () => {
    return async dispatch => {

        dispatch({type : categoryConstant.GET_ALL_CATEGORIES_REQUEST});
        const res = await axios.get('/category/getCategories');
        console.log(res);
        if(res.status == 200) {
            const { categoryList } = res.data 
            dispatch({
                type : categoryConstant.GET_ALL_CATEGORIES_SUCCESS ,
                payload: {categories : categoryList}
            })
        }else {
            dispatch({ 
                type : categoryConstant.GET_ALL_CATEGORIES_FAILURE ,
                payload : {error : res.data.error}
            })
        }
    }
}