import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Label } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as FetchMovie from '../../actions/fetchmovie.js'
import * as seatsAction from '../../actions/seatsAction.js';
import * as fetchSeat from '../../actions/fetchSeats.js'
import { withRouter, pathname } from 'react-router-dom'


class Movie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bdate: ""
        }
    }
    componentWillMount(){
        this.props.action.fetchSeat.fetchAllSeats();
    }
    bookDate = (e) => {
        this.setState({
            bdate: e.target.value
        })
    }
    onseat = (e) => {
        const datar = this.props.data.all.all_seats;
        
        const { bdate } = this.state;
        const tname = this.props.location.state.state.t
        const data = {
            Name: tname,
            Movies: e.target.name,
            Date: bdate,
        }
   
        const insert= datar.filter((item=> item.Movies == e.target.name && item.Date.substr(0,10) == bdate.substr(0,10)))
    
        if(insert.length==0){
           this.props.action.seatsAction.insertSeat(data)
        }

        if (bdate != "") {
            this.props.history.push({ pathname: '/screen' }, { state: { data: bdate, movie: e.target.name, tname: tname ,mdate:bdate} })
        }
 }       
        
       
    
        
        

    
    render() {
        const data = this.props.data.movies.movies;
        return (

            <div>
                <div>
                    <input type="date" onChange={this.bookDate}></input>
                </div>
                <table align='center'>
                    {
                        data.map((item, i) => {
                            return (
                                <tr>
                                    <td>
                                        <Button name={item.Movies} onClick={this.onseat.bind(this)} >{item.Movies} </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>


        )
    }
}


const mapStateToProps = (state) => {

    const { movies ,all} = state;

    console.log("state", state);
    return {
        data:{
            movies,
            all
        } 

    }
}

const mapDispatchToProps = dispatch => ({
    action: {
        fetchmovie: bindActionCreators(FetchMovie, dispatch),
        seatsAction: bindActionCreators(seatsAction, dispatch),
        fetchSeat:bindActionCreators(fetchSeat, dispatch),
    }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie))

