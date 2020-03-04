import * as seatServive  from '../services/seatservice'
import { REGISTER_SUCCESSFULLY } from '../reducer/seatReducer.js'

export const insertSeat=(Credential)=>{
    
    return (dispatch)=>{
    
        seatServive.insertSeat(Credential)
        .then((response)=>{
            if(response.status==200){
                dispatch({
                    type:REGISTER_SUCCESSFULLY,
                    data:{success_msg:"Seat Registered Successfully"}
         
                })
            }
        }).catch((error)=>{
            
                console.log(error)
        })
    }
}