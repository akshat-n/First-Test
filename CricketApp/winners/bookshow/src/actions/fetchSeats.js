import * as FetchService from '../services/fetchService.js'
import { SEAT_RETRIVE_SUCCESSFUL , SEAT_ERROR } from '../reducer/fetchSeats.js'
import { ALL_SEAT_RETRIVE_SUCCESSFUL , ALL_SEAT_ERROR } from '../reducer/AllSeatReducer.js'


export const fetchSeats=(credentials)=>{
    return (dispatch)=>{
        FetchService.fetchSeats(credentials)
        .then((response)=>{
            if(response.status===200){
                dispatch({
                    
                    type:SEAT_RETRIVE_SUCCESSFUL,
                    data:response.data
                })
            }
        }).catch((error)=>{
                dispatch({
                    type:SEAT_ERROR,
                    data:{error_msg:"Invalid Data"}
                })
        })
    }
}
export const fetchAllSeats=()=>{
    return (dispatch)=>{
        FetchService.fetchAllSeats()
        .then((response)=>{
            if(response.status===200){
                dispatch({
                    
                    type:ALL_SEAT_RETRIVE_SUCCESSFUL,
                    data:response.data
                })
            }
        }).catch((error)=>{
                dispatch({
                    type:ALL_SEAT_ERROR,
                    data:{error_msg:"Invalid Data"}
                })
        })
    }
}
