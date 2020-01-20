import React, { useState, Component } from 'react';
import { ModalHeader } from 'reactstrap';
import {  Form ,NavLink } from 'reactstrap';

import {  Link, } from "react-router-dom";


import '../../index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBInput } from 'mdbreact'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as authAction from '../../Actions/AuthLogin/auth.js'

export class Login extends Component {
    constructor(props) {
        super(props)
       
    }
    state = {

        username: "",
        password: "",
    }

  
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        })
        event.target.className += 'was-validated'

    }
    login = (e) => {
        e.preventDefault();

        const { username, password } = this.state;
        if(username==null || password==null){
            alert("Enter Username and password")
        }
        else{
            const credentials = {
                    username,
                    password
                }
                this.props.action.auth.login(credentials);
        }
    }
    checkval = (e) => {

        if (e.target.value == '') {
            e.target.classList.add('is-invalid')
        }
        else {
            e.target.classList.remove('is-invalid')
            e.target.classList.add('is-valid')
        }

    }

    render() {

        const padding = {
            padding: '10%'
        }
       
        const { username, password } = this.state;
        return (
           
            <div class="col-md-4 col-md-offset-4" id="login">
                <section id="inner-wrapper" class="login" >
                    <article>

                   
                <ModalHeader  width='40%'>Login</ModalHeader>

                        <Form style={padding} className='needs-validation' noValidate>

                            <MDBInput label="Username" className='form-control' icon="user" name="username" value={username} onChange={this.handleChange.bind(this)} onBlur={this.checkval.bind(this)} required />
                            <br />
                            < MDBInput type="password" label="password" icon="lock" name="password" value={password} onChange={this.handleChange.bind(this)}  onBlur={this.checkval.bind(this)} />
                            <br />
                            <br/>
                           
                     <div>
                     <button type="submit" class="btn btn-success btn-block" onClick={this.login.bind(this)}>Submit</button>
                      </div>
                      <br/>
                                <p className='pstyle'>not member?
                            <NavLink tag={Link} to='/registration'>SignIn</NavLink></p>
                            
                        </Form>
          


                    </article>
                </section>
            </div>
           

        )
    }
}

const mapStateToProps = (state) => {
    const { auth } = state;

    return {
        auth: auth
    }
}

const mapDispatchToProps = dispatch => ({
    action: {
        auth: bindActionCreators(authAction, dispatch)
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)


