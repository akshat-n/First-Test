import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as jwtDecode from 'jwt-decode';
import * as  authAction from '../../Actions/AuthLogin/auth.js' 

class userProfile extends Component {
    componentWillMount(){
        const token=this.props.auth.token;
        var decode=jwtDecode(token);
        this.props.action.auth.getUserData(decode.id)
    }   
    render() {
       
        
        return (
            <div class="container">
                <div class="row profile">
                    <div class="col-md-3">
                        <div class="profile-sidebar">
                          
                            <div class="profile-userpic">
                                <img src="http://localhost:3000/uploads\\1579240092074img5.jpg" class="img-responsive" alt=""/>
                            </div>
                          
                            <div class="profile-usertitle">
                                <div class="profile-usertitle-name">
                                    Marcus Doe
                                </div>
                                <div class="profile-usertitle-job">
                                    Developer
                                </div>
                            </div>
                           
                            <div class="profile-userbuttons">
                                <button type="button" class="btn btn-success btn-sm">Follow</button>
                                <button type="button" class="btn btn-danger btn-sm">Message</button>
                            </div>
                          
                            <div class="profile-usermenu">
                                <ul class="nav">
                                    <li class="active">
                                        <a href="#">
                                        <i class="glyphicon glyphicon-home"></i>
                                        Overview </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i class="glyphicon glyphicon-user"></i>
                                        Account Settings </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                        <i class="glyphicon glyphicon-ok"></i>
                                        Tasks </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i class="glyphicon glyphicon-flag"></i>
                                        Help </a>
                                    </li>
                                </ul>
                            </div>
                          
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="profile-content">
                           Some user related content goes here...
                        </div>
                    </div>
                </div>
                <center>
            <strong>Powered by <a href="http://j.mp/metronictheme" target="_blank">KeenThemes</a></strong>
            </center>
            <br/>
            <br/>
            </div>
           
        )
    }
}

const mapStateToProps = (state) =>{
    const { auth } = state;
    return{
        auth:auth
    }
}

const mapDispatchToProps = dispatch => ({
    action:{
        auth:bindActionCreators(authAction, dispatch),
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(userProfile);

