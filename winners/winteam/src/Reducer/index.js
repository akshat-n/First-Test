import { combineReducers } from 'redux'

import auth from './AuthReducer/auth.js'
import reg from '../Reducer/Registration/regReducer.js'
import fetch from '../Reducer/Fetch/FetchReducer.js'


export default combineReducers ( { auth , reg , fetch });