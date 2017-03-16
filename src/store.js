import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

//reducer
import reducer from './reducers';

// create middleware
const middleware = applyMiddleware(thunk, promise(), logger());

export default createStore(reducer, middleware);