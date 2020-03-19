import { combineReducers } from 'redux';
import usersReducer from '../modules/users/reducers';
import postsReducer from '../modules/posts/reducers';

export default combineReducers({
    users: usersReducer,
    posts: postsReducer,
});