import { DELETE, UPDATE, FETCH_ALL, CREATE, FETCH_BY_SEARCH } from '../constants/actionTypes.js'

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data, //array of post objects
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload };
        case CREATE:
            return [...state, action.payload];
        case UPDATE:
            return state.map((post) => post._id === action.payload._id ? action.payload : post); //map is basically making a new array
        case DELETE:
            return state.filter((post) => post._id !== action.payload);
        default:
            return state;
    }
}