import { createStore , compose , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducer/index.js'

const composeEnhancer=
typeof window === 'object' &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancer(
    applyMiddleware(thunk)
);

const INITIAL_STATE = {
    auth:{
        token:"",
        role:"",
        error_msg:""
    }
   
}

const token=localStorage.getItem('token');
const role=localStorage.getItem('role')

if(token){
    INITIAL_STATE.auth.token=token;
    INITIAL_STATE.auth.role=role;
}
export default createStore(rootReducer,INITIAL_STATE,enhancer)