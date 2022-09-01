import { SIGNIN, SIGNOUT } from '../constants/actionTypes.js'
import * as api from '../api';

// Action Creators
export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(); //response
        //login in the user

        dispatch({ type: SIGN_IN, payload: data });
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(); //response
        //signup in the user

        dispatch({ type: SIGN_OUT, payload: data });
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}