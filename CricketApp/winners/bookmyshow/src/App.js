import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";



import Theater from './Container/Theater/Theater.js'
import Movies from './Container/Movies/Movies.js'
import Screen from './Container/Seats/Screen.js'


class Routs extends Component {
    render() {
        return (
            <div>
            <Router>
                <Switch>
                <Route exact path='/' component={Theater}></Route>
                <Route exact path='/movies' component={Movies}></Route>
                <Route exact path='/screen' component={Screen}></Route>
                </Switch>
            
            </Router> 
            </div>
        )
    }
}

export default Routs
