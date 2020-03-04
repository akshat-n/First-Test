import { createStore , compose , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/index.js'

const composeEnhancer=
typeof window === 'object' &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancer(
    applyMiddleware(thunk)
);


export default createStore(rootReducer,enhancer)