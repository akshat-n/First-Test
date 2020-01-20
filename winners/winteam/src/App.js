import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";



import Croute from './customRoute/customRoute.js'
import Login from './container/LoginForm/Login.js'
import Registration from './container/Registration/Registration.js'
import Header from './Routes/Header.js'
import Admin from './container/Dashboard/Dashboard.js'
import unAuth from './UnAutorisedUser/unAuthorizedUser.js'
import User from './container/userProfile/userProfile.js'
import PageNotFound from './PageNotFound/PageNotFound.js'
import Pagination from './container/pagination/pagination.js'

class Routs extends Component {
    render() {
        return (
            <div>
            <Router>
          <Header/>
                <Switch>
                <Croute exact path="/" component={Login} />
                <Route  path="/registration" component={Registration} />
                <Croute  cprivate crole={['Admin']} path="/admin" component={Admin} />
                <Croute  cprivate crole={['Admin']}  path="/selectedData" component={Pagination}/>
                <Croute  cprivate crole={['User']}  path="/user" component={User}/>
                <Croute  cprivate path="/unAuthorized" component={unAuth}/>
                <Croute  cprivate component={PageNotFound}/>
                </Switch>
            </Router>
            </div>
        )
    }
}

export default Routs
