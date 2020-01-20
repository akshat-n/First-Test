import * as FetchService from '../../Services/Fetch/FetchService.js'
import { RETRIVE_SUCCESSFUL , ERROR } from '../../Reducer/Fetch/FetchReducer.js'


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

export const fetchSelectedData=(credentials)=>{
    return (dispatch)=>{
        
        FetchService.fetchSelectedData(credentials)
        .then((response)=>{
            console.log(response)
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


