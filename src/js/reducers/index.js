import { combineReducers } from 'redux';
import { reducer as ReduxFormReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
    posts: PostsReducer,
    form: ReduxFormReducer
});

export default rootReducer;