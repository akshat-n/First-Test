import { combineReducers } from 'redux'

import seat from './SeatReducer.js'
import theater from './TheaterReducer.js'
import deleteReducer from './deleteReducer.js'

export default combineReducers ( {theater,deleteReducer});