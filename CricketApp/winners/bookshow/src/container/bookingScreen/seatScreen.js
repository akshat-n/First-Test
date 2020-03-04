import React, { Component } from 'react'
import {Button} from 'reactstrap'

class seatScreen extends Component {
    render() {
        const seats=[];
        for(let i=0;i<20;i++){
           if(i%5==0)
           {
               seats.push(<tr></tr>)
           }
           seats.push(<td><Button color='secondary'>{i+1}</Button></td>)
        }

         console.log(seats)
        return (
            <div>
                <table align="center">
                    {seats}
                </table>
            </div>
        )
    }
}

export default seatScreen
