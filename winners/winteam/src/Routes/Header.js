import React, { Component } from 'react'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authAction from '../Actions/AuthLogin/auth.js'
import {
  NavLink,
} from 'reactstrap';


class Header extends Component {
  logout=()=>{
   this.props.action.auth.logoutUser();
  }
  render() {
    const hstyle={
      height:'1300px'
    }
    const role=localStorage.getItem('role');
    return (
      <div>
        <header>
          <nav class="navbar fixed-top navbar-expand-lg navbar-dark blue scrolling-navbar">
            <a class="navbar-brand" href=""><strong>IPL</strong></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <NavLink class="nav-link" to='/' tag={Link}>Home <span class="sr-only">(current)</span></NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" tag={Link} to='/registration'>Registration</NavLink>
                </li>
                {role=='Admin' &&  <li class="nav-item">
                  <NavLink class="nav-link" tag={Link} to='/admin'>Admin</NavLink>
                </li> }
                {role=="User" &&  <li class="nav-item">
                  <NavLink class="nav-link" tag={Link} to='/user'>User</NavLink>
                </li> }
               
              </ul>
              <ul class="navbar-nav nav-flex-icons">
               
                <li class="nav-item">
                  <a class="nav-link" onClick={this.logout}><i class="fas fa-sign-out-alt"></i></a>
                </li>
              </ul>
            </div>
          </nav>

        </header>

        <main>
          <div class="container" className="hstyle">
            <div class="row mt-5 pt-5">
              <div class="col text-center">
               
               </div>
              </div>
            </div>
          </main>
  </div>
        )
    }
}

const mapStateToProps = (state) => {

    const { auth } = state;

    console.log("state", state.auth);
    return {
        auth: auth
    }
}
const mapDispatchToProps = dispatch => ({
  action:{
      auth:bindActionCreators(authAction, dispatch),
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
