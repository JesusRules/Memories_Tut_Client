import { combineReducers } from "redux";

import posts from './posts' //this state is called posts
import auth from './auth' //

export default combineReducers({ posts, auth });