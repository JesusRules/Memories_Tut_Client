import { DELETE, UPDATE, FETCH_ALL, CREATE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_POST, COMMENT } from '../constants/actionTypes.js'

export default (state = { isLoading: true, posts: [], post: {}, comments: [] }, action) => {
    switch(action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data, //array of post objects
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
            
        case FETCH_POST:
            return { ...state, post: action.payload };
                
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload };
        case 'LIKE':
            return { ...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)}; //map is basically making a new array
        case CREATE:
            return { ...state, posts: [...state.posts, action.payload]};
        case UPDATE:
            return { ...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)}; //map is basically making a new array
        case DELETE:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload)}; //action.payload = id
        case COMMENT: //like UPDATE^ only change the post that recieved the comment
            return { 
                ...state, 
                posts: state.posts.map((post) => {
                    if (post._id === action.payload._id) {
                        return action.payload;
                    }
                    return post;
                })
            };
        default:
            return state;
    }
}