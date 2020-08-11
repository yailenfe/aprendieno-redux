import axios from "axios";
import { USER_FETCH, USER_SUCCESS, USER_ERROR } from "./actionTypes";

export const userFetch = (user) => ({
    type: USER_FETCH,
    payload: user,
});

export const userSuccess = (user) => ({
    type: USER_SUCCESS,
    payload: user,
});
export const userError = (error) => ({
    type: USER_ERROR,
    payload: error,
});

export const getUsers = (user) => {
    return (dispatch) => {
        dispatch(userFetch(user));
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const user= response.data;
                dispatch(userSuccess(user));
            })
            .catch((error) => {
                const errorMsg = error.menssage;
                dispatch(userError(errorMsg));
            });
    };
};
