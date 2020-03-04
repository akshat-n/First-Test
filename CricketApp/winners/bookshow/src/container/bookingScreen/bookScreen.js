import React, { Component } from 'react'
// import React from 'react';

import { connect } from 'react-redux'
import { Button, Label } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as seatsAction from '../../actions/seatsAction.js'
import * as fetchSeat from '../../actions/fetchSeats.js'
import * as delSeat from '../../actions/deleteAction.js'
let b;
let a;
class bookScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checkedItems: new Map(),
            color: 'secondary',
        }
    }
    componentWillMount() {

        const Name = this.props.location.state.state.movie;
        const tname = this.props.location.state.state.tname;
        const mdate=this.props.location.state.state.mdate;
        this.props.action.fetchSeat.fetchSeats({tname,Name});
        const booked=this.props.data;
        console.log(booked)
        // b=booked.length;
        // a=20-b;
        // booked.map((item,i)=>{
        //     this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, 'success') })); 
        // })
        
    }
    bookSeat = () => {
        const Name = this.props.location.state.state.movie;
        const date = this.props.location.state.state.data;
        const tname = this.props.location.state.state.tname;
        console.log(tname);
        const { checkedItems } = this.state;
        let arr = [];
        checkedItems.forEach(function (item, key, ) {
            if (item == 'success') {
                arr.push(key)
            }
        })
        const data = {
            Name: tname,
            Movies: Name,
            Date: date,
            seats: arr
        }
        this.props.action.delSeat.delSeat({Name});
        this.props.action.seatsAction.insertSeat(data)
    }
    handlechange = (e) => {       
        const item = e.target.id;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, 'success') }));
        
        this.setState({
            color:'success'
        })
        
    }
    cancel=()=>{
        this.props.history.push('/')
    }
    render() {
        const seats = [];
        for (let i = 0; i < 20; i++) {
            if (i % 5 == 0) {
                seats.push(<tr></tr>)
            }
           
            seats.push(<td><Button color={this.state.checkedItems.get((i+1).toString())}  name={this.state.color} id={i+1} onClick={this.handlechange.bind(this)} >{i + 1}</Button></td>)
        }

        return (
            <div>
                <div>
                    <h1 align='center'>{this.props.location.state.state.movie}</h1>
                    <h1 align='center'>
                        {this.props.location.state.state.data}
                    </h1>
                </div>
                <table border='1' align='center'>
                    {seats}
                </table>
                <br />
                <div align='center'>
                <Label>Available:{a}</Label><span>   </span><Label>Booked:{b}</Label>
                </div>
                <div align='center'>
                   
                    <Button color='primary' onClick={this.bookSeat}>Book</Button> <Button color='danger' onClick={this.cancel}>cancel</Button>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {

    const { fetchseat } = state;
    return {
        seat: fetchseat

    }
}
const mapDispatchToProps = dispatch => ({
    action: {
        seatsAction: bindActionCreators(seatsAction, dispatch),
        fetchSeat:bindActionCreators(fetchSeat, dispatch),
        delSeat:bindActionCreators(delSeat, dispatch),

    }
})
export default connect(mapStateToProps, mapDispatchToProps)(bookScreen)
