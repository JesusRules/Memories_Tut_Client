import { AUTH, LOGOUT } from '../constants/actionTypes.js'
import * as api from '../api';

// Actions
export const signin = (formData, history) => async (dispatch) => {
    try {
        const {data} = await api.signIn(formData);

        dispatch({ type: AUTH, data }); //result, token

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData); //result, token

        dispatch({ type: AUTH, data });

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}