import { AUTH, LOGOUT } from '../constants/actionTypes.js'

const authReducer = (state = { authData: null}, action) => {
    switch (action.type) {
        case LOGOUT:
            localStorage.clear();
            return {...state, authData: null};

        case AUTH: //signin/login and signup - for GOOGLE and CUSTOM AUTH
            localStorage.setItem('profile', JSON.stringify(action?.data)); //result, token - for GOOGLE
            return {...state, authData: action?.data };
        default:
            return state;
    }
}

export default authReducer;