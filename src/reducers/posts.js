import { DELETE, UPDATE, FETCH_ALL, CREATE } from '../constants/actionTypes.js'

export default (posts = [], action) => {
    switch(action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post); //map is basically making a new array
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
}