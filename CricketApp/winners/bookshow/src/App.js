import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";



import Theater from './container/Theater/Theater.js'
import Movie from './container/Movie/Movie.js'
import Screen from './container/bookingScreen/bookScreen.js'
import S from './container/bookingScreen/seatScreen'

class Routs extends Component {
    render() {
        return (
            <div>
            <Router>
                <Switch>
                <Route exact path='/' component={Theater}></Route>
                 <Route path='/movies'  component={Movie}></Route>
                 <Route path='/screen'  component={Screen}></Route>
                 <Route path='/s'  component={S}></Route>
                </Switch>
            
            </Router> 
            </div>
        )
    }
}

export default Routs
