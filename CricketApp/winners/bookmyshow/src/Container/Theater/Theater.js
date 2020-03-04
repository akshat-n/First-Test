import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'


class Theater extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             theater:""
        }
    }
    handleclick=(e)=>{
        const theater=e.target.name
       
         this.props.history.push({pathname:'/movies'},{state:{data:theater}})
    }
    
    render() {
        const t=["VR","RahulRaj","CityPlus"];
        const renderTheater=t.map((item,i)=>{
            return(
                <div>
                        <br/>
                         <Button name={item} onClick={this.handleclick}>{item}</Button>
                         <br/>
                </div>
               
            )
            
        })

        return (
            <div align='center'>
                <h1>
                    Select Theater
                </h1>
                <br/>
                  {renderTheater}
            </div>
        )
    }
}

export default withRouter(Theater)
