import * as FetchService from '../services/fetchService.js'
import { RETRIVE_SUCCESSFUL , ERROR } from '../reducer/fetchTheater.js'


export const fetchData=()=>{
    
    return (dispatch)=>{
        
        FetchService.fetchData()
        .then((response)=>{
            if(response.status===200){
                
                dispatch({
                    type:RETRIVE_SUCCESSFUL,
                    data:response.data
                })
            }
        }).catch((error)=>{
                dispatch({
                    type:ERROR,
                    data:{error_msg:"Invalid Data"}
                })
        })
    }
}