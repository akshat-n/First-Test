import React, { Component } from 'react'


import { connect } from 'react-redux'
import { Button, Label } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as theaterAction from '../../Actions/fetchTheaterAction.js'
import * as delSeat from '../../Actions/deleteAction.js'
import * as insertSeat from '../../Actions/insertAction.js'

const arr = [];
let booked=[];
class Screen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checkedItems: new Map(),
            color: 'secondary',
            barr:[]
        }
    }
    componentWillMount() {
        const tname = this.props.location.state.state.tname
        const mname = this.props.location.state.state.mname
        const date = this.props.location.state.state.date
        const data = {
            tname,
            mname,
            date
        }
        this.props.action.theater.fetchTheater(data);
        
        booked = this.props.data.data;
         booked.map((item, i) => {
             this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, 'success') }));  
            
        })
    }
    handlechange = (e) => {
        var color;
        if(!booked.includes(e.target.id)){
            if (arr.includes(e.target.id) ) {
                color = 'secondary';
                const index = arr.indexOf(e.target.id);
                if (index > -1) {
                    arr.splice(index, 1);
                }   
            }
            else {
                arr.push(e.target.id);
                color = 'success'
            }   
            const item = e.target.id;
            this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, color) }));    
        }
        
      
       
    }
    cancel = () => {
        this.props.history.push('/')
    }
    bookSeat = () => {

        const Name = this.props.location.state.state.mname;
        const date = this.props.location.state.state.date;
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
        this.props.action.delSeat.delSeat({ Name });
        this.props.action.seatsAction.insertSeat(data)
    }
    render() {
        const Name = this.props.location.state.state.mname;
        const date = this.props.location.state.state.date;
        const tname = this.props.location.state.state.tname;
      let  b = booked.length
         let a=20-b;
        const seats = [];
        for (let i = 0; i < 20; i++) {
            if (i % 5 == 0) {
                seats.push(<tr></tr>)
            }
           
            seats.push(<td><Button color={this.state.checkedItems.get((i + 1).toString())} name={this.state.color} id={i + 1} onClick={this.handlechange.bind(this)} >{i + 1}</Button></td>)
        }

        return (
            <div>
                <div>

                    <h1 align='center'>
                        {tname}<span>  </span>{date}
                    </h1>
                    <h1 align='center'>
                        {Name}
                    </h1>
                </div>
                <table border='1' align='center'>
                    {seats}
                </table>
                <br />
                <div align='center'>

                </div>
                <div align='center'>
                    <Label>Available:{a}</Label><Label>Booked:{b}</Label>
                    <br/>
                    <Button color='primary' onClick={this.bookSeat}>Book</Button> <Button color='danger' onClick={this.cancel}>cancel</Button>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {

    const { theater } = state;


    return {
        data: theater


    }
}

const mapDispatchToProps = dispatch => ({
    action: {
        theater: bindActionCreators(theaterAction, dispatch),
        delSeat: bindActionCreators(delSeat, dispatch),
        seatsAction: bindActionCreators(insertSeat, dispatch)

    }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Screen))
