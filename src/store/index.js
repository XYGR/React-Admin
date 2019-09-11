import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import user from './module/user';
import system from './module/system';

const rootReducer = combineReducers({
    user,
    system
})




const middlewares = [
    thunkMiddleware
]

export default createStore(rootReducer, applyMiddleware(...middlewares))
