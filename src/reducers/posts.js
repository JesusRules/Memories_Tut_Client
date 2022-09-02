import { DELETE, UPDATE, FETCH_ALL, CREATE, FETCH_BY_SEARCH } from '../constants/actionTypes.js'

export default (posts = [], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        case FETCH_BY_SEARCH:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post); //map is basically making a new array
        default:
            return posts;
    }
}