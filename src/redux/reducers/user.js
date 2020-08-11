import { USER_FETCH, USER_SUCCESS, USER_ERROR } from "../actions/actionTypes";

const initialState = {
    users: null,
    error: "",
    loading:false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_FETCH: {
            return {
                ...state,
                loading:true,
             
                
            };
        }
        case USER_SUCCESS: {
            return {
                ...state,
                users:action.payload,
                loading:false,
                
               
            };
        }
        case USER_ERROR: {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
}
