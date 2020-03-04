import { combineReducers } from 'redux'

import fetch from './fetchTheater.js'
import movies from './fetchMovie.js'
import seat from './seatReducer.js'
import fetchseat from './fetchSeats.js'
import all from './AllSeatReducer.js'
import del from './deletereducer.js'


export default combineReducers ( {fetch , movies,seat,fetchseat,all,del});