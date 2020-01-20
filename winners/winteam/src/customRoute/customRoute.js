import React, { Component } from 'react'
import { Route , Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as authAction from '../Actions/AuthLogin/auth.js'


class Croute extends Component {

    getExtractJson({ component , cprivate , crole , actions, auth , ...rest }){
        return rest;
    }

    render() {
        const rest=this.getExtractJson(this.props);

        const userCurrentRole = this.props.auth.role;
        const isUserLoggedIn = this.props.auth.token ? this.props.auth.token != "":false;
    
        const { component , cprivate , crole} = this.props;
        const Component = component;

        let redirectTo="";

        
        if(isUserLoggedIn && rest.path === '/'){
            if(userCurrentRole=='Admin')
            redirectTo='admin'
            else
            redirectTo="user"
        }
        

        if(isUserLoggedIn && rest.path === '/registration'){
            if(userCurrentRole=='Admin')
            redirectTo="admin"
            else
            redirectTo="user"
        }
        

        if(!isUserLoggedIn && cprivate)
        redirectTo='/'


        if(isUserLoggedIn && cprivate && crole && crole.filter((item)=>item === userCurrentRole).length===0)
        redirectTo='/unAuthorized'
        

    
        return (
            <Route
                {...rest}
                render ={props =>(
                    (redirectTo)
                    ?<Redirect to={{pathname:redirectTo , state:{from:props.location}}}/>
                    :<Component {...props}/>
                    
                )}
            />
        )
    }
}
const mapStateToProps=(state)=>{
    const { auth } =state;
    return {
        auth:auth
    }
}

const mapDispatchToProps=dispatch=>({
    action:{
        auth:bindActionCreators(authAction,dispatch)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Croute)



