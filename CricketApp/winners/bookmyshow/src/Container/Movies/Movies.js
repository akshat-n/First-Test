import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as theaterAction from '../../Actions/fetchTheaterAction.js'

class Movies extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             date:"",
             movie:"",
             theater:""
        }
    }
    componentWillMount(){
        const t=this.props.location.state.state.data;
        this.setState({
            theater:t
        })
    

        
    }
    handleChangeCancel=()=>{
        this.props.history.goBack();
    }
    selectDate=(e)=>{
        this.setState({
            date:e.target.id
        })
    }
    selectMovie=(e)=>{
        const {theater,date}=this.state;
        const movie=e.target.name;
        if(date!="")
        
        this.props.history.push({pathname:"/screen"},{state:{tname:theater,mname:movie,date:date}})

    }
    render() {
        const t=["Tanhaji","StreetDancer"];
        const renderMovies=t.map((item,i)=>{
            return(
                <div>
                        <br/>
                         <Button name={item} onClick={this.selectMovie}>{item}</Button>
                         <br/>
                </div>
               
            )
            
        })

        return (
            <div align='center'>
                <h1>
                    Select Movies
                </h1>
                <br/>
                <h2>
                    <Button color='primary' id={"23-01-2020"} onClick={this.selectDate}>23</Button><span> </span><Button color='primary' id={"24-01-2020"} onClick={this.selectDate}>24</Button><span> </span>
                </h2>
                <br/>
                {renderMovies}
                <br/>
                <br/>
                <Button onClick={this.handleChangeCancel}>Cancel</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    const { theater } = state;


    return {
        data:theater
         

    }
}

const mapDispatchToProps = dispatch => ({
    action: {
        theater:bindActionCreators(theaterAction,dispatch)
    }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movies))
