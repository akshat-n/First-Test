import * as deleteservice from '../Service/theaterService.js'
import { DELETE_SEAT , DELETE_ERROR } from '../Reducer/deleteReducer.js'


export const delSeat=(credentials)=>{
    return (dispatch)=>{
        deleteservice.deleteseat(credentials)
        .then((response)=>{
            if(response.status===200){
                
                dispatch({
                    type:DELETE_SEAT,
                    data:{success_msg:"Record Deleted"}
                })
            }
        }).catch((error)=>{
                dispatch({
                    type:DELETE_ERROR,
                    data:{error_msg:"Invalid Data"}
                })
        })
    }
}